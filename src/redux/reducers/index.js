import { combineReducers } from 'redux';

import userReducer from 'redux/reducers/user.reducer';
import projectsReducer from 'redux/reducers/projects.reducer';
import fodaReducer from 'redux/reducers/foda.reducer';
import pestelReducer from 'redux/reducers/pestel.reducer';
import mckinseyReducer from 'redux/reducers/mckinsey.reducer';
import ansoffReducer from 'redux/reducers/ansoff.reducer';
import porterReducer from 'redux/reducers/porter.reducer';
import balanceScorecardReducer from 'redux/reducers/balanceScorecard.reducer';
import okrReducer from 'redux/reducers/okr.reducer';
import commentsReducer from './comments.reducer';
import questionnaireReducer from './questionnaire.reducer';

export default combineReducers({
  user: userReducer,
  projects: projectsReducer,
  foda: fodaReducer,
  pestel: pestelReducer,
  mckinsey: mckinseyReducer,
  porter: porterReducer,
  ansoff: ansoffReducer,
  balanceScorecard: balanceScorecardReducer,
  okr: okrReducer,
  comments: commentsReducer,
  questionnaire: questionnaireReducer,
});
