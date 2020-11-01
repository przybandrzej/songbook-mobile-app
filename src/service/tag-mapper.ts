import { Tag } from '../model/tag';
import { TagDTO } from "../songbook-client/src";


export class TagMapper {

    public static toEntity(dto: TagDTO): Tag {
        return {
            id: dto.id,
            name: dto.name
        };
    }
}