import * as constants from 'redux/contansts/porter.constants';
import * as projectConstants from 'redux/contansts/projects.constants';

export const defaultState = {
  data: null,
  loading: false,
  items: [],
  options: {
    fuerza: [],
    nivelDeConcordancia: [],
    valoracion: [],
  },
  questions: {
    'Rivalidad entre competidores': [],
    'Poder de negociacion con los clientes': [],
    'Poder de negociacion con los proveedores': [],
    'Amenaza de nuevos competidores': [],
    'Amenaza de productos substitutos': [],
  },
  consejos: null,
};

const porterReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.PORTER_CREATE_REQUESTED:
    case constants.PORTER_GET_REQUESTED:
    case constants.PORTER_DELETE_REQUESTED:
    case constants.PORTER_INSERT_QUESTION_REQUESTED:
    case constants.PORTER_DELETE_QUESTION_REQUESTED:
    case constants.PORTER_EDIT_QUESTION_REQUESTED:
    case constants.PORTER_GET_OPTIONS_REQUESTED:
    case constants.PORTER_GET_QUESTIONS_REQUESTED:
    case constants.PORTER_GET_CONSEJOS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.PORTER_CREATE_SUCCEEDED:
    case constants.PORTER_GET_SUCCEEDED:
    case constants.PORTER_DELETE_SUCCEEDED:
    case constants.PORTER_INSERT_QUESTION_SUCCEEDED:
    case constants.PORTER_DELETE_QUESTION_SUCCEEDED:
    case constants.PORTER_EDIT_QUESTION_SUCCEEDED:
      return {
        ...state,
        data: { ...state.data, ...data },
        loading: false,
      };
    case constants.PORTER_GET_CONSEJOS_SUCCEEDED:
      return {
        ...state,
        consejos: { ...state.consejos, ...data.consejos },
        loading: false,
      };
    case constants.PORTER_GET_OPTIONS_SUCCEEDED:
      return {
        ...state,
        options: { ...state.options, ...data.options },
      };
    case constants.PORTER_GET_QUESTIONS_SUCCEEDED:
      return {
        ...state,
        questions: { ...state.questions, ...data.questions },
      };
    case constants.PORTER_CREATE_FAILED:
    case constants.PORTER_GET_FAILED:
    case constants.PORTER_DELETE_FAILED:
    case constants.PORTER_INSERT_QUESTION_FAILED:
    case constants.PORTER_DELETE_QUESTION_FAILED:
    case constants.PORTER_EDIT_QUESTION_FAILED:
    case constants.PORTER_GET_OPTIONS_FAILED:
    case constants.PORTER_GET_QUESTIONS_FAILED:
    case constants.PORTER_GET_CONSEJOS_FAILED:
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

export default porterReducer;
