import { combineReducers } from 'redux';
import { customizationReducer } from './customizationReducer';

export const rootReducer = combineReducers({
    customization: customizationReducer
})