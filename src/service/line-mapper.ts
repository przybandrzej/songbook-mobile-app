import { Line } from './../model/line';
import { LineDTO } from "../songbook-client/src";

export class LineMapper {

    public static toEntity(dto: LineDTO): Line {
        return {
            id: dto.id,
            content: dto.content,
            order: dto.order,
            cords: []
        };
    }
}