import { createContext, Reducer, useReducer } from 'react';

export interface IPageState {
    menuOpen: boolean;
}

export type PageAction = { type: 'OPEN_MENU' | 'CLOSE_MENU' };

export const PageContext = createContext<
    [IPageState, React.Dispatch<PageAction>]
>([{} as any, (): undefined => undefined]);

const pageReducer: Reducer<IPageState, PageAction> = (state, action) => {
    switch (action.type) {
        case 'OPEN_MENU':
            return { ...state, menuOpen: true };
        case 'CLOSE_MENU':
            return { ...state, menuOpen: false };
        default:
            throw state;
    }
};

const initialState: IPageState = {
    menuOpen: false,
};

export const usePageReducer = (): [IPageState, React.Dispatch<PageAction>] =>
    useReducer(pageReducer, initialState);
