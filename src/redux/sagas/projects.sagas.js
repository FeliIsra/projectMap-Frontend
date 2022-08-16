import { all, call, put, takeLatest } from 'redux-saga/effects';

import * as appConstants from 'redux/contansts/app.constants';
import * as constants from 'redux/contansts/projects.constants';
import { getAll, save } from 'services/projects.services';

export function* projectsSaveOne(action) {
  try {
    const { formData } = action;
    const { data } = yield call(save, formData);
    yield put({
      type: constants.PROJECTS_ON_CREATE_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({ type: constants.PROJECTS_ON_CREATE_FAILED, error });
  }
}

export function* projectsOnGetAll() {
  try {
    const { data } = yield call(getAll);
    yield put({
      type: constants.PROJECTS_ON_GET_ALL_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({ type: constants.PROJECTS_ON_GET_ALL_FAILED, error });
  }
}

export function* watchProjects() {
  yield all([
    takeLatest(appConstants.APP_ON_INITIALIZE_REQUESTED, projectsOnGetAll),
    takeLatest(constants.PROJECTS_ON_CREATE_REQUESTED, projectsSaveOne),
  ]);
}
