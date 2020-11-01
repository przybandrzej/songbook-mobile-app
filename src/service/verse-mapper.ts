import { Verse } from './../model/verse';
import { VerseDTO } from "../songbook-client/src";


export class VerseMapper {

    public static toEntity(dto: VerseDTO): Verse {
        return {
            id: dto.id,
            isChorus: dto.chorus,
            order: dto.order,
            lines: []
        };
    }
}