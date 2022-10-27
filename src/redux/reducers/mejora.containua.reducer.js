import * as constants from 'redux/contansts/mejora.continua.constants';
import * as projectConstants from 'redux/contansts/projects.constants';

export const defaultState = {
  data: null,
  loading: false,
};

const mejoraContinuaReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.GET_MEJORA_CONTINUA_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.GET_MEJORA_CONTINUA_SUCCEEDED:
      return {
        ...state,
        data: { ...state.data, ...data },
        loading: false,
      };
    case constants.GET_MEJORA_CONTINUA_FAILED:
      return {
        ...state,
        loading: false,
      };
    case projectConstants.PROJECTS_ON_GET_ONE_REQUESTED:
      return defaultState;
    default:
      return error?.response?.status === 401 ? defaultState : state;
  }
};

export default mejoraContinuaReducer;
