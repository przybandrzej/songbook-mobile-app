import { Observable } from 'rxjs';
import { Category } from './../model/category';
import { CategoryDTO, CategoryResourceApi } from "../songbook-client/src";

export class CategoryService {

    private api: CategoryResourceApi;

    constructor() {
        this.api = new CategoryResourceApi();
    }

    public static toEntity(dto: CategoryDTO): Category {
        return {
            id: dto.id,
            name: dto.name
        };
    }

    public getCategories(): Observable<Category[]> {
        return new Observable<Category[]>(subscriber => {
            this.api.getAllCategoriesUsingGET(
                (error: any, data: CategoryDTO[], response: any) => {
                    if (error) {
                        subscriber.error(error.response.body);
                    } else {
                        subscriber.next(data.map(CategoryService.toEntity));
                        subscriber.complete();
                    }
                }
            );
        });
    }

    public getCategory(id: number): Observable<Category> {
        return new Observable<Category>(subscriber => {
            this.api.getCategoryByIdUsingGET(id,
                (error: any, data: CategoryDTO, response: any) => {
                    if (error) {
                        subscriber.error(error.response.body);
                    } else {
                        subscriber.next(CategoryService.toEntity(data));
                        subscriber.complete();
                    }
                }
            );
        });
    }



}
