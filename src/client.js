import { combineReducers, createStore } from 'redux';

const initialState = {
  images: ['hi its working']
}


const snapReducer = (state=initialState.images, action) => {
  switch(action.type) {
    case "ADD_IMG": 
      return [...state, action.imageUri]
    case "GET_IMGS":
      return state
    default:
      return state
  }
}

const reducers = combineReducers({
  snaps: snapReducer,
});

const store = createStore(reducers);


store.subscribe(() => {
  console.log('store changed', store.getState());
});

export default store;
// to go into the snapscreen view

// store.dispatch({type: 'ADD_IMG', imageUri: saveResult});


// const store = createStore(reducer, { // CREATE AN OBJECT FOR THE STORE TO TAKE RECORD OF

// });