//Example video https://www.youtube.com/watch?v=YdYyYMFPa44

import { applyMiddleware, createStore } from 'redux'
import { asyncincrement, changeTheme, decrement, increment } from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

//Added middleware
import  thunk from 'redux-thunk'
import logger from 'redux-logger'


const counter = document.getElementById('counter')

const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

//Example moddleware
/*
function logger(state) {
    return function(next) {
        return function(action) {
            console.log('Prev.State:', state.getState())
            console.log('Action:', action)
            const newState = next(action)
            console.log('New.State:', newState)
            return newState
        }
    }
}
*/

//Example Reduxlogger

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
    )

addBtn.addEventListener('click', () => {
   store.dispatch(increment()) 
})

subBtn.addEventListener('click', () => {
    store.dispatch(decrement()) 
})

asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncincrement()) 
    
})



themeBtn.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light') ? 'dark': 'light'
    store.dispatch(changeTheme(newTheme))
    
    
})



store.subscribe( ()=> {
    const state = store.getState()

    counter.textContent = state.counter

    document.body.className = state.theme.value;

    //Enable/Disable buttons

    [addBtn, subBtn, themeBtn, asyncBtn].forEach( btn => btn.disabled = state.theme.disabled)
} )

store.dispatch({type: '__INIT_APP   '})
