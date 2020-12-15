import { Grid, makeStyles } from '@material-ui/core';
import React, { FC, useCallback, useContext, useState } from 'react';
import { RecommendedSongCard } from './recommendedSongCard';
import { ISong } from '../songs/songs.interfaces';
import { Player } from '../../components/player';
import { HistoricContext } from '../../reducers/historic.reducer';
import clsx from 'clsx';

// CSS 
import styles from '../../assets/styles/card.styles';

const useStyles = makeStyles(styles);

interface ISongList {
    songs: ISong[];
}

export const RecomendedSongsList: FC<ISongList> = ({ songs }) => {
    const classes = useStyles();
    const [srcPlayer, setSrcPlayer] = useState('');
    const [playerHidden, setPlayerHidden] = useState(true);
    const [, historicDispatcher] = useContext(HistoricContext);

    const handlePlaySong = useCallback((song: ISong) => {                
        setPlayerHidden(false);        
        setTimeout(() => window.scrollTo(0,document.body.scrollHeight), 1000);
        setSrcPlayer(song.audio);
        historicDispatcher({ type: 'REGISTER_SONG', payload: { song } });
    }, [historicDispatcher]);

    return (
        <Grid container>
            <Grid container item spacing={2} className={classes.root}>
                {songs.map((song: ISong) => (
                    <Grid container item xs key={'grid_' + song.id}>
                        <RecommendedSongCard 
                            key={'song_' + song.id} 
                            song={song} 
                            onPlaySong={handlePlaySong}
                        />
                    </Grid>
                ))}
            </Grid>
            <Grid container item className={playerHidden ? clsx(classes.root, classes.hidden) : classes.root}>
                <Player src={srcPlayer} />
            </Grid>
        </Grid>
    );
};

export default RecomendedSongsList;
