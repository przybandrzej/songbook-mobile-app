import { Tag } from './tag';
import { User } from './user';
import { Verse } from './verse';
import { Category } from './category';
import { Author } from "./author";
import { SongCoauthorDTO } from '../songbook-client/src';

export interface Song {
    id: number;
    title: string;
    author?: Author;
    category?: Category;
    coauthors: SongCoauthor[];
    verses: Verse[];
    averageRating: number;
    isAwaiting: boolean;
    trivia: string;
    edits: SongEdit[];
    added?: SongAdd;
    tags: Tag[];
}

export interface SongCoauthor {
    id: number;
    author: Author;
    function: SongCoauthorDTO.CoauthorFunctionEnum;
}

export interface SongEdit {
    id: number;
    user: User;
    time: Date;
}

export interface SongAdd {
    id: number;
    user: User;
    time: Date;
}
