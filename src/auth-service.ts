export class AuthService {

    private static _instance: AuthService;
    private _token: string;

    private constructor() { }

    public static get Instance(): AuthService {
        if (!AuthService._instance) {
            AuthService._instance = new AuthService();
        }
        return AuthService._instance;
    }

    public get token(): string {
        return this._token;
    }

    public isLoggedIn(): boolean {
        return false;
    }
}