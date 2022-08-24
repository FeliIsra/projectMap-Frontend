import { combineReducers } from 'redux';

import userReducer from 'redux/reducers/user.reducer';
import projectsReducer from 'redux/reducers/projects.reducer';
import fodaReducer from 'redux/reducers/foda.reducer';

export default combineReducers({
  user: userReducer,
  projects: projectsReducer,
  foda: fodaReducer,
});
