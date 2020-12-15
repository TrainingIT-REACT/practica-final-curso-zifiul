import { ISong } from '../songs/songs.interfaces';

export interface IAlbum {
    id: number;
    name: string;
    artist: string;
    cover: string;
    songs: ISong[];
}
