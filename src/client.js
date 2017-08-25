// import { combineReducers, createStore } from 'redux';

// const imageReducer = (state=[], action) => { // ES6 ARROW FUNCTION
//   switch(action.type) {
//     case "ADD_IMG": {
//       return [...state, action.payload];
//     }
//   }
//   return state;
//   }
// }

// export default combineReducers({
//   images: imageReducer,
// });

// const store = createStore(reducers);

// // const store = createStore(reducer, { // CREATE AN OBJECT FOR THE STORE TO TAKE RECORD OF

// // });

// store.subscribe(() => {
//   console.log('store changed', store.getState());
// });

// // to go into the snapscreen view

// store.dispatch({type: 'ADD_IMG', payload: saveResult});