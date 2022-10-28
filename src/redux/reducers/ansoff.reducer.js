import * as constants from 'redux/contansts/ansoff.constants';
import * as projectConstants from 'redux/contansts/projects.constants';

export const defaultState = {
  data: null,
  loading: false,
  items: null,
  options: {
    situacionDelMercado: [],
    situacionDelProducto: [],
    exito: [],
  },
};

const ansoffReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.CREATE_ANSOFF_REQUESTED:
    case constants.GET_ANSOFF_REQUESTED:
    case constants.ADD_PRODUCT_ANSOFF_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.CREATE_ANSOFF_SUCCEEDED:
    case constants.GET_ANSOFF_SUCCEEDED:
    case constants.ADD_PRODUCT_ANSOFF_SUCCEEDED:
    case constants.EDIT_PRODUCT_ANSOFF_SUCCEEDED:
    case constants.DELETE_PRODUCT_ANSOFF_SUCCEEDED:
      return {
        ...state,
        data: { ...state.data, ...data },
        loading: false,
      };
    case constants.GET_OPTIONS_ANSOFF_SUCCEEDED:
      return {
        ...state,
        loading: false,
        options: { ...state.options, ...data },
      };
    case constants.GET_ANSOFF_FAILED:
    case constants.CREATE_ANSOFF_FAILED:
    case constants.DELETE_ANSOFF_FAILED:
    case constants.ADD_PRODUCT_ANSOFF_FAILED:
    case constants.GET_OPTIONS_ANSOFF_FAILED:
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

export default ansoffReducer;
