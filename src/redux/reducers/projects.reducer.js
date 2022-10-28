import * as constants from 'redux/contansts/projects.constants';

export const defaultState = {
  data: null,
  items: [],
  loading: false,
  fodas: [],
  pestels: [],
  porters: [],
  ansoffs: [],
  okrs: [],
  mckinseys: [],
  balancedScorecards: [],
  questionnaires: [],
};

const projectsReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.PROJECTS_ON_CREATE_REQUESTED:
    case constants.PROJECTS_ON_GET_ONE_REQUESTED:
    case constants.PROJECTS_ON_GET_FODA_REQUESTED:
    case constants.PROJECTS_ON_GET_PORTER_REQUESTED:
    case constants.PROJECTS_ON_GET_PESTEL_REQUESTED:
    case constants.PROJECTS_ON_GET_ANSOFF_REQUESTED:
    case constants.PROJECTS_ON_GET_MCKINSEY_REQUESTED:
    case constants.PROJECTS_ON_GET_OKR_REQUESTED:
    case constants.PROJECTS_ON_GET_BALANCED_SCORECARD_REQUESTED:
    case constants.PROJECTS_ON_GET_QUESTIONNAIRE_REQUESTED:
    case constants.PROJECTS_ON_DELETE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.PROJECTS_ON_CREATE_SUCCEEDED:
      return {
        ...state,
        items: state.items.concat(data),
        loading: false,
      };
    case constants.PROJECTS_ON_GET_ALL_SUCCEEDED:
      return {
        ...state,
        items: data,
        loading: false,
      };
    case constants.PROJECTS_ON_GET_ONE_SUCCEEDED:
      return {
        ...state,
        data: { ...state.data, ...data },
        loading: false,
      };
    case constants.PROJECTS_ON_GET_FODA_SUCCEEDED:
      return {
        ...state,
        fodas: data,
        loding: false,
      };
    case constants.PROJECTS_ON_GET_PORTER_SUCCEEDED:
      return {
        ...state,
        porters: data,
        loding: false,
      };
    case constants.PROJECTS_ON_GET_PESTEL_SUCCEEDED:
      return {
        ...state,
        pestels: data,
        loding: false,
      };
    case constants.PROJECTS_ON_GET_ANSOFF_SUCCEEDED:
      return {
        ...state,
        ansoffs: data,
        loding: false,
      };
    case constants.PROJECTS_ON_GET_OKR_SUCCEEDED:
      return {
        ...state,
        okrs: data,
        loding: false,
      };
    case constants.PROJECTS_ON_GET_MCKINSEY_SUCCEEDED:
      return {
        ...state,
        mckinseys: data,
        loding: false,
      };
    case constants.PROJECTS_ON_GET_BALANCED_SCORECARD_SUCCEEDED:
      return {
        ...state,
        balancedScorecards: data,
        loding: false,
      };
    case constants.PROJECTS_ON_GET_QUESTIONNAIRE_SUCCEEDED:
      return {
        ...state,
        questionnaires: data,
        loding: false,
      };
    case constants.PROJECTS_ON_DELETE_SUCCEEDED:
      return {
        ...state,
        items: state.items.filter((item) => item._id !== data._id),
        loading: false,
      };
    case constants.PROJECTS_ON_CREATE_FAILED:
    case constants.PROJECTS_ON_GET_ONE_FAILED:
    case constants.PROJECTS_ON_DELETE_FAILED:
      return defaultState;
    default:
      return error?.response?.status === 401 ? defaultState : state;
  }
};

export default projectsReducer;
