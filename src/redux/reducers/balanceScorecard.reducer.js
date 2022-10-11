import * as constants from 'redux/contansts/balanceScorecard.constants';
import * as projectConstants from 'redux/contansts/projects.constants';

export const defaultState = {
  data: null,
  items: [],
  loading: false,
  options: {},
};

const balanceScorecardReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.CREATE_BALANCE_SCORECARD_REQUESTED:
    case constants.GET_OPTIONS_BALANCE_SCORECARD_REQUESTED:
    case constants.GET_ONE_BALANCE_SCORECARD_REQUESTED:
    case constants.ADD_INITIATIVE_BALANCE_SCORECARD_REQUESTED:
    case constants.ADD_OBJETIVE_BALANCE_SCORECARD_REQUESTED:
    case constants.ADD_CHECKPOINT_BALANCE_SCORECARD_REQUESTED:
    case constants.DELETE_BALANCE_SCORECARD_REQUESTED:
    case constants.DELETE_INITIATIVE_BALANCE_SCORECARD_REQUESTED:
    case constants.DELETE_OBJETIVE_BALANCE_SCORECARD_REQUESTED:
    case constants.DELETE_CHECKPOINT_BALANCE_SCORECARD_REQUESTED:
    case constants.UPDATE_BALANCE_SCORECARD_REQUESTED:
    case constants.UPDATE_INITIATIVE_BALANCE_SCORECARD_REQUESTED:
    case constants.UPDATE_OBJETIVE_BALANCE_SCORECARD_REQUESTED:
    case constants.UPDATE_CHECKPOINT_BALANCE_SCORECARD_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.CREATE_BALANCE_SCORECARD_SUCCEEDED:
    case constants.GET_ONE_BALANCE_SCORECARD_SUCCEEDED:
    case constants.ADD_INITIATIVE_BALANCE_SCORECARD_SUCCEEDED:
    case constants.ADD_OBJETIVE_BALANCE_SCORECARD_SUCCEEDED:
    case constants.ADD_CHECKPOINT_BALANCE_SCORECARD_SUCCEEDED:
    case constants.DELETE_BALANCE_SCORECARD_SUCCEEDED:
    case constants.DELETE_INITIATIVE_BALANCE_SCORECARD_SUCCEEDED:
    case constants.DELETE_OBJETIVE_BALANCE_SCORECARD_SUCCEEDED:
    case constants.DELETE_CHECKPOINT_BALANCE_SCORECARD_SUCCEEDED:
    case constants.UPDATE_BALANCE_SCORECARD_SUCCEEDED:
    case constants.UPDATE_INITIATIVE_BALANCE_SCORECARD_SUCCEEDED:
    case constants.UPDATE_OBJETIVE_BALANCE_SCORECARD_SUCCEEDED:
    case constants.UPDATE_CHECKPOINT_BALANCE_SCORECARD_SUCCEEDED:
      return {
        ...state,
        data: { ...state.data, ...data },
        loading: false,
      };
    case constants.GET_OPTIONS_BALANCE_SCORECARD_SUCCEEDED:
      return {
        ...state,
        loading: false,
        options: { ...state.options, ...data },
      };
    case constants.CREATE_BALANCE_SCORECARD_FAILED:
    case constants.GET_OPTIONS_BALANCE_SCORECARD_FAILED:
    case constants.GET_ONE_BALANCE_SCORECARD_FAILED:
    case constants.ADD_INITIATIVE_BALANCE_SCORECARD_FAILED:
    case constants.ADD_OBJETIVE_BALANCE_SCORECARD_FAILED:
    case constants.ADD_CHECKPOINT_BALANCE_SCORECARD_FAILED:
    case constants.DELETE_BALANCE_SCORECARD_FAILED:
    case constants.DELETE_INITIATIVE_BALANCE_SCORECARD_FAILED:
    case constants.DELETE_OBJETIVE_BALANCE_SCORECARD_FAILED:
    case constants.DELETE_CHECKPOINT_BALANCE_SCORECARD_FAILED:
    case constants.UPDATE_BALANCE_SCORECARD_FAILED:
    case constants.UPDATE_INITIATIVE_BALANCE_SCORECARD_FAILED:
    case constants.UPDATE_OBJETIVE_BALANCE_SCORECARD_FAILED:
    case constants.UPDATE_CHECKPOINT_BALANCE_SCORECARD_FAILED:
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

export default balanceScorecardReducer;
