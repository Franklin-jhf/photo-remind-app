import { combineReducers } from 'redux';
import snaps, * as fromSnaps from './snapReducer';

const rootReducer = combineReducers({
  snaps
});

const getSnaps = state => fromSnaps.getAddedSnaps(state.snaps);
const getSnap = (state, id) => fromSnaps.getSnap(state.snaps, id);

export const getSnapImages = state =>
  getSnaps(state).map(id => (
    ...getSnap(state, id)
  ))


export default rootReducer;

// 

/*

import { combineReducers } from 'redux'
import cart, * as fromCart from './cart'
import products, * as fromProducts from './products'

export default combineReducers({
  cart,
  products
})

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))
