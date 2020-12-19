import React, { FC, useState, useContext, useCallback, useMemo } from 'react';
import {
    makeStyles,
    TextField,
    Button,
    CssBaseline,
    Typography,
    ThemeProvider,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import styles, { theme } from '../../../assets/styles/login.styles';
import { AuthContext } from '../../../reducers/auth.reducer';
import graficologin from '../../../assets/images/graficologin.png';
import clsx from 'clsx';

const useStyles = makeStyles(styles);
const usernameValue = 'perico';
const passwordValue = '123456';

const SignIn: FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const snackbar = useSnackbar();

    const [, authReducer] = useContext(AuthContext);

    const [username, setUsername] = useState('perico');
    const [password, setPassword] = useState('123456');

    const handleSignIn = useCallback(
        async (event: React.FormEvent) => {
            event.preventDefault();

            if (
                username &&
                username !== '' &&
                password &&
                password !== '' &&
                username === usernameValue &&
                password === passwordValue
            ) {
                authReducer({
                    type: 'sign-in',
                });

                history.push('/');
            } else {
                snackbar.enqueueSnackbar('Usuario o password incorrecto', {
                    variant: 'warning',
                });
            }
        },
        [username, password, authReducer, history, snackbar]
    );

    const handleChangeUsername = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setUsername(event.target.value);
        },
        []
    );

    const handleChangePassword = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setPassword(event.target.value);
        },
        []
    );

    const usernameField = useMemo(
        () => (
            <div className={classes.inputContainer}>
                <TextField
                    required={true}
                    fullWidth={true}
                    id="username"
                    label="Usuario"
                    name="username"
                    type="username"
                    autoComplete="username"
                    value={username}
                    autoFocus={true}
                    onChange={handleChangeUsername}
                />
            </div>
        ),
        [classes.inputContainer, handleChangeUsername, username]
    );

    const passwordField = useMemo(
        () => (
            <div className={classes.inputContainer}>
                <TextField
                    required={true}
                    fullWidth={true}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={handleChangePassword}
                />
            </div>
        ),
        [classes.inputContainer, handleChangePassword, password]
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.wallpaper}>
                <div className={classes.paper}>
                    <div className={classes.imageContainer}>
                        <img                            
                            src={graficologin}
                            alt="Music Vintage"
                            aria-hidden={false}
                        />
                    </div>
                    <form
                        className={classes.form}
                        noValidate={true}
                        onSubmit={handleSignIn}>
                        {usernameField}
                        {passwordField}
                        <div className={classes.formAction}>
                            <Button
                                id="singIn"
                                type="submit"
                                variant="contained"
                                fullWidth={true}
                                className={classes.submit}>
                                Iniciar sesión
                            </Button>
                        </div>
                        <div className={clsx(classes.white, classes.forgot)}>
                            <Typography id="powered">powered by Music Vintage</Typography>
                        </div>
                    </form>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default SignIn;
