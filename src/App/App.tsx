import React, { FC, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { SnackbarProvider } from 'notistack';
import { GlobalThemeProvider } from '../components/global_theme_provider';
import FullScreenLoader from '../components/suspense_loader';
import { PageContext, usePageReducer } from '../reducers/page.reducer';
import HeaderApp from '../components/header_app';
import MenuDrawer from '../components/menu_drawer';
import HomeIndex from '../modules/home';
import AlbumsIndex from '../modules/albums';
import { useAuthReducer, AuthContext } from '../reducers/auth.reducer';
import Protected from '../components/protected';
import AuthIndex from '../modules/auth';
import UserAccount from '../modules/user';
import NotFound from '../modules/404';
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
            <BrowserRouter>
                <AuthContext.Provider value={userReducer}>
                    <Helmet>
                        <title>Music Vintage</title>
                    </Helmet>
                    <Suspense fallback={<FullScreenLoader />}>
                        <SnackbarProvider maxSnack={3}>
                            <CssBaseline />
                            <Switch>
                                <Route path="/auth" component={AuthIndex} />                                
                                <Route path="/404" component={NotFound} />
                                <Protected>
                                    <PageContext.Provider value={menuReducer}>
                                        <Provider store={store}>
                                            <HistoricContext.Provider value={historicReducer}>
                                                <HeaderApp />
                                                <MenuDrawer />
                                                <div className={classes.content}>
                                                    <Route exact path="/">
                                                        <Redirect to="/home" />
                                                    </Route>
                                                    <Route
                                                        path="/home"
                                                        component={HomeIndex}
                                                    />
                                                    <Route
                                                        exact={true} 
                                                        path="/albums"
                                                        component={AlbumsIndex}
                                                    />
                                                    <Route
                                                        exact={true} 
                                                        path="/songs/:albumId"
                                                        component={Songs}
                                                    />
                                                    <Route
                                                        exact={true} 
                                                        path="/user"
                                                        component={UserAccount}
                                                    />
                                                </div>
                                            </HistoricContext.Provider>
                                        </Provider>
                                    </PageContext.Provider>
                                </Protected>                                
                            </Switch>                            
                        </SnackbarProvider>
                    </Suspense>
                </AuthContext.Provider>
            </BrowserRouter>
        </GlobalThemeProvider>
    );
};

export default App;
