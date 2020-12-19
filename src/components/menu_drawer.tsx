import React, { useCallback, useContext, useMemo, useState } from 'react';
import {
    Hidden,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    SwipeableDrawer,
} from '@material-ui/core';
import { Link, LinkProps } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import HomeIcon from '@material-ui/icons/Home';
import AlbumIcon from '@material-ui/icons/Album';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { PageContext } from '../reducers/page.reducer';
import styles from '../assets/styles/menu.styles';
import logoBarra from '../assets/images/audio-cassette.png';

const useStyles = makeStyles(styles);

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
    function linkElement(props, ref) {
        return <Link innerRef={ref as any} {...props} />;
    }
);

const MenuDrawer = (): React.ReactElement => {
    const classes = useStyles();
    const [pageState, pageDispatcher] = useContext(PageContext);
    const [menuItemSelected, setMenuItemSelected] = useState('inicio');

    const handleMenuItemselected = useCallback(
        (selected: string) => setMenuItemSelected(selected),
        []
    );

    const handleClose = useCallback(
        () => pageDispatcher({ type: 'CLOSE_MENU' }),
        [pageDispatcher]
    );
    const handleOpen = useCallback(
        () => pageDispatcher({ type: 'OPEN_MENU' }),
        [pageDispatcher]
    );

    const menuList = useMemo(
        () => (
            <div className={classes.list} role="presentation">
                <List>
                    <ListItem
                        button={true}
                        component={AdapterLink}
                        onClick={() => handleMenuItemselected('home')}
                        to="/home">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <span
                                    className={
                                        menuItemSelected === 'home'
                                            ? classes.menuItemSelected
                                            : classes.menuItem
                                    }>
                                    Inicio
                                </span>
                            }
                        />
                    </ListItem>
                    <ListItem
                        button={true}
                        component={AdapterLink}
                        onClick={() => handleMenuItemselected('albums')}
                        to="/albums">
                        <ListItemIcon>
                            <AlbumIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <span
                                    className={
                                        menuItemSelected === 'albums'
                                            ? classes.menuItemSelected
                                            : classes.menuItem
                                    }>
                                    Álbums
                                </span>
                            }
                        />
                    </ListItem>
                    <ListItem
                        button={true}
                        component={AdapterLink}
                        onClick={() => handleMenuItemselected('user')}
                        to="/user">
                        <ListItemIcon>
                            <AccountCircleRoundedIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={
                                <span
                                    className={
                                        menuItemSelected === 'user'
                                            ? classes.menuItemSelected
                                            : classes.menuItem
                                    }>
                                    Perfil Usuario
                                </span>
                            }
                        />
                    </ListItem>
                </List>
            </div>
        ),
        [
            classes.list,
            classes.menuItemSelected,
            classes.menuItem,
            menuItemSelected,
            handleMenuItemselected,
        ]
    );

    return (
        <nav className={classes.drawer}>
            <Hidden mdUp implementation="css">
                <SwipeableDrawer
                    open={pageState.menuOpen}
                    onClose={handleClose}
                    onOpen={handleOpen}>
                    <div className={classes.logoContainer}>
                        <img src={logoBarra} alt="logo-ssmi" />
                    </div>
                    {menuList}
                </SwipeableDrawer>
            </Hidden>
            <Hidden smDown implementation="css">
                <Drawer
                    anchor="left"
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    open={true}>
                    {menuList}
                </Drawer>
            </Hidden>
        </nav>
    );
};

export default MenuDrawer;
