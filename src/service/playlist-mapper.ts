import { Playlist } from '../model/playlist';
import { PlaylistDTO } from "../songbook-client/src";

export class PlaylistMapper {

    public static toEntity(dto: PlaylistDTO): Playlist {
        return {
            id: dto.id,
            name: dto.name,
            isPrivate: dto.isPrivate,
            creationTime: dto.creationTime,
            owner: undefined
        };
    }

}
