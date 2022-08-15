import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as appConstants from 'redux/contansts/app.constants';
import * as constants from 'redux/contansts/user.constants';
import {
  forgotPassword,
  initialize,
  login,
  logout,
  resetPassword,
  register,
} from 'services/user.services';
import { getCookie } from 'helpers/cookies';

export function* userInitialize() {
  try {
    if (getCookie('accessToken')) {
      const { data } = yield call(initialize);
      yield put({ type: constants.USER_ON_INITIALIZE_SUCCEEDED, data });
    }
  } catch (error) {
    yield put({ type: constants.USER_ON_INITIALIZE_FAILED, error });
  }
}

export function* userForgotPassword(action) {
  try {
    const { formData } = action;
    const { data } = yield call(forgotPassword, formData);
    yield put({ type: constants.USER_ON_FORGOT_PASSWORD_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_FORGOT_PASSWORD_FAILED, error });
  }
}

export function* userLogin(action) {
  try {
    const { formData } = action;
    const { data } = yield call(login, formData);
    yield put({
      type: constants.USER_ON_LOGIN_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({ type: constants.USER_ON_LOGIN_FAILED, error });
  }
}

export function* userRegister(action) {
  try {
    const { formData } = action;
    const { data } = yield call(register, formData);
    yield put({
      type: constants.USER_ON_REGISTER_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({ type: constants.USER_ON_REGISTER_FAILED, error });
  }
}

export function* userLogout() {
  try {
    yield call(logout);
    yield put({ type: constants.USER_ON_LOGOUT_SUCCEEDED });
  } catch (error) {
    yield put({ type: constants.USER_ON_LOGOUT_FAILED, error });
  }
}

export function* userResetPassword(action) {
  try {
    const { formData } = action;
    const { data } = yield call(resetPassword, formData);
    yield put({ type: constants.USER_ON_RESET_PASSWORD_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_RESET_PASSWORD_FAILED, error });
  }
}

export function* watchUser() {
  yield all([
    takeLatest(appConstants.APP_ON_INITIALIZE_REQUESTED, userInitialize),
    takeLatest(constants.USER_ON_FORGOT_PASSWORD_REQUESTED, userForgotPassword),
    takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin),
    takeLatest(constants.USER_ON_REGISTER_REQUESTED, userRegister),
    takeLatest(constants.USER_ON_LOGOUT_REQUESTED, userLogout),
    takeLatest(constants.USER_ON_RESET_PASSWORD_REQUESTED, userResetPassword),
  ]);
}
