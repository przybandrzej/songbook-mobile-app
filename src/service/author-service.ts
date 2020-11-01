import { Observable } from 'rxjs';
import { Author } from './../model/author';
import { AuthorDTO, AuthorResourceApi } from "../songbook-client/src";

export class AuthorService {

    private api: AuthorResourceApi;

    constructor() {
        this.api = new AuthorResourceApi();
    }

    public static toEntity(dto: AuthorDTO): Author {
        return {
            id: dto.id,
            name: dto.name,
            biographyUrl: dto.biographyUrl,
            photoResource: dto.photoResource
        };
    }

    public getAuthor(id: number): Observable<Author> {
        return new Observable<Author>(subscriber => {
            this.api.getAuthorByIdUsingGET(id,
                (error: any, data: AuthorDTO, response: any) => {
                    if (error) {
                        subscriber.error(error.response.body);
                    } else {
                        subscriber.next(AuthorService.toEntity(data));
                        subscriber.complete();
                    }
                });
        });
    }

}
