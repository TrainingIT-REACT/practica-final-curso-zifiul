import {
    Card,
    CardContent,
    Typography,
    makeStyles,
    IconButton,
} from '@material-ui/core';
import React, { FC } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { ISong } from '../songs/songs.interfaces';

// CSS 
import styles from '../../assets/styles/card.styles';

const useStyles = makeStyles(styles);

interface ISongCardProps {
    song: ISong;
    onPlaySong: (song: ISong) => void;
}

export const RecommendedSongCard: FC<ISongCardProps> = ({ song, onPlaySong }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                        {song.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {song.duration}
                    </Typography>                    
                </CardContent>
                <div className={classes.controls}>
                    <IconButton 
                        aria-label="play/pause" 
                        onClick={(e) => onPlaySong(song)}>
                        <PlayArrowIcon className={classes.playIcon} />
                    </IconButton>          
                </div>                
            </div>            
        </Card>
    );
};

export default RecommendedSongCard;
