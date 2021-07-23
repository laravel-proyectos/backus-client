import { types } from '../types/types';

export const menuOpen = (event) => {
    localStorage.setItem('menu', event);;
    return ({
        type: types.menuOpen,
        payload: event
    })
}

export const themeChange = (event) => {
    localStorage.setItem('theme', event);
    return ({
        type: types.themeChange,
        payload: event
    });
};

export const themeLocale = (event) => {
    localStorage.setItem('language', event);
    return ({
        type: types.themeLocale,
        payload: event
    })
}
export const themeRtl = () => ({ type: types.themeRtl });