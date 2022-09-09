import * as constants from 'redux/contansts/mckinsey.constants';
import * as projectConstants from 'redux/contansts/projects.constants';

export const defaultState = {
  data: null,
  loading: false,
  items: null,
  options: {},
};

const mckinseyReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.CREATE_MCKINSEY_REQUESTED:
    case constants.GET_MCKINSEY_REQUESTED:
    case constants.MCKINSEY_GET_OPTIONS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.CREATE_MCKINSEY_SUCCEEDED:
    case constants.GET_MCKINSEY_SUCCEEDED:
      return {
        ...state,
        data: { ...state.data, ...data },
        loading: false,
      };
    case constants.MCKINSEY_GET_OPTIONS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        options: { ...state.options, ...data.options },
      };
    case constants.GET_MCKINSEY_FAILED:
    case constants.CREATE_MCKINSEY_FAILED:
    case constants.DELETE_MCKINSEY_FAILED:
    case constants.MCKINSEY_GET_OPTIONS_FAILED:
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

export default mckinseyReducer;
