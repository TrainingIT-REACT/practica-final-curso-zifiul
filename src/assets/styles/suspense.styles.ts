import { StyleRules } from '@material-ui/core';

const styles = (): StyleRules => ({
    root: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        zIndex: 100,
    },
    circle: {
        boxSizing: 'border-box',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 400,
        height: 400,
        marginTop: -239,
        marginLeft: -200,
        borderRadius: '50%',
        border: '2px solid #4485b3',
        borderTopColor: '#004c82',
        animation: '$spinner .6s linear infinite',
    },
    icon: {
        fontSize: 190,
        marginTop: -80,
        marginLeft: 25, 
        color: '#4485b3',
        display: 'block',
    },
    text: {
        textAlign: 'center',
        fontSize: 28,
        color: '#003d69',
    },
    slogan: {
        textAlign: 'center',
        fontWeight: 600,
        color: '#2b5877',
    },
    '@keyframes spinner': {
        to: {
            transform: 'rotate(360deg)',
        },
    },
});

export default styles;
