import * as constants from 'redux/contansts/user.constants';

export const defaultState = {
  data: null,
  loading: false,
};

const userReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.USER_ON_FORGOT_PASSWORD_REQUESTED:
    case constants.USER_ON_LOGIN_REQUESTED:
    case constants.USER_ON_RESET_PASSWORD_REQUESTED:
    case constants.USER_ON_REGISTER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.USER_ON_INITIALIZE_SUCCEEDED:
    case constants.USER_ON_LOGIN_SUCCEEDED:
      return {
        ...state,
        data: data.user,
        loading: false,
      };
    case constants.USER_ON_REGISTER_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };
    case constants.USER_ON_FORGOT_PASSWORD_SUCCEEDED:
    case constants.USER_ON_LOGOUT_SUCCEEDED:
    case constants.USER_ON_RESET_PASSWORD_SUCCEEDED:
    case constants.USER_ON_FORGOT_PASSWORD_FAILED:
    case constants.USER_ON_INITIALIZE_FAILED:
    case constants.USER_ON_LOGIN_FAILED:
    case constants.USER_ON_RESET_PASSWORD_FAILED:
      return defaultState;
    case constants.USER_ON_LOGOUT_FAILED:
    default:
      return error?.response?.status === 401 ? defaultState : state;
  }
};

export default userReducer;
