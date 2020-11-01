import { Song } from './song';
import { UserRole } from './user-role';

export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    imageUrl: string;
    registrationDate: Date;
    activated: boolean;
    role?: UserRole;
}

export interface UserAddedSong {
    id: number;
    song: Song;
    time: Date;
}

export interface UserEditedSong {
    id: number;
    song: Song;
    time: Date;
}

export interface UserRatedSong {
    id: number;
    song: Song;
    rating: number;
}
