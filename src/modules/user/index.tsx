import React, { useCallback, useContext, useState } from 'react';
import {
    Button,
    Grid,
    makeStyles,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core';
import styles from '../../assets/styles/user.styles';
import { AuthContext } from '../../reducers/auth.reducer';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(styles);

const UserAccount = (): React.ReactElement => {
    const classes = useStyles();
    const snackbar = useSnackbar();
    const [authState, authDispatcher] = useContext(AuthContext);
    const [name, setName] = useState(authState.fullName ? authState.fullName : '');

    const handleChangeName = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
        []
    );

    const handleSubmit = useCallback(() => {
        authDispatcher({ type: 'change-name', payload: { fullName: name } });
        snackbar.enqueueSnackbar('Nombre de usuario cambiado correctamente', {
            variant: 'success',
        });
    }, [authDispatcher, snackbar, name]);

    return (
        <Paper className={classes.paper}>
            <Typography component="span" className={classes.title}>
                Perfil de Usuario
            </Typography>
            <Grid container spacing={2} className={classes.root}>
                <Grid container item xs={12} sm={4} md={4} lg={4} xl={2} key='fullName'>
                    <TextField
                        id="name"
                        key="name"
                        label="Nombre"
                        className={classes.text}
                        defaultValue={name}
                        variant="outlined"
                        onChange={handleChangeName}
                    />
                </Grid>
                <Grid container item xs={12} sm={4} md={4} lg={4} xl={2} key='submit'>
                    <Button id="updateButton" key="updateButton" color="primary" disableElevation onClick={handleSubmit}>
                        Actualizar
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default UserAccount;
