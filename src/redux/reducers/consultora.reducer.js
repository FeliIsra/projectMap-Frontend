import * as constants from 'redux/contansts/consultora.constants';
import * as constantsProjects from 'redux/contansts/projects.constants';

export const defaultState = {
  data: {},
  loading: false,
};

const consultoraReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.CONSULTORIA_CREATE_REQUESTED:
    case constants.CONSULTORIA_DELETE_REQUESTED:
    case constants.CONSULTORIA_GET_ONE_REQUESTED:
    case constants.CONSULTORIA_UPDATE_REQUESTED:
    case constants.CONSULTORIA_ASSIGN_REQUESTED:
    case constants.CONSULTORIA_UNASSIGN_REQUESTED:
    case constants.CONSULTORIA_ADD_CONSULTANT_REQUESTED:
    case constants.CONSULTORIA_REMOVE_CONSULTANT_REQUESTED:
    case constants.CONSULTORIA_REMOVE_PROJECT_REQUESTED:
    case constants.CONSULTORIA_ADD_PROJECT_REQUESTED:
      return {
        ...state,
        laading: true,
      };
    case constants.CONSULTORIA_CREATE_SUCCEEDED:
    case constants.CONSULTORIA_GET_ONE_SUCCEEDED:
    case constants.CONSULTORIA_UPDATE_SUCCEEDED:
    case constants.CONSULTORIA_ASSIGN_SUCCEEDED:
    case constants.CONSULTORIA_UNASSIGN_SUCCEEDED:
    case constants.CONSULTORIA_ADD_CONSULTANT_SUCCEEDED:
    case constants.CONSULTORIA_REMOVE_CONSULTANT_SUCCEEDED:
    case constants.CONSULTORIA_ADD_PROJECT_SUCCEEDED:
    case constants.CONSULTORIA_REMOVE_PROJECT_SUCCEEDED:
      return {
        ...state,
        data,
        laading: true,
      };
    case constants.CONSULTORIA_DELETE_SUCCEEDED:
      return {
        ...state,
        data: {},
        loading: true,
      };
    case constantsProjects.PROJECTS_ON_DELETE_SUCCEEDED:
      return {
        ...state,
        data: {
          ...state.data,
          projects: state?.data?.projects?.filter(
            (project) => project._id !== data._id
          ),
        },
        loading: false,
      };
    case constants.CONSULTORIA_CREATE_FAILED:
    case constants.CONSULTORIA_DELETE_FAILED:
    case constants.CONSULTORIA_GET_ONE_FAILED:
    case constants.CONSULTORIA_UPDATE_FAILED:
    case constants.CONSULTORIA_ASSIGN_FAILED:
    case constants.CONSULTORIA_UNASSIGN_FAILED:
    case constants.CONSULTORIA_ADD_CONSULTANT_FAILED:
    case constants.CONSULTORIA_REMOVE_CONSULTANT_FAILED:
    case constants.CONSULTORIA_ADD_PROJECT_FAILED:
    case constants.CONSULTORIA_REMOVE_PROJECT_FAILED:
      return {
        ...state,
        laading: true,
      };
    default:
      return error?.response?.status === 401 ? defaultState : state;
  }
};

export default consultoraReducer;
