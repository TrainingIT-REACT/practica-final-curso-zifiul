import { IAlbum } from '../albums/albums.interfaces';
import { ISong } from '../songs/songs.interfaces';

export interface IHistoricSong {
    song: ISong;
    count: number;
}

export interface IHistoricAlbum {
    album: IAlbum;
    count: number;
}
