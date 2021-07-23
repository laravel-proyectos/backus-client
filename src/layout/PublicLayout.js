import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';

import theme from '../themes/theme';

export const PublicLayout = ({children}) => {
    const customization = useSelector(state => state.customization);
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme(customization)}> 
                {children}
            </ThemeProvider>
        </>
    )
}
