import { config } from '../config';
import { types } from '../types/types';


const initialState = {
    isOpen: localStorage.getItem('menu') || config.isOpen,
    locale: localStorage.getItem('language') || config.i18n,
    rtlLayout: config.rtlLayout,
    navType:  localStorage.getItem('theme') || config.themeColor
}

export const customizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.menuOpen:
            return {
                ...state,
                isOpen: action.payload
            }  
        case types.themeLocale:
            return {
                ...state,
                locale: action.payload
            }  
        case types.themeRtl:
            return {
                ...state,
                rtlLayout: action.rtlLayout
            }  
        case types.themeChange:
            return {
                ...state,
                navType: action.payload
            }  
        default:
            return state;
    }
}