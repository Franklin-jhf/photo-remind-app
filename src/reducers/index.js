import { combineReducers } from 'redux';
import snaps from './SnapReducer';

const rootReducer = combineReducers({
  snaps : snaps
});

export default rootReducer;