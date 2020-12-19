import React, { FC, useCallback, useContext } from 'react';
import {
    AppBar,
    IconButton,
    makeStyles,
    MenuItem,
    Toolbar,
    Typography,
} from '@material-ui/core';
import Menu from '@material-ui/icons/Menu';
import { MoreVert } from '@material-ui/icons';
import styles from '../assets/styles/header.styles';
import { PageContext } from '../reducers/page.reducer';
import { IconMenu } from './icon_menu';
import { AuthContext } from '../reducers/auth.reducer';

const useStyles = makeStyles(styles);

export const AppBarMobile: FC = () => {
    const classes = useStyles();
    const [, pageDispatcher] = useContext(PageContext);
    const [authState, authDispatcher] = useContext(AuthContext);

    const handleChangeOpenNav = () => {
        pageDispatcher({ type: 'OPEN_MENU' });
    };    

    const handleLogout = useCallback(() => {
        authDispatcher({ type: 'close-session' });
    }, [authDispatcher]);

    return (
        <AppBar position="fixed" color="default" className={classes.root}>
            <Toolbar>
                <IconButton color="inherit" onClick={handleChangeOpenNav}>
                    <Menu className={classes.icon} />
                </IconButton>
                <div className={classes.grow}>
                    <div>
                        <Typography className={classes.headerText1}>
                            MUSIC VINTAGE
                        </Typography>
                    </div>
                    <div>
                        <Typography className={classes.headerText2}>
                            {authState.fullName ? authState.fullName : ''}
                        </Typography>
                    </div>
                </div>
                <IconMenu
                    id="menu-account"
                    label={authState.fullName ? authState.fullName : ''}
                    icon={<MoreVert className={classes.iconSize} />}>                    
                    <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
                </IconMenu>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarMobile;
