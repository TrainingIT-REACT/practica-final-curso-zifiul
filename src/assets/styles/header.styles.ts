import { Theme, StyleRules } from '@material-ui/core';

const styles = (theme: Theme): StyleRules => ({
    root: {
        background:
            'linear-gradient(to right, rgba(22,63,117,1) 0%, rgba(45,178,190,1) 85%)',
        color: '#fff',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#053575',
        borderWidth: 3,
        borderColor: '#70CAF9',
        borderBottomStyle: 'solid',
    },
    grow: {
        flexGrow: 1,
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        textTransform: 'none',
        fontWeight: 300,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    flagIcon: {
        marginRight: theme.spacing(0.5),
    },
    logoContainer: {
        padding: 10,
        marginLeft: 25,
    },
    desktopContainer: {
        display: 'none',
        position: 'fixed',
    },
    iconContainer: {
        marginLeft: 25,
    },
    iconSize: {
        fontSize: 25,
        [theme.breakpoints.up('md')]: {
            fontSize: 50,
        },
    },
    withoutStyle: {
        listStyle: 'none',
    },
    headerText1: {
        fontSize: 20,
        margin: 0,
        [theme.breakpoints.up('md')]: {
            color: '#8EA5B1',
        },
    },
    headerText2: {
        color: 'white',
        fontSize: 18,
    },
    showInMobile: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    icon: {
        color: '#fff',
    },
    [theme.breakpoints.up('md')]: {
        desktopContainer: {
            zIndex: 900,
            display: 'block',
            width: '100%',
            left: 0,
            top: 0,
        },
    },
});

export default styles;
