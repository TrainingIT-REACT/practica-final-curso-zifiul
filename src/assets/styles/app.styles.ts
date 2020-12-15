import { StyleRules, Theme } from '@material-ui/core';

const styles = (theme: Theme): StyleRules => ({
    content: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 96,
        [theme.breakpoints.up('md')]: {
            paddingLeft: 250,
            paddingRight: 0,
        },
    },
});

export default styles;
