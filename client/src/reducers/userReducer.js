import {CREATE_USER, GET_USERS, DELETE_USERS, GET_USER} from '../actions/types';

const initialState = {
  users : [],
  user: {}
}

export default function(state = initialState, action ) {
  switch(action.type) {
    case CREATE_USER:
      return {
        ...state,
        user: action.payload
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      }
      case GET_USER:
      return {
        ...state,
        user: action.payload
      }
    case DELETE_USERS:{
      return {
        ...state,
        users: state.users.filter((user)=> user._id !== action.payload)
      }
    }
    default:
      return state;
  }
}
