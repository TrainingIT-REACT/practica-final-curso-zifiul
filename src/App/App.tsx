import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { SnackbarProvider } from 'notistack';
import { GlobalThemeProvider } from '../components/global-theme-provider';
import FullScreenLoader from '../components/suspense-loader';
import { PageContext, usePageReducer } from '../reducers/page.reducer';
import HeaderApp from '../components/header-app';
import MenuDrawer from '../components/menu-drawer';
import HomeIndex from '../modules/home';
import AlbumsIndex from '../modules/albums';
import { useAuthReducer, AuthContext } from '../reducers/auth.reducer';
import Protected from '../components/protected';
import AuthIndex from '../modules/auth';
import UserAccount from '../modules/user';
import { useHistoricReducer, HistoricContext } from '../reducers/historic.reducer';

// Stores
import store from '../store';

// Css
import styles from '../assets/styles/app.styles';

const useStyles = makeStyles(styles);

const Songs = React.lazy(() => import('../modules/songs'));

const App: FC = () => {
    const classes = useStyles();
    const userReducer = useAuthReducer();
    const menuReducer = usePageReducer();
    const historicReducer = useHistoricReducer();

    return (
        <GlobalThemeProvider>
            <AuthContext.Provider value={userReducer}>
                <Helmet>
                    <title>Music Vintage</title>
                </Helmet>
                <Suspense fallback={<FullScreenLoader />}>
                    <SnackbarProvider maxSnack={3}>
                        <CssBaseline />
                        <BrowserRouter>
                            <Switch>
                                <Route path="/auth" component={AuthIndex} />
                                <Protected>
                                    <PageContext.Provider value={menuReducer}>
                                        <Provider store={store}>
                                            <HistoricContext.Provider value={historicReducer}>
                                                <HeaderApp />
                                                <MenuDrawer />
                                                <div className={classes.content}>
                                                    <Route path="/" exact={true}>
                                                        <Redirect to="/home" />
                                                    </Route>
                                                    <Route
                                                        path="/home"
                                                        component={HomeIndex}
                                                    />
                                                    <Route
                                                        path="/albums"
                                                        component={AlbumsIndex}
                                                    />
                                                    <Route
                                                        path="/songs/:albumId"
                                                        component={Songs}
                                                        rend
                                                    />
                                                    <Route
                                                        path="/user"
                                                        component={UserAccount}
                                                        rend
                                                    />
                                                </div>
                                            </HistoricContext.Provider>
                                        </Provider>
                                    </PageContext.Provider>
                                </Protected>
                            </Switch>
                        </BrowserRouter>
                    </SnackbarProvider>
                </Suspense>
            </AuthContext.Provider>
        </GlobalThemeProvider>
    );
};

export default App;
