import { StyleRules, Theme } from '@material-ui/core';

const styles = (theme: Theme): StyleRules => ({
    root: {
        display: 'flex',
        margin: 25,
        [theme.breakpoints.down("md")] : {
            margin: 5,
        },
    },
    rootCard: {
        maxWidth: 265,
        [theme.breakpoints.down("md")] : {
            maxWidth: 200
        },
        minWidth: 250,
        margin: 25,
    },    
    details: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 125,
        maxWidth: 150,
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        alignItems: 'center',
        textAlign: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    hidden: {
        display: 'none',
    }
});

export default styles;
