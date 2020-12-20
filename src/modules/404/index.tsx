import React, { useCallback } from 'react';
import { Button, CssBaseline, makeStyles, ThemeProvider, Typography } from '@material-ui/core';
import { Helmet } from 'react-helmet';

// CSS 
import styles, { theme } from '../../assets/styles/404.styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(styles);

const Notfound = (): React.ReactElement => {
    const classes = useStyles();
    const history = useHistory();
    
    const goHome = () => {
        history.push('/home');
    };

    return (      
        <>
            <Helmet>
                <title>404 Not Found</title>
            </Helmet>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className={classes.wallpaper}>
                    <div className={classes.width100}>
                        <Typography className={classes.mainTitle}>404</Typography>
                        <Typography className={classes.subTitle}>Uh Oh! La página que buscas no existe</Typography>
                        <Typography className={classes.center}>
                            <Button size="large" className={classes.button} onClick={goHome}>
                                Inicio
                            </Button>
                        </Typography>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
};

export default Notfound;
