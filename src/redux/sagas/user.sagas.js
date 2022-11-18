import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as appConstants from 'redux/contansts/app.constants';
import * as constants from 'redux/contansts/user.constants';
import * as constantsConsultoria from 'redux/contansts/consultora.constants';
import {
  forgotPassword,
  initialize,
  login,
  resetPassword,
  register,
  editProfile,
  getProfile,
} from 'services/user.services';
import { getCookie, removeUserCookies } from 'helpers/cookies';
import { addConsultant } from 'services/consultora.services';

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
    if (formData.role === 'Consultant') {
      const { data: dataAdd } = yield call(addConsultant, formData.consultora, {
        email: formData.email,
      });
      yield put({
        type: constantsConsultoria.CONSULTORIA_ADD_CONSULTANT_SUCCEEDED,
        data: dataAdd,
      });
    } else {
      yield put({
        type: constants.USER_ON_REGISTER_SUCCEEDED,
        data,
      });
    }
  } catch (error) {
    yield put({ type: constants.USER_ON_REGISTER_FAILED, error });
  }
}

export function* userLogout(action) {
  try {
    const { callback } = action;
    removeUserCookies();
    if (callback) callback();
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

export function* userEditProfile(action) {
  try {
    const { formData, id } = action;
    const { data } = yield call(editProfile, id, formData);
    yield put({ type: constants.USER_ON_EDIT_SUCCEEDED, data });
    yield put({ type: constants.USER_ON_GET_PROFILE_REQUESTED, id });
    yield put({ type: constants.USER_ON_INITIALIZE_REQUESTED });
  } catch (error) {
    yield put({ type: constants.USER_ON_EDIT_FAILED, error });
  }
}

export function* userGetProfile(action) {
  try {
    const { id } = action;
    const { data } = yield call(getProfile, id);
    yield put({ type: constants.USER_ON_GET_PROFILE_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.USER_ON_GET_PROFILE_FAILED, error });
  }
}

export function* watchUser() {
  yield all([
    takeLatest(
      [
        appConstants.APP_ON_INITIALIZE_REQUESTED,
        constants.USER_ON_INITIALIZE_REQUESTED,
      ],
      userInitialize
    ),
    takeLatest(constants.USER_ON_FORGOT_PASSWORD_REQUESTED, userForgotPassword),
    takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin),
    takeLatest(constants.USER_ON_REGISTER_REQUESTED, userRegister),
    takeLatest(constants.USER_ON_LOGOUT_REQUESTED, userLogout),
    takeLatest(constants.USER_ON_RESET_PASSWORD_REQUESTED, userResetPassword),
    takeLatest(constants.USER_ON_EDIT_REQUESTED, userEditProfile),
    takeLatest(constants.USER_ON_GET_PROFILE_REQUESTED, userGetProfile),
  ]);
}
