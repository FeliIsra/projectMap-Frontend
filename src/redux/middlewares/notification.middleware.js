import {
  sendSuccessNotification,
  sendErrorNotification,
} from 'helpers/notifications';
import * as userConstants from 'redux/contansts/user.constants';

const notificationMiddleware = () => (next) => (action) => {
  const { data, error, type } = action;
  switch (type) {
    case userConstants.USER_ON_LOGIN_SUCCEEDED:
      sendSuccessNotification(data.message);
      break;
    case userConstants.USER_ON_FORGOT_PASSWORD_FAILED:
    case userConstants.USER_ON_LOGIN_FAILED:
    case userConstants.USER_ON_LOGOUT_FAILED:
    case userConstants.USER_ON_RESET_PASSWORD_FAILED:
      sendErrorNotification(error.response?.data?.message || error.message);
      break;
    default:
      if (error?.response?.status === 401)
        sendErrorNotification(error.response?.data?.message || error.message);
      break;
  }
  return next(action);
};

export default notificationMiddleware;
