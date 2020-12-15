import React, { FC, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../reducers/auth.reducer';

const Protected: FC = ({ children }: { children?: React.ReactNode }) => {
    const history = useHistory();
    const [authState] = useContext(AuthContext);

    useEffect(() => {
        if (!authState.authenticated) {
            history.push('/auth/sign-in');
        }
    }, [history, authState]);

    return <>{children}</>;
};

export default Protected;
