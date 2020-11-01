import { Verse } from './verse';
import { Category } from './category';
import { Author } from "./author";
import { SongCoauthorDTO } from '../songbook-client/src';

export interface Song {
    id: number;
    title: string;
    author: Author;
    category: Category;
    coauthors: SongCoauthor[];
    verses: Verse[];
    averageRating: number;
    isAwaiting: boolean;
    trivia: string;
}

export interface SongCoauthor {
    author: Author;
    function: SongCoauthorDTO.CoauthorFunctionEnum;
}
