import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  createTool,
  getOneTool,
  getOneOkr,
  addKeyResult,
  createOkr,
} from 'services/okr.services';

import * as constants from 'redux/contansts/okr.constants';

export function* okrCreateTool(action) {
  try {
    const { formData } = action;
    const { data } = yield call(createTool, formData);
    yield put({ type: constants.CREATE_OKR_TOOL_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CREATE_OKR_TOOL_FAILED, error });
  }
}

export function* okrGetOkrTool(action) {
  try {
    const { id } = action;
    const { data } = yield call(getOneTool, id);
    yield put({ type: constants.GET_OKR_TOOL_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.GET_OKR_TOOL_FAILED, error });
  }
}

export function* okrCreateOkr(action) {
  try {
    const { id, formData } = action;
    const { data } = yield call(createOkr, id, formData);
    yield put({ type: constants.CREATE_OKR_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CREATE_OKR_FAILED, error });
  }
}

export function* okrGetOkr(action) {
  try {
    const { id } = action;
    const { data } = yield call(getOneOkr, id);
    yield put({ type: constants.GET_OKR_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.GET_OKR_FAILED, error });
  }
}

export function* okrAddKeyResult(action) {
  try {
    const { id, okrId, formData } = action;
    const { data } = yield call(addKeyResult, id, okrId, formData);
    yield put({ type: constants.ADD_OKR_KEY_RESULT_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.ADD_OKR_KEY_RESULT_FAILED, error });
  }
}

export function* watchOkr() {
  yield all([
    takeLatest(constants.CREATE_OKR_TOOL_REQUESTED, okrCreateTool),
    takeLatest(constants.GET_OKR_TOOL_REQUESTED, okrGetOkrTool),
    takeLatest(constants.CREATE_OKR_REQUESTED, okrCreateOkr),
    takeLatest(constants.GET_OKR_REQUESTED, okrGetOkr),
    takeLatest(constants.ADD_OKR_KEY_RESULT_REQUESTED, okrAddKeyResult),
  ]);
}
