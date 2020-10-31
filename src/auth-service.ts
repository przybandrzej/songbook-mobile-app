import { AppState } from './app-state';
import { UserService } from './service/user-service';
import { Role } from './model/user-role';
import { User } from './model/user';
import { from, Observable, ReplaySubject, Subscription } from 'rxjs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationResourceApi, LoginForm, TokenDTO, UserDTO } from './songbook-client/src';

const base64 = require('base-64');

const TOKEN_NAME = 'id_token';

export class AuthService {

    private loggedInSubject: ReplaySubject<boolean>;
    public readonly loggedIn$: Observable<boolean>;
    private userSubject: ReplaySubject<User | null>;
    public readonly user$: Observable<User | null>;
    private lastUser: User | null;

    private static _instance: AuthService;
    private authApi: AuthenticationResourceApi;
    private userService: UserService;

    private counterSubscription: Subscription | undefined;

    private static setToken(token: string): Observable<void> {
        return from(AsyncStorage.setItem(TOKEN_NAME, token));
    }

    private static removeToken(): Observable<void> {
        return from(AsyncStorage.removeItem(TOKEN_NAME));
    }

    public static getToken(): Observable<string | null> {
        return from(AsyncStorage.getItem(TOKEN_NAME));
    }

    public static get Instance(): AuthService {
        if (!AuthService._instance) {
            AuthService._instance = new AuthService();
        }
        return AuthService._instance;
    }

    private constructor() {
        this.lastUser = null;
        this.counterSubscription = undefined;
        this.userService = new UserService();
        this.authApi = new AuthenticationResourceApi();
        this.userSubject = new ReplaySubject<User | null>(1);
        this.user$ = this.userSubject.asObservable();
        this.loggedInSubject = new ReplaySubject<boolean>(1);
        this.loggedIn$ = this.loggedInSubject.asObservable();
        this.initToken();
    }

    private initToken(): void {
        AuthService.getToken().subscribe(token => {
            if (token) {
                console.log('get token');
                AppState.token = token;
                const expiration = +JSON.parse(base64.decode(token.split('.')[1])).expiration_in_milliseconds;
                this.setLogged((expiration - new Date().getTime()) > 0);
            } else {
                console.log('no token');
                this.setLogged(false);
            }
        });
    }

    public login(loginForm: LoginForm, errorCallback?: (error: any) => void): void {
        console.log('Login ' + JSON.stringify(loginForm));
        this.authApi.authenticateUsingPOST(loginForm,
            (error: any, token: TokenDTO, response: any) => {
                console.log(error);
                if (error && errorCallback) {
                    errorCallback(error);
                }
                if (token) {
                    AppState.token = token.idToken;
                    AuthService.setToken(token.idToken).subscribe();
                    this.setLoggedIn();
                }
            });
    }

    public logout(): void {
        this.setLoggedOut();
    }

    private setLogged(value: boolean): void {
        if (value) {
            this.setLoggedIn();
        } else {
            this.setLoggedOut();
        }
    }

    public setLoggedOut(): void {
        console.log('set logged out');
        AuthService.removeToken().subscribe(
            () => {
                console.log('token removed');
                AppState.token = undefined;
                this.loggedInSubject.next(false);
                this.setUser(null);
                this.stopCounting();
            }
        );
    }

    public setLoggedIn(): void {
        console.log('set logged in');
        this.loggedInSubject.next(true);
        if (!this.lastUser) {
            this.authApi.getAccountUsingGET((error: any, data: UserDTO, response: any) => {
                if (!error) {
                    this.userService.getUser(data.id).subscribe(user => this.setUser(user));
                }
            });
        }
        this.startCounting();
    }

    private setUser(user: User | null): void {
        this.lastUser = user;
        this.userSubject.next(this.lastUser);
    }

    private checkTokenNotExpired(): boolean {
        if (AppState.token) {
            const expiration = +JSON.parse(base64.decode(AppState.token.split('.')[1])).expiration_in_milliseconds;
            return (expiration - new Date().getTime()) > 0;
        }
        return false;
    }

    public getUserRole(): Role | undefined {
        if (this.checkTokenNotExpired()) {
            if (!AppState.token) {
                return undefined;
            }
            return JSON.parse(base64.decode(AppState.token.split('.')[1])).auth;
        }
        return undefined;
    }

    public isSuperuser(): boolean {
        return this.hasRole(Role.Superuser);
    }

    public isAdmin(): boolean {
        return this.hasRole(Role.Admin) || this.isSuperuser();
    }

    public isModerator(): boolean {
        return this.hasRole(Role.Moderator) || this.isAdmin();
    }

    private hasRole(role: Role): boolean {
        return this.getUserRole() === role;
    }

    private startCounting(): void {
        if (this.counterSubscription) {
            this.counterSubscription.unsubscribe();
        }
        this.counterSubscription = new Observable<boolean>(observer => {
            const now = new Date().getTime();
            const delay = +JSON.parse(base64.decode(AppState.token?.split('.')[1])).expiration_in_milliseconds - now;
            setTimeout(() => {
                observer.next(false);
                observer.complete();
            }, delay);
        }).subscribe(loggedOut => {
            this.authApi.isAuthenticatedUsingGET(
                (error: any, data: boolean, response: any) => {
                    if (data === loggedOut) {
                        this.setLogged(loggedOut);
                    }
                });
        });
    }

    private stopCounting(): void {
        if (this.counterSubscription) {
            this.counterSubscription.unsubscribe();
        }
    }

}
