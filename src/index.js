//Example video https://www.youtube.com/watch?v=YdYyYMFPa44

import { applyMiddleware, createStore } from 'redux'
import { asyncincrement, decrement, increment } from './redux/actions'
import { rootReducer } from './redux/rootReducer'
import './styles.css'

//Added middleware
import  thunk from 'redux-thunk'


const counter = document.getElementById('counter')

const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createStore(
    rootReducer, 
    0, 
    applyMiddleware(thunk)
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
