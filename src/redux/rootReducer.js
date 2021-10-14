import { combineReducers } from "redux"
import { CHANGE_THEME, DECREMENT, DISABLE_BUTTONS, ENABLE_BUTTONS, INCREMENT } from "./types"

function counterReducer(state = 0, acion) {

    if (acion.type === INCREMENT) {
        return state + 1
    } else
    if (acion.type === DECREMENT) {
        return state - 1
    } 

 return state   
}

const initialThemeState = {
    value: 'light',
    disabled: false
}

function themeReducer(state = initialThemeState, action) {
    switch (action.type){
case CHANGE_THEME: return {...state, value: action.payload}

case ENABLE_BUTTONS: return {...state, disabled: false}
case DISABLE_BUTTONS: return {...state, disabled: true}

        default: return state 

    }
    
}

export const rootReducer = combineReducers( {
    counter: counterReducer,
    theme: themeReducer
} )