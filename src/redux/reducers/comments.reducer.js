import * as constants from 'redux/contansts/comments.constants';

export const defaultState = {
  data: [],
  loading: false,
};

const commentsReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.COMMENT_CREATE_REQUESTED:
    case constants.COMMENT_EDIT_REQUESTED:
    case constants.COMMENT_DELETE_REQUESTED:
    case constants.COMMENT_GET_ALL_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.COMMENT_GET_ALL_SUCCEEDED:
      return {
        ...state,
        data,
        loading: false,
      };
    case constants.COMMENT_EDIT_SUCCEEDED:
    case constants.COMMENT_CREATE_SUCCEEDED:
      return {
        ...state,
        data: state.data.concat(data),
        loading: false,
      };
    case constants.COMMENT_DELETE_SUCCEEDED:
      return {
        ...state,
        data: state.data.filter((item) => item._id !== data._id),
        loading: false,
      };
    case constants.COMMENT_CREATE_FAILED:
    case constants.COMMENT_EDIT_FAILED:
    case constants.COMMENT_DELETE_FAILED:
    case constants.COMMENT_GET_ALL_FAILED:
      return {
        ...state,
        loading: true,
      };
    default:
      return error?.response?.status === 401 ? defaultState : state;
  }
};

export default commentsReducer;
