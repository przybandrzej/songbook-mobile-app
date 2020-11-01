import { GuitarCordDTO } from '../songbook-client/src';
import { GuitarCord } from './../model/guitar-cord';

export class GuitarCordMapper {

    public static toEntity(dto: GuitarCordDTO): GuitarCord {
        return {
            id: dto.id,
            content: dto.content,
            position: dto.position
        };
    }
}