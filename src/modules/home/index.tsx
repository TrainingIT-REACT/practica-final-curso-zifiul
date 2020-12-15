import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { HistoricContext } from '../../reducers/historic.reducer';
import { AlbumsList } from '../albums/albumsList';
import { RecomendedSongsList } from './recommendedSongsList';
import { IAlbum } from '../albums/albums.interfaces';
import { ISong } from '../songs/songs.interfaces';

// CSS 
import styles from '../../assets/styles/home.styles';

const useStyles = makeStyles(styles);

// En la página de inicio se muestran los álbums y canciones recomendadas. El criterio empleado es el de número de veces que se ha 
// visitado la página del álbum y el número de veces que se ha reproducido una canción.
const HomeIndex = (): React.ReactElement => {
    const classes = useStyles();
    const [albums, setAlbums] = useState<IAlbum[]>([]);
    const [songs, setSongs] = useState<ISong[]>([]);
    const [historicState] = useContext(HistoricContext);

    useEffect(() => {
        const recommendedAlbums = historicState.recommendedAlbums;    
        const recommendedSongs = historicState.recommendedSongs;    

        if (recommendedAlbums.length > 0) {
            setAlbums(recommendedAlbums.sort((a, b) => b.count - a.count).map((re) => re.album));
        }

        if (recommendedAlbums.length > 0) {
            setSongs(recommendedSongs.sort((a, b) => b.count - a.count).map((re) => re.song));
        }
    }, [historicState]);

    return (      
        <>
            <div className={classes.container}>
                <Typography component="span" className={classes.title}>
                    Álbums recomendados
                </Typography>
            </div>
            <AlbumsList key='albumsList' albums={albums ? albums.slice(0, 4) : []} />
            <div className={classes.container}>
                <Typography component="span" className={classes.title}>
                    Canciones recomendadas
                </Typography>
            </div>
            <RecomendedSongsList key='songsList' songs={songs.slice(0, 5)} />
        </>
    );
};

export default HomeIndex;
