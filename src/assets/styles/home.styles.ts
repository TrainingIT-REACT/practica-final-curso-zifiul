import { Theme, StyleRules } from "@material-ui/core";

const styles = (theme: Theme): StyleRules => ({
    root: {
        display: 'flex',
    },
    container: {
        margin: '25px 0 0 25px',
    },
    title: {
        fontSize: 'xx-large',
        fontWeight: 'bolder',
        [theme.breakpoints.down("md")] : {
            fontSize: 'large',
        },
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
});

export default styles;