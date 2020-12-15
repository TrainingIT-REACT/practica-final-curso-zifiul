import React, { useCallback, useContext } from 'react';
import {
    AppBar,
    makeStyles,
    MenuItem,
    Toolbar,
    Typography,
} from '@material-ui/core';
import styles from '../assets/styles/header.styles';
import { AppBarMobile } from './app-bar';
import clsx from 'clsx';
import logoBarra from '../assets/images/audio-cassette.png';
import { MoreVert } from '@material-ui/icons';
import { AuthContext } from '../reducers/auth.reducer';
import { IconMenu } from './icon-menu';

const useStyles = makeStyles(styles);

export default function HeaderApp(): React.ReactElement {
    const classes = useStyles();
    const [authState, authDispatcher] = useContext(AuthContext);
    
    const handleLogout = useCallback(() => {
        authDispatcher({ type: 'close-session' });
    }, [authDispatcher]);

    return (
        <>
            <AppBarMobile />
            <div className={clsx(classes.grow, classes.desktopContainer)}>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <div className={classes.logoContainer}>
                            <img src={logoBarra} alt="logo-vintage" />
                        </div>
                        <div className={classes.grow} />
                        <ul className={classes.withoutStyle}>
                            <li>
                                <h1 className={classes.headerText1}>
                                    MUSIC VINTAGE
                                </h1>
                            </li>
                            <li>
                                <Typography className={classes.headerText2}>
                                    {authState.fullName
                                        ? authState.fullName
                                        : ''}
                                </Typography>
                            </li>
                        </ul>
                        <IconMenu
                            id="menu-account"
                            label={authState.fullName ? authState.fullName : ''}
                            icon={<MoreVert className={classes.iconSize} />}>
                            <MenuItem onClick={handleLogout}>
                                Cerrar sesión
                            </MenuItem>
                        </IconMenu>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    );
}
