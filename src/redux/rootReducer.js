export function rootReducer(state, acion) {

    if (acion.type === 'INCREMENT') {
        return state + 1
    } else
    if (acion.type === 'DECREMENT') {
        return state - 1
    }

 return state   
}