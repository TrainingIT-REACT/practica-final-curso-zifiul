import { StyleRules, Theme } from '@material-ui/core';

const styles = (theme: Theme): StyleRules => ({
    paper: {
        margin: theme.spacing(2),
        padding: 15,
    },
    root: {
        display: 'flex',
        margin: theme.spacing(2),
        [theme.breakpoints.down("md")] : {
            margin: 5,
        },
    },    
    title: {
        fontSize: 'xxx-large',
        fontWeight: 'bolder',
        [theme.breakpoints.down("md")] : {
            fontSize: 'large',
        },
    },
    text: {
        width: 250,
    }
});

export default styles;
