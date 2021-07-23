import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import { create } from 'jss';
import rtl from 'jss-rtl';

import theme from '../themes/theme';
import { CssBaseline, jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core';
import { NavigationScroll } from './NavigationScroll';
import { AnimatePresence } from 'framer-motion';


const loadLocaleData = (locale) => {
    switch (locale) {
        case 'en':
            return import('../compiled-lang/en.json');
        default:
            return import('../compiled-lang/es.json');
    }
}

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export const AdminLayout = ({children}) => {
    const customization = useSelector(state => state.customization);
    const [messages, setMessages] = useState();

    useEffect(() => {
        loadLocaleData(customization.locale).then((d) => {
            setMessages(d.default);
        });
    }, [customization]);
    return (
        <>
        {messages && (
            <IntlProvider
                locale={customization.locale}
                defaultLocale="en"
                messages={messages}
            >
                <CssBaseline />
                <NavigationScroll>
                    <StylesProvider jss={jss}>
                        <ThemeProvider theme={theme(customization)}>
                            <AnimatePresence>
                                {children}
                            </AnimatePresence>
                        </ThemeProvider>
                    </StylesProvider>
                </NavigationScroll>
            </IntlProvider>
        )}
    </>
    )
}
