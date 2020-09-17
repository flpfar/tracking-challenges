import { combineReducers } from 'redux';
import user from './user';
import loading from './loading';

const rootReducer = combineReducers({
  userData: user,
  loading: loading,
});

export default rootReducer;