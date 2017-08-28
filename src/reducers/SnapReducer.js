const initialState = {
  snaps: []
}

const addedImages = (state = initialState.addedImages, action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return [ ...state, action.imageUri ]
    default:
      return state
  }
}

export const getAddedImages = state => state.addedImages;

const snaps = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKOUT_REQUEST':
      return initialState
    case 'CHECKOUT_FAILURE':
      return action.snaps
    default:
      return {
        addedImages: addedImages(state.addedImages, action),
      }
  }
}

export default snaps;
