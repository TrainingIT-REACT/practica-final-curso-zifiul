import React from 'react';

export interface IAuthState {
    fullName?: string | null;
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
            localStorage.setItem('isAuthenticated', 'true');
            return {
                ...state,                
                fullName: 'Perico de los Palotes',
            };
        }
        case 'change-name': {            
            return {
                ...state,
                fullName: action.payload.fullName,
            };
        }
        case 'close-session':
            localStorage.removeItem('isAuthenticated');
            return {
                ...state,
                fullName: null,
            };
    }
};

const initialState: IAuthState = {    
    fullName: null,
};

export const useAuthReducer = (): [IAuthState, React.Dispatch<AuthAction>] =>
    React.useReducer(authReducer, initialState);
