import * as constants from 'redux/contansts/foda.constants';

export const defaultState = {
  data: null,
  loading: false,
  items: [],
};

const fodaReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.CREATE_FODA_REQUESTED:
    case constants.DELETE_FACTOR_REQUESTED:
    case constants.GET_FODA_REQUESTED:
    case constants.INSERT_FACTOR_REQUESTED:
    case constants.DELETE_FACTOR_REQUESTED:
    case constants.UPDATE_FACTOR_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.CREATE_FODA_REQUESTED:
    case constants.DELETE_FACTOR_REQUESTED:
    case constants.GET_FODA_REQUESTED:
    case constants.INSERT_FACTOR_REQUESTED:
    case constants.DELETE_FACTOR_REQUESTED:
    case constants.UPDATE_FACTOR_REQUESTED:
      return {
        ...state,
        data: data.foda,
        loading: false,
      };
    case constants.CREATE_FODA_REQUESTED:
    case constants.DELETE_FACTOR_REQUESTED:
    case constants.GET_FODA_REQUESTED:
    case constants.INSERT_FACTOR_REQUESTED:
    case constants.DELETE_FACTOR_REQUESTED:
    case constants.UPDATE_FACTOR_REQUESTED:
      return {
        ...state,
        loading: false,
      };
    default:
      return error?.response?.status === 401 ? defaultState : state;
  }
};

export default fodaReducer;
