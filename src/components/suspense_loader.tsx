import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import AlbumOutlined from '@material-ui/icons/AlbumOutlined';

// Css
import styles from '../assets/styles/suspense.styles';

const useStyles = makeStyles(styles);

const FullScreenLoader = (): React.ReactElement => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <AlbumOutlined className={classes.icon} />
                <Typography className={classes.text}>Music Vintage</Typography>
                <Typography className={classes.slogan}>
                    Tus mejores canciones del ayer
                </Typography>
            </div>
            <div className={classes.circle} />
        </div>
    );
};

export default FullScreenLoader;
