import { combineReducers, createStore } from 'redux';

const imageReducer = (state=[], action) => { // ES6 ARROW FUNCTION
  if (action.type === "ADD_IMG") {
    return Object.assign({}, state, {images: [...state.images, action.payload]});
  }
}

const reducers = combineReducers({
  images: imageReducer,
});

const store = createStore(reducers);

// const store = createStore(reducer, { // CREATE AN OBJECT FOR THE STORE TO TAKE RECORD OF

// });

store.subscribe(() => {
  console.log('store changed', store.getState());
});

// to go into the snapscreen view

store.dispatch({type: 'ADD_IMG', payload: saveResult});