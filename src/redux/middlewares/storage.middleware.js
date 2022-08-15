import * as userConstants from 'redux/contansts/user.constants';

import { removeUserCookies, saveUserCookies } from 'helpers/cookies';

const storageMiddleware = () => (next) => (action) => {
  const { data, error, type } = action;
  switch (type) {
    case userConstants.USER_ON_LOGIN_SUCCEEDED:
      saveUserCookies(data.token);
      break;
    case userConstants.USER_ON_LOGOUT_SUCCEEDED:
    case userConstants.USER_ON_INITIALIZE_FAILED:
      removeUserCookies();
      break;
    default:
      if (error?.response?.status === 401) removeUserCookies();
      break;
  }
  return next(action);
};

export default storageMiddleware;
