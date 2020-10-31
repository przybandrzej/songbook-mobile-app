import { map } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { UserDTO, UserRoleDTO, UserRoleResourceApi } from '../songbook-client/src';
import { UserRole } from './../model/user-role';
import { User } from './../model/user';
import { UserService } from './user-service';

export class UserRoleService {

    private api: UserRoleResourceApi;
    private userService: UserService;

    constructor() {
        this.api = new UserRoleResourceApi();
        this.userService = new UserService();
    }

    public toEntity(dto: UserRoleDTO): UserRole {
        return {
            id: dto.id,
            name: dto.name
        };
    }

    public getRoles(): Observable<UserRole[]> {
        return new Observable<UserRole[]>(subscriber => {
            this.api.getAllRolesUsingGET((error: any, data: UserRoleDTO[], response: any) => {
                if (error) {
                    subscriber.error(error);
                } else {
                    subscriber.next(data.map(it => this.toEntity(it)));
                    subscriber.complete();
                }
            });
        });
    }

    public getRole(id: number): Observable<UserRole> {
        return new Observable<UserRole>(subscriber => {
            this.api.getRoleByIdUsingGET(id, (error: any, data: UserRoleDTO, response: any) => {
                if (error) {
                    subscriber.error(error);
                } else {
                    subscriber.next(this.toEntity(data));
                    subscriber.complete();
                }
            });
        });
    }

    public getRoleUsers(id: number): Observable<User[]> {
        const role$ = this.getRole(id);
        const users$ = new Observable<UserDTO[]>(subscriber => {
            this.api.getUserRoleUsersUsingGET(id, (error: any, data: UserDTO[], response: any) => {
                if (error) {
                    subscriber.error(error);
                } else {
                    subscriber.next(data);
                    subscriber.complete();
                }
            });
        });
        return forkJoin([role$, users$]).pipe(map(data => {
            return data[1].map(it => {
                const user = this.userService.toEntity(it);
                user.role = data[0];
                return user;
            });
        }));
    }
}