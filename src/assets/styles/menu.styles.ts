import { Theme, StyleRules } from '@material-ui/core';

const styles = (theme: Theme): StyleRules => ({
    drawer: {
        zIndex: 900,
        [theme.breakpoints.up('md')]: {
            flexShrink: 0,
            width: 300,
        },
    },
    drawerPaper: {
        top: 96,
        width: 250,
        backgroundColor: '#D1D1D1',
    },
    list: {
        width: 250,
        flexGrow: 1,
    },
    iconContainer: {
        width: 250,
        textAlign: 'center',
        marginBottom: theme.spacing(1),
    },
    icon: {
        fontSize: 190,
        color: '#d4d4d4',
    },
    menuItem: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    menuItemSelected: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2a63ad',
    },
    logoContainer: {
        padding: 10,
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    },
    [theme.breakpoints.up('md')]: {
        subMenu: {
            '& a, button': {
                paddingLeft: 40,
            },
        },
    },
});

export default styles;
