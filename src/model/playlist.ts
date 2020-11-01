import { User } from './user';

export interface Playlist {
    id: number;
    name: string;
    isPrivate: boolean;
    creationTime: Date;
    owner?: User;
}