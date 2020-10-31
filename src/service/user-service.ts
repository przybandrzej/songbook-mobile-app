import { UserRole } from './../model/user-role';
import { User } from './../model/user';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlaylistDTO, SongDTO, UserDTO, UserRoleDTO } from '../songbook-client/src';
import { UserResourceApi } from '../songbook-client/src/api/UserResourceApi';

export class UserService {

    private api: UserResourceApi;

    constructor() {
        this.api = new UserResourceApi();
    }

    public static toEntity(dto: UserDTO): User {
        return {
            id: dto.id,
            username: dto.username,
            email: dto.email,
            firstName: dto.firstName,
            lastName: dto.lastName,
            imageUrl: dto.imageUrl,
            registrationDate: dto.registrationDate,
            activated: dto.activated,
            role: undefined
        }
    }

    public getUsers(limit: number): Observable<User[]> {
        return new Observable<User[]>(subscriber => {
            this.api.getAllUsersUsingGET({ limit }, (error: any, data: UserDTO[], response: any) => {
                if (error) {
                    subscriber.error(error);
                } else {
                    const list: Observable<User>[] = [];
                    for (const dto of data) {
                        list.push(this.getUserRole(dto.id).pipe(map(role => {
                            const user = UserService.toEntity(dto);
                            user.role = role;
                            return user;
                        })));
                    }
                    forkJoin(list).subscribe(next => {
                        subscriber.next(next);
                        subscriber.complete();
                    }, error => subscriber.error(error));
                }
            })
        });
    }

    public getUser(id: number): Observable<User> {
        const usr$ = new Observable<UserDTO>(subscriber => {
            this.api.getUserByIdUsingGET(id, (error: any, dto: UserDTO, response: any) => {
                if (!error) {
                    subscriber.next(dto);
                    subscriber.complete();
                } else {
                    subscriber.error(error);
                }
            })
        });
        return forkJoin([usr$, this.getUserRole(id)]).pipe(map(data => {
            const user = UserService.toEntity(data[0]);
            user.role = data[1];
            return user;
        }));
    }

    public deleteUser(id: number): Observable<void> {
        return new Observable<void>(subscriber => {
            this.api.deleteUserUsingDELETE(id, (error: any, data: void, response: any) => {
                if (!error) {
                    subscriber.next();
                    subscriber.complete();
                } else {
                    subscriber.error(error);
                }
            })
        });
    }

    public getUserRole(id: number): Observable<UserRole> {
        return new Observable<UserRole>(subscriber => {
            this.api.getUserRoleUsingGET(id, (error: any, data: UserRoleDTO, response: any) => {
                if (!error) {
                    subscriber.next(UserRoleService.toEntity(data));
                    subscriber.complete();
                } else {
                    subscriber.error(error);
                }
            })
        });
    }

    public getUserSongs(id: number): Observable<SongDTO[]> {
        return new Observable<SongDTO[]>(subscriber => {
            this.api.getUserByIdUsingGET(id, (error: any, data: SongDTO[], response: any) => {
                if (!error) {
                    subscriber.next(data);
                    subscriber.complete();
                } else {
                    subscriber.error(error);
                }
            })
        });
    }

    public getUserPlaylists(id: number): Observable<PlaylistDTO[]> {
        return new Observable<PlaylistDTO[]>(subscriber => {
            this.api.getUserByIdUsingGET(id, (error: any, data: PlaylistDTO[], response: any) => {
                if (!error) {
                    subscriber.next(data);
                    subscriber.complete();
                } else {
                    subscriber.error(error);
                }
            })
        });
    }
}