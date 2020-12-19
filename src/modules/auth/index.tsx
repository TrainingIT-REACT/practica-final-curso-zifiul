import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import SignIn from './views/sign_in';

const AuthIndex: FC = () => {
    const match = useRouteMatch();

    return (
        <Box>
            <Switch>
                <Route path={`${match.path}/sign-in`} component={SignIn} />
            </Switch>
        </Box>
    );
};

export default AuthIndex;
