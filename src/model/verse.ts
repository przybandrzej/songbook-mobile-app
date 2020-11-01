import { Line } from './line';

export interface Verse {
    id: number;
    order: number;
    isChorus: boolean;
    lines: Line[];
}