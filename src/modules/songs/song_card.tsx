import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    makeStyles,
    IconButton,
} from '@material-ui/core';
import React, { FC } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { IAlbum } from '../albums/albums.interfaces';
import { ISong } from './songs.interfaces';
import * as Constants from '../../constants';

// CSS 
import styles from '../../assets/styles/card.styles';

const useStyles = makeStyles(styles);

interface ISongCardProps {
    album: IAlbum;
    song: ISong;
    onPlaySong?: ((song: ISong) => void) | null;
}

export const SongCard: FC<ISongCardProps> = ({ album, song, onPlaySong }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography id="songName" component="h6" variant="h6">
                        {song.name}
                    </Typography>
                    <Typography id="duration" variant="subtitle1" color="textSecondary">
                        {song.duration}
                    </Typography>                    
                </CardContent>
                <div className={classes.controls}>
                    <IconButton 
                        aria-label="play/pause" 
                        onClick={() => onPlaySong ? onPlaySong(song) : null}>
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>          
                </div>                
            </div>      
            <CardMedia
                className={classes.cover}
                image={`${Constants.API_URL}${album.cover}`}
                title={album.name}
            />
        </Card>
    );
};

export default SongCard;
