import { Grid, makeStyles } from '@material-ui/core';
import React, { FC, useCallback, useContext, useState } from 'react';
import { SongCard } from './song_card';
import { ISong } from './songs.interfaces';
import { IAlbum } from '../albums/albums.interfaces';
import { Player } from '../../components/player';
import { HistoricContext } from '../../reducers/historic.reducer';
import clsx from 'clsx';
import * as Constants from '../../constants';

// CSS 
import styles from '../../assets/styles/card.styles';

const useStyles = makeStyles(styles);

interface ISongList {
    album: IAlbum;
}

export const SongsList: FC<ISongList> = ({ album }) => {
    const classes = useStyles();
    const [srcPlayer, setSrcPlayer] = useState('');
    const [playerHidden, setPlayerHidden] = useState(true);
    const [, historicDispatcher] = useContext(HistoricContext);

    const handlePlaySong = useCallback((song: ISong) => {                
        setPlayerHidden(false);        
        setTimeout(() => window.scrollTo(0,document.body.scrollHeight), 1000);
        setSrcPlayer(`${Constants.API_URL}${song.audio}`);
        historicDispatcher({ type: 'REGISTER_SONG', payload: { song } });
    }, [historicDispatcher]);

    return (
        <Grid container>
            <Grid container item spacing={2} className={classes.root}>
                {album.songs ? album.songs.map((song: ISong) => (
                    <Grid container item xs key={'grid_' + song.id}>
                        <SongCard 
                            key={'song_' + song.id} 
                            album={album} song={song} 
                            onPlaySong={handlePlaySong}
                        />
                    </Grid>
                )) : null}
            </Grid>
            <Grid container item className={playerHidden ? clsx(classes.root, classes.hidden) : classes.root}>
                <Player src={srcPlayer} />
            </Grid>
        </Grid>
    );
};

export default SongsList;
