import { Playlist } from './../model/playlist';
import { PlaylistDTO, PlaylistResourceApi } from "../songbook-client/src";

export class PlaylistService {

    private api: PlaylistResourceApi;

    constructor() {
        this.api = new PlaylistResourceApi();
    }

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
