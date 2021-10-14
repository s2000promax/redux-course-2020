export function createStore(rootReducer, initialState) {

    // How to work Redux: https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow

    //private object
    let state = rootReducer(initialState, {type: '__INIT__'})
    const subscribers = []


 return {
   // dispath === { type: 'INCREMENT'} This is object. It has field Type
     dispatch(action) {
        state = rootReducer(state, action) // Change State
        subscribers.forEach( sub => sub() ) //Notify subscribers
     }, 

     subscribe(callback) {
       subscribers.push(callback)
     },
      getState() {
        return state
     }
 }
}