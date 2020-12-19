import { Grid, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import { AlbumCard } from './album_card';
import { IAlbum } from './albums.interfaces';

// CSS 
import styles from '../../assets/styles/card.styles';

const useStyles = makeStyles(styles);

interface IAlbumList {
    albums: IAlbum[];
}

export const AlbumsList: FC<IAlbumList> = ({ albums }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.root}>
            {albums.map((album: IAlbum) => (
                <Grid container item xs key={'grid_' + album.id}>
                    <AlbumCard key={'album_' + album.id} album={album} />
                </Grid>
            ))}
        </Grid>
    );
};

export default AlbumsList;
