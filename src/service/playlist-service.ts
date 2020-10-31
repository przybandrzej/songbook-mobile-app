import { PlaylistResourceApi } from "../songbook-client/src";

export class PlaylistService {

    private api: PlaylistResourceApi;

    constructor() {
        this.api = new PlaylistResourceApi();
    }
}