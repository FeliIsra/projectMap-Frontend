import * as constants from 'redux/contansts/foda.constants';

export const defaultState = {
  data: null,
  loading: false,
  items: [],
  options: {
    importancia: [],
    intensidad: [],
    tendencia: [],
    urgencia: [],
  },
};

const fodaReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.CREATE_FODA_REQUESTED:
    case constants.DELETE_FACTOR_REQUESTED:
    case constants.GET_FODA_REQUESTED:
    case constants.INSERT_FACTOR_REQUESTED:
    case constants.UPDATE_FACTOR_REQUESTED:
    case constants.GET_OPTIONS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.CREATE_FODA_SUCCEEDED:
    case constants.DELETE_FACTOR_SUCCEEDED:
    case constants.GET_FODA_SUCCEEDED:
    case constants.INSERT_FACTOR_SUCCEEDED:
    case constants.UPDATE_FACTOR_SUCCEEDED:
      return {
        ...state,
        data: { ...state.data, ...data },
        loading: false,
      };
    case constants.GET_OPTIONS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        options: { ...state.options, ...data.options },
      };
    case constants.CREATE_FODA_FAILED:
    case constants.DELETE_FACTOR_FAILED:
    case constants.GET_FODA_FAILED:
    case constants.INSERT_FACTOR_FAILED:
    case constants.UPDATE_FACTOR_FAILED:
    case constants.GET_OPTIONS_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return error?.response?.status === 401 ? defaultState : state;
  }
};

export default fodaReducer;
