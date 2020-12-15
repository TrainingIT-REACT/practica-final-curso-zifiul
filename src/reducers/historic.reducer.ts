import { createContext, Reducer, useReducer } from 'react';
import { IAlbum } from '../modules/albums/albums.interfaces';
import { IHistoricAlbum, IHistoricSong } from '../modules/home/historic.interfaces';
import { ISong } from '../modules/songs/songs.interfaces';

export interface IHistoricState {
    recommendedSongs: IHistoricSong[],
    recommendedAlbums: IHistoricAlbum[],
}

export type HistoricAction = { 
    type: 'REGISTER_SONG';
    payload: { song: ISong } 
} | {
    type: 'REGISTER_ALBUM';
    payload: { album: IAlbum } 
};

export const HistoricContext = createContext<
    [IHistoricState, React.Dispatch<HistoricAction>]
>([{} as any, (): undefined => undefined]);

const historicReducer: Reducer<IHistoricState, HistoricAction> = (state, action) => {
    switch (action.type) {
        case 'REGISTER_SONG':
            const recommendedSongs = state.recommendedSongs as IHistoricSong[];
            const recommendedSong = recommendedSongs.find((hs: IHistoricSong) => hs.song.id === action.payload.song.id); 
            if (recommendedSong) {
                recommendedSong.count += 1;
            } else {
                recommendedSongs.push({
                    song: action.payload.song,
                    count: 1,
                });
            }

            return {
                recommendedSongs,
                recommendedAlbums: state.recommendedAlbums,
            };
        case 'REGISTER_ALBUM':
            const recommendedAlbums = state.recommendedAlbums as IHistoricAlbum[];
            const recommendedAlbum = recommendedAlbums.find((ha: IHistoricAlbum) => ha.album.id === action.payload.album.id); 
            if (recommendedAlbum) {
                recommendedAlbum.count += 1;
            } else {
                recommendedAlbums.push({
                    album: action.payload.album,
                    count: 1,
                });
            }

            return {
                recommendedSongs: state.recommendedSongs,
                recommendedAlbums,
            };
        default:
            throw state;
    }
};

const initialState: IHistoricState = {
    recommendedSongs: [],
    recommendedAlbums: [],
};

export const useHistoricReducer = (): [IHistoricState, React.Dispatch<HistoricAction>] =>
    useReducer(historicReducer, initialState);
