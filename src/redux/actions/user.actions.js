import * as constants from 'redux/contansts/user.constants';

export const onForgotPassword = (formData) => ({
  type: constants.USER_ON_FORGOT_PASSWORD_REQUESTED,
  formData,
});

export const onLogin = (formData) => ({
  type: constants.USER_ON_LOGIN_REQUESTED,
  formData,
});

export const onLogout = () => ({
  type: constants.USER_ON_LOGOUT_REQUESTED,
});

export const onResetPassword = (formData) => ({
  type: constants.USER_ON_RESET_PASSWORD_REQUESTED,
  formData,
});
