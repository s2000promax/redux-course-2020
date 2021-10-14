import { DECREMENT, INCREMENT } from "./types";

export function increment() {
    return{
        type: INCREMENT
    }
}

export function decrement() {
    return{
        type: DECREMENT
    }
}

export function asyncincrement() {
    return function(dispatch) {

        setTimeout( ()=> {
            dispatch( increment() )
        }
            , 2000)
        
    }
}