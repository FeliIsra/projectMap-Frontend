import * as constants from 'redux/contansts/user.constants';

export const onForgotPassword = (formData) => ({
  type: constants.USER_ON_FORGOT_PASSWORD_REQUESTED,
  formData,
});

export const onLogin = (formData) => ({
  type: constants.USER_ON_LOGIN_REQUESTED,
  formData,
});

export const onRegister = (formData) => ({
  type: constants.USER_ON_REGISTER_REQUESTED,
  formData,
});

export const onLogout = (callback) => ({
  type: constants.USER_ON_LOGOUT_REQUESTED,
  callback,
});

export const onResetPassword = (formData) => ({
  type: constants.USER_ON_RESET_PASSWORD_REQUESTED,
  formData,
});

export const getUser = () => ({
  type: constants.USER_ON_INITIALIZE_REQUESTED,
});

export const onEdit = (id, formData) => ({
  type: constants.USER_ON_EDIT_REQUESTED,
  id,
  formData,
});

export const onGetProfile = (id) => ({
  type: constants.USER_ON_GET_PROFILE_REQUESTED,
  id,
});
