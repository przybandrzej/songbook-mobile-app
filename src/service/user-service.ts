import { Observable } from 'rxjs';
import { UserDTO } from '../songbook-client/src';
import { UserResourceApi } from '../songbook-client/src/api/UserResourceApi';

export class UserService {

    private api: UserResourceApi;

    constructor() {
        this.api = new UserResourceApi();
    }

    public getUsers(limit: number): Observable<UserDTO[]> {
        return new Observable<UserDTO[]>(subscriber => {
            this.api.getAllUsingGET6({ limit }, (error: any, data: UserDTO[], response: any) => {
                if (!error) {
                    subscriber.next(data);
                    subscriber.complete();
                } else {
                    subscriber.error(error);
                }
            })
        });
    }

    public getUser(id: number): Observable<UserDTO> {
        return new Observable<UserDTO>(subscriber => {
            this.api.getByIdUsingGET6(id, (error: any, data: UserDTO, response: any) => {
                if (!error) {
                    subscriber.next(data);
                    subscriber.complete();
                } else {
                    subscriber.error(error);
                }
            })
        });
    }

    public deleteUser(id: number): Observable<void> {
        return new Observable<void>(subscriber => {
            this.api.deleteUsingDELETE6(id, (error: any, data: UserDTO, response: any) => {
                if (!error) {
                    subscriber.next();
                    subscriber.complete();
                } else {
                    subscriber.error(error);
                }
            })
        });
    }
}