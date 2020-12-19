import React, { FC } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Helvetica',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#2a63ad',
        },
        secondary: {
            main: '#f02849',
        },
    },
});

export const GlobalThemeProvider: FC = ({
    children,
}: {
    children?: React.ReactNode;
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
