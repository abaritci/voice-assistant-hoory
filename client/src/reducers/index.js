import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

export default combineReducers({
  errorReducer,
  authReducer,
  userReducer
});
