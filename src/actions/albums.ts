import { createAsyncAction } from 'redux-promise-middleware-actions';
import { IAlbum } from '../modules/albums/albums.interfaces';
import { ISong } from '../modules/songs/songs.interfaces';
import * as Constants from '../constants';

export const getAlbums = createAsyncAction('POSTS', async () => {
    const res = await fetch(`${Constants.API_URL}/albums`);
    const albums = await res.json();
    const songs = await getSongs();
    return composeAlbumsData(albums, songs);
});

const getSongs = async () => {
    const res = await fetch(`${Constants.API_URL}/songs`);
    return await res.json();
};

const composeAlbumsData = (albums: IAlbum[], songs: ISong[]) => {
    albums.forEach(album => album.songs = songs.filter((song: ISong) => song.albumId === album.id));
    return albums;
}