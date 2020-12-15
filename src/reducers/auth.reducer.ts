import React from 'react';

export interface IAuthState {
    fullName?: string | null;
    authenticated: boolean;
}

export interface IUser {
    fullName: string;
}

export type AuthAction = { type: 'sign-in' } | 
    { type: 'change-name'; payload: { fullName: string } } | 
    { type: 'close-session' };

export const AuthContext = React.createContext<
    [IAuthState, React.Dispatch<AuthAction>]
>([{} as any, (): undefined => undefined]);

const authReducer = (state: IAuthState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case 'sign-in': {
            return {
                ...state,
                authenticated: true,
                fullName: 'Perico de los Palotes',
            };
        }
        case 'change-name': {
            return {
                ...state,
                authenticated: true,
                fullName: action.payload.fullName,
            };
        }
        case 'close-session':
            return {
                ...state,
                authenticated: false,
                fullName: null,
            };
    }
};

const initialState: IAuthState = {
    authenticated: false,
    fullName: null,
};

export const useAuthReducer = (): [IAuthState, React.Dispatch<AuthAction>] =>
    React.useReducer(authReducer, initialState);
