import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    makeStyles,
} from '@material-ui/core';
import React, { FC, useCallback, useContext } from 'react';
import { IAlbum } from './albums.interfaces';
import { useHistory } from 'react-router-dom';
import { HistoricContext } from '../../reducers/historic.reducer';
import * as Constants from '../../constants';

// CSS 
import styles from '../../assets/styles/card.styles';

const useStyles = makeStyles(styles);

interface IAlbumCard {
    album: IAlbum;
}

export const AlbumCard: FC<IAlbumCard> = ({ album }) => {
    const classes = useStyles();
    const history = useHistory();
    const [, historicDispatcher] = useContext(HistoricContext);
    
    const handleCardClick = useCallback(() => {
        historicDispatcher({ type: 'REGISTER_ALBUM', payload: { album } });
            history.push(`/songs/${album.id}`);
        },
        [history, album, historicDispatcher]
    );

    return (
        <Card className={classes.rootCard} onClick={handleCardClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={album.name}
                    height="225"                    
                    image={`${Constants.API_URL}${album.cover}`}
                    title={album.name}
                />
                <CardContent>
                    <Typography id="albumName" gutterBottom variant="h5" component="h2">
                        {album.name}
                    </Typography>
                    <Typography
                        id="artistName"
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        {album.artist}
                    </Typography>
                </CardContent>
            </CardActionArea>            
        </Card>
    );
};

export default AlbumCard;
