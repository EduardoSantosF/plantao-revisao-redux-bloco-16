import { LOGIN_ACTION } from '../actions/actionTypes';

const INITIAL_STATE = {
  username: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        username: action.username,
      };

    default:
      return state;
  }
};

export default loginReducer;
