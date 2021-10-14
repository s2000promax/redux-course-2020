//Example video https://www.youtube.com/watch?v=YdYyYMFPa44

import { applyMiddleware, createStore } from 'redux'
import { asyncincrement, decrement, increment } from './redux/actions'
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
    42, 
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


store.subscribe( ()=> {
    const state = store.getState()

    counter.textContent = state 
} )

//First drawing!!!

store.dispatch({type: '__INIT_APP   '})

themeBtn.addEventListener('click', () => {
    //document.body.classList.toggle('dark')
    
})
