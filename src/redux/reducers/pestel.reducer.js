import * as constants from 'redux/contansts/pestel.constants';
import * as projectConstants from 'redux/contansts/projects.constants';

export const defaultState = {
  data: null,
  loading: false,
  items: [],
  options: {
    importancia: [],
    intensidad: [],
    tendencia: [],
  },
};

const pestelReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.CREATE_PESTEL_REQUESTED:
    case constants.PESTEL_DELETE_FACTOR_REQUESTED:
    case constants.GET_PESTEL_REQUESTED:
    case constants.PESTEL_INSERT_FACTOR_REQUESTED:
    case constants.PESTEL_UPDATE_FACTOR_REQUESTED:
    case constants.PESTEL_GET_OPTIONS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.CREATE_PESTEL_SUCCEEDED:
    case constants.PESTEL_DELETE_FACTOR_SUCCEEDED:
    case constants.GET_PESTEL_SUCCEEDED:
    case constants.PESTEL_INSERT_FACTOR_SUCCEEDED:
    case constants.PESTEL_UPDATE_FACTOR_SUCCEEDED:
      return {
        ...state,
        data: { ...state.data, ...data },
        loading: false,
      };
    case constants.PESTEL_GET_OPTIONS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        options: { ...state.options, ...data.options },
      };
    case constants.CREATE_PESTEL_FAILED:
    case constants.PESTEL_DELETE_FACTOR_FAILED:
    case constants.GET_PESTEL_FAILED:
    case constants.PESTEL_INSERT_FACTOR_FAILED:
    case constants.PESTEL_UPDATE_FACTOR_FAILED:
    case constants.PESTEL_GET_OPTIONS_FAILED:
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

export default pestelReducer;
