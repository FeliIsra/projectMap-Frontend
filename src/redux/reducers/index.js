import { combineReducers } from 'redux';

import userReducer from 'redux/reducers/user.reducer';

export default combineReducers({
  user: userReducer,
});
