import { createMuiTheme, Theme } from '@material-ui/core';
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
    paper: {
        padding: theme.spacing(4),
        boxShadow: '10px 10px 100px 20px rgba(0,0,0,.2)',
        width: 440,
        backgroundColor: '#053575',
        zIndex: 100,
        borderRadius: 60,
    },
    imageContainer: {
        margin: theme.spacing(2, 0),
        flex: 1,
        alignItems: 'center',
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 25,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: '#ffb22a',
        color: 'black',
        borderRadius: 10,
    },
    formAction: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
    },
    grow: {
        flexGrow: 1,
    },
    forgot: {
        textAlign: 'center',
        marginBottom: 35,
    },
    white: {
        color: 'white',
    },
});

export const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    height: '100%',
                    width: '100%',
                    backgroundImage: `url(${background})`,
                },
            },
        },
        MuiTextField: {
            root: {
                '& input.MuiInput-input': {
                    color: 'white',
                },
                '& label.Mui-focused': {
                    color: 'white',
                },
                '& .MuiInput-underline:before': {
                    borderBottomColor: '#70CAF9',
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: '#70CAF9',
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: 'white',
                    },
                    '&:hover fieldset': {
                        borderColor: 'white',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'white',
                    },
                },
            },
        },
        MuiFormLabel: {
            root: {
                color: 'white',
            },
        },
        MuiInput: {
            root: {
                color: 'white',
            },
        },
    },
});

export default styles;
