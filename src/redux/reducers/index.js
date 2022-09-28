import { combineReducers } from 'redux';

import userReducer from 'redux/reducers/user.reducer';
import projectsReducer from 'redux/reducers/projects.reducer';
import fodaReducer from 'redux/reducers/foda.reducer';
import pestelReducer from 'redux/reducers/pestel.reducer';
import mckinseyReducer from 'redux/reducers/mckinsey.reducer';
import ansoffReducer from 'redux/reducers/ansoff.reducer';
import porterReducer from './porter.reducer';

export default combineReducers({
  user: userReducer,
  projects: projectsReducer,
  foda: fodaReducer,
  pestel: pestelReducer,
  mckinsey: mckinseyReducer,
  porter: porterReducer,
  ansoff: ansoffReducer,
});
