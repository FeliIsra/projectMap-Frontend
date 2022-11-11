import * as constants from 'redux/contansts/projects.constants';
import * as fodaConsts from 'redux/contansts/foda.constants';
import * as porterConsts from 'redux/contansts/porter.constants';
import * as pestelConsts from 'redux/contansts/pestel.constants';
import * as ansoffConsts from 'redux/contansts/ansoff.constants';
import * as mckinseyConsts from 'redux/contansts/mckinsey.constants';
import * as okrConsts from 'redux/contansts/okr.constants';
import * as bsConsts from 'redux/contansts/balanceScorecard.constants';

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
  itemsShared: [],
  sharedUsers: [],
  errorShared: null,
  sharedUsersSuccess: false,
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
        items: [...state.items, data],
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
    case fodaConsts.DELETE_FODA_SUCCEEDED:
      return {
        ...state,
        fodas: state.fodas.filter((tool) => tool._id !== data._id),
        loading: false,
      };
    case constants.PROJECTS_ON_GET_PORTER_SUCCEEDED:
      return {
        ...state,
        porters: data,
        loding: false,
      };
    case porterConsts.PORTER_DELETE_SUCCEEDED:
      return {
        ...state,
        porters: state.porters.filter((tool) => tool._id !== data._id),
        loading: false,
      };
    case constants.PROJECTS_ON_GET_PESTEL_SUCCEEDED:
      return {
        ...state,
        pestels: data,
        loding: false,
      };
    case pestelConsts.DELETE_PESTEL_SUCCEEDED:
      return {
        ...state,
        pestels: state.pestels.filter((tool) => tool._id !== data._id),
        loading: false,
      };
    case constants.PROJECTS_ON_GET_ANSOFF_SUCCEEDED:
      return {
        ...state,
        ansoffs: data,
        loding: false,
      };
    case ansoffConsts.DELETE_ANSOFF_SUCCEEDED:
      return {
        ...state,
        ansoffs: state.ansoffs.filter((tool) => tool._id !== data._id),
        loading: false,
      };
    case constants.PROJECTS_ON_GET_OKR_SUCCEEDED:
      return {
        ...state,
        okrs: data,
        loding: false,
      };
    case okrConsts.DELETE_OKR_TOOL_SUCCEEDED:
      return {
        ...state,
        okrs: state.okrs.filter((tool) => tool._id !== data._id),
        loading: false,
      };
    case constants.PROJECTS_ON_GET_MCKINSEY_SUCCEEDED:
      return {
        ...state,
        mckinseys: data,
        loding: false,
      };
    case mckinseyConsts.DELETE_MCKINSEY_SUCCEEDED:
      return {
        ...state,
        mckinseys: state.mckinseys.filter((tool) => tool._id !== data._id),
        loading: false,
      };
    case constants.PROJECTS_ON_GET_BALANCED_SCORECARD_SUCCEEDED:
      return {
        ...state,
        balancedScorecards: data,
        loding: false,
      };
    case bsConsts.DELETE_BALANCE_SCORECARD_SUCCEEDED:
      return {
        ...state,
        balancedScorecards: state.balancedScorecards.filter(
          (tool) => tool._id !== data._id
        ),
        loading: false,
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
        items: state?.items?.filter((item) => item._id !== data._id),
        loading: false,
      };
    case constants.PROJECTS_SHARED_ON_GET_ALL_SUCCEEDED:
      return {
        ...state,
        itemsShared: data,
        loading: false,
      };
    case constants.PROJECTS_ON_GET_ALL_REQUESTED:
      return {
        ...state,
        loading: true,
        data: null,
      };
    case constants.PROJECTS_SHARE_USER_SUCCEEDED:
      return {
        ...state,
        sharedUsers: data,
        sharedUsersSuccess: true,
      };
    case constants.PROJECTS_UNSHARE_USER_SUCCEEDED:
      return {
        ...state,
        sharedUsers: data,
      };
    case constants.PROJECTS_SHARED_USERS_SUCCEEDED:
      return {
        ...state,
        sharedUsers: data,
      };
    case constants.PROJECTS_SHARE_USER_FAILED:
      return {
        ...state,
        errorShared: error,
      };
    case constants.PROJECTS_SHARE_USER_REQUESTED:
      return {
        ...state,
        errorShared: null,
        sharedUsersSuccess: false,
      };
    case constants.PROJECTS_SHARED_ON_GET_ALL_FAILED:
    case constants.PROJECTS_ON_CREATE_FAILED:
    case constants.PROJECTS_ON_GET_ONE_FAILED:
    case constants.PROJECTS_ON_DELETE_FAILED:
      return defaultState;
    default:
      return error?.response?.status === 401 ? defaultState : state;
  }
};

export default projectsReducer;
