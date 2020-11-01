import { VerseMapper } from './verse-mapper';
import { LineMapper } from './line-mapper';
import { Line } from './../model/line';
import { Verse } from './../model/verse';
import { getUserById } from './user-service';
import { map } from 'rxjs/operators';
import { SongAdd, SongCoauthor, SongEdit, Song } from './../model/song';
import { Category } from './../model/category';
import { AuthorService } from './author-service';
import { Author } from './../model/author';
import { TagService } from './tag-service';
import { Tag } from './../model/tag';
import { Observable, forkJoin } from 'rxjs';
import { AuthorDTO, CategoryDTO, GuitarCordDTO, LineDTO, LineResourceApi, SongAddDTO, SongCoauthorDTO, SongDTO, SongEditDTO, SongResourceApi, TagDTO, VerseDTO, VerseResourceApi } from "../songbook-client/src";
import { CategoryService } from './category-service';
import { GuitarCord } from '../model/guitar-cord';
import { GuitarCordMapper } from './guitar-cord-mapper';


export class SongService {

    private api: SongResourceApi;
    private authorService: AuthorService;
    private lineApi: LineResourceApi;
    private verseApi: VerseResourceApi;

    constructor() {
        this.api = new SongResourceApi();
        this.authorService = new AuthorService();
        this.verseApi = new VerseResourceApi();
        this.lineApi = new LineResourceApi();
    }

    public static toEntity(dto: SongDTO): Song {
        return {
            id: dto.id,
            title: dto.title,
            author: undefined,
            category: undefined,
            coauthors: [],
            verses: [],
            averageRating: dto.averageRating,
            isAwaiting: dto.isAwaiting,
            trivia: dto.trivia,
            edits: [],
            added: undefined,
            tags: []
        };
    }

    public getSong(id: number): Observable<Song> {
        const tags$ = this.getSongTags(id);
        const author$ = this.getSongAuthor(id);
        const category$ = this.getSongCategory(id);
        const add$ = this.getSongAdd(id);
        const edits$ = this.getSongEdits(id);
        const coauthors$ = this.getSongCoauthors(id);
        const verses$ = this.getSongVerses(id);
        return new Observable<Song>(subscriber => {
            this.api.getSongByIdUsingGET(id, (error: any, dto: SongDTO, response: any) => {
                if (error) {
                    subscriber.error(error);
                } else {
                    const song = SongService.toEntity(dto);
                    forkJoin([verses$, coauthors$, edits$, add$, category$, author$, tags$]).subscribe(data => {
                        song.verses = <Verse[]>data[0];
                        song.coauthors = <SongCoauthor[]>data[1];
                        song.edits = <SongEdit[]>data[2];
                        song.added = <SongAdd>data[3];
                        song.category = <Category>data[4];
                        song.author = <Author>data[5];
                        song.tags = <Tag[]>data[6];
                        subscriber.next(song);
                        subscriber.complete();
                    },
                        error => subscriber.error(error));
                }
            });
        });
    }

    public getSongTags(id: number): Observable<Tag[]> {
        return new Observable<Tag[]>(subscriber => {
            this.api.getSongTagsUsingGET(id,
                (error: any, data: TagDTO[], response: any) => {
                    if (error) {
                        subscriber.error(error);
                    } else {
                        subscriber.next(data.map(TagService.toEntity));
                        subscriber.complete();
                    }
                });
        });
    }

    public getSongAuthor(id: number): Observable<Author> {
        return new Observable<Author>(subscriber => {
            this.api.getSongAuthorUsingGET(id,
                (error: any, data: AuthorDTO, response: any) => {
                    if (error) {
                        subscriber.error(error);
                    } else {
                        subscriber.next(AuthorService.toEntity(data));
                        subscriber.complete();
                    }
                });
        });
    }

    public getSongCategory(id: number): Observable<Category> {
        return new Observable<Category>(subscriber => {
            this.api.getSongCategoryUsingGET(id,
                (error: any, data: CategoryDTO, response: any) => {
                    if (error) {
                        subscriber.error(error);
                    } else {
                        subscriber.next(CategoryService.toEntity(data));
                        subscriber.complete();
                    }
                });
        });
    }

    public getSongCoauthors(id: number): Observable<SongCoauthor[]> {
        return new Observable<SongCoauthor[]>(subscriber => {
            this.api.getSongCategoryUsingGET(id,
                (error: any, data: SongCoauthorDTO[], response: any) => {
                    if (error) {
                        subscriber.error(error);
                    } else {
                        const coauthors$ = data.map(it => this.authorService.getAuthor(it.authorId)
                            .pipe(map(aut => {
                                return {
                                    id: it.id,
                                    function: it.coauthorFunction,
                                    author: aut
                                };
                            })));
                        forkJoin(coauthors$).subscribe(coauthors => {
                            subscriber.next(coauthors);
                            subscriber.complete();
                        });
                    }
                });
        });
    }

    public getSongAdd(id: number): Observable<SongAdd> {
        return new Observable<SongAdd>(subscriber => {
            this.api.getSongAddedByUsingGET(id,
                (error: any, data: SongAddDTO, response: any) => {
                    if (error) {
                        subscriber.error(error);
                    } else {
                        getUserById(data.addedBy).subscribe(user => {
                            const add: SongAdd = { id: data.id, time: data.timestamp, user: user };
                            subscriber.next(add);
                            subscriber.complete();
                        },
                            error => subscriber.error(error));
                    }
                });
        });
    }

    public getSongEdits(id: number): Observable<SongEdit[]> {
        return new Observable<SongEdit[]>(subscriber => {
            this.api.getSongEditsUsingGET(id,
                (error: any, data: SongEditDTO[], response: any) => {
                    if (error) {
                        subscriber.error(error);
                    } else {
                        const edits$ = data.map(it => getUserById(it.editedBy).pipe(map(usr => {
                            const edt: SongEdit = { id: it.id, time: it.timestamp, user: usr };
                            return edt;
                        })));
                        forkJoin(edits$).subscribe(edits => {
                            subscriber.next(edits);
                            subscriber.complete();
                        },
                            error => subscriber.error(error));
                    }
                });
        });
    }

    public getSongVerses(id: number): Observable<Verse[]> {
        return new Observable<Verse[]>(subscriber => {
            this.api.getSongVersesUsingGET(id,
                (error: any, data: VerseDTO[], response: any) => {
                    if (error) {
                        subscriber.error(error);
                    } else {
                        const verses$ = data.map(dto => this.getVerseLines(dto.id).pipe(map(lines => {
                            const verse = VerseMapper.toEntity(dto);
                            verse.lines = lines;
                            return verse;
                        })));
                        forkJoin(verses$).subscribe(res => {
                            subscriber.next(res);
                            subscriber.complete();
                        },
                            err => subscriber.error(err));
                    }
                });
        });
    }

    public getVerseLines(verseId: number): Observable<Line[]> {
        return new Observable<Line[]>(subscriber => {
            this.verseApi.getVerseLinesUsingGET(verseId,
                (error: any, lines: LineDTO[], response: any) => {
                    if (error) {
                        subscriber.error(error);
                    } else {
                        const lines$ = lines.map(it => this.getLineCords(it.id).pipe(map(cords => {
                            const line = LineMapper.toEntity(it);
                            line.cords = cords;
                            return line;
                        })));
                        forkJoin(lines$).subscribe(res => {
                            subscriber.next(res);
                            subscriber.complete();
                        },
                            err => subscriber.error(err));
                    }
                });
        });
    }

    public getLineCords(lineId: number): Observable<GuitarCord[]> {
        return new Observable<GuitarCord[]>(subscriber => {
            this.lineApi.getLineCordsUsingGET(lineId,
                (error: any, cords: GuitarCordDTO[], response: any) => {
                    if (error) {
                        subscriber.error(error);
                    } else {
                        subscriber.next(cords.map(GuitarCordMapper.toEntity));
                        subscriber.complete();
                    }
                });
        });
    }

}
