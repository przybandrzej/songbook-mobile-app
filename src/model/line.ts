import { GuitarCord } from './guitar-cord';

export interface Line {
    id: number;
    content: string;
    order: number;
    cords: GuitarCord[];
}
