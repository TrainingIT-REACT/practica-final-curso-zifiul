import { createMuiTheme, Theme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { StyleRules } from '@material-ui/styles';
import background from '../images/background.png';

const styles = (theme: Theme): StyleRules => ({
    wallpaper: {
        position: 'fixed',
        top: 0,
        left: 10,
        height: '100%',
        width: '95%',
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            left: 100,
            width: '90%',
        },
    },
    mainTitle: {
        fontSize: 100,        
        fontWeight: 'bold',
        color: 'white', 
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: 250,
        },
    },
    subTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            fontSize: 40,
        },
    },
    width100: {
        width: '100%',
    },
    button: {
        margin: theme.spacing(1),
        fontSize: 15,
        color: 'white',        
        [theme.breakpoints.up('md')]: {
            fontSize: 25,
        },
    },
    center: {
        textAlign: 'center',
    }
});

const breakpoints = createBreakpoints({})

export const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#05C7C9',
                    [breakpoints.up('md')]: {
                        backgroundImage: `url(${background})`,
                    },
                    
                },
            },
        },
    },
});

export default styles;
