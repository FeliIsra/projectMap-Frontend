import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  createTool,
  getOneTool,
  getOneOkr,
  addKeyResult,
  createOkr,
  editKeyStatus,
  editKeyResult,
  deleteOkr,
  deleteOkrItem,
  deleteOkrKeyResultItem,
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

export function* okrDelete(action) {
  try {
    const { id } = action;
    const { data } = yield call(deleteOkr, id);
    yield put({ type: constants.DELETE_OKR_TOOL_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.DELETE_OKR_TOOL_FAILED, error });
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

export function* okrEditKeyStatus(action) {
  try {
    const { id, okrId, keyResultId, formData } = action;
    const { data } = yield call(
      editKeyStatus,
      id,
      okrId,
      keyResultId,
      formData
    );
    yield put({
      type: constants.EDIT_KEY_RESULT_KEY_STATUS_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.EDIT_KEY_RESULT_KEY_STATUS_FAILED,
      error,
    });
  }
}

export function* okrEditKeyResult(action) {
  try {
    const { id, okrId, keyResultId, formData } = action;
    const { data } = yield call(
      editKeyResult,
      id,
      okrId,
      keyResultId,
      formData
    );
    yield put({
      type: constants.EDIT_KEY_RESULT_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.EDIT_KEY_RESULT_FAILED,
      error,
    });
  }
}

export function* okrDeleteOkr(action) {
  try {
    const { id, okrId } = action;
    const { data } = yield call(deleteOkrItem, id, okrId);
    yield put({
      type: constants.DELETE_OKR_SUCCEEDED,
      data: { ...data, okrId },
    });
  } catch (error) {
    yield put({ type: constants.DELETE_OKR_FAILED, error });
  }
}

export function* okrDeleteKeyResult(action) {
  try {
    const { id, okrId, keyResultId } = action;
    const { data } = yield call(deleteOkrKeyResultItem, id, okrId, keyResultId);
    yield put({
      type: constants.DELETE_KEY_RESULT_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({ type: constants.DELETE_KEY_RESULT_FAILED, error });
  }
}

export function* watchOkr() {
  yield all([
    takeLatest(constants.CREATE_OKR_TOOL_REQUESTED, okrCreateTool),
    takeLatest(constants.GET_OKR_TOOL_REQUESTED, okrGetOkrTool),
    takeLatest(constants.DELETE_OKR_TOOL_REQUEST, okrDelete),
    takeLatest(constants.CREATE_OKR_REQUESTED, okrCreateOkr),
    takeLatest(constants.GET_OKR_REQUESTED, okrGetOkr),
    takeLatest(constants.ADD_OKR_KEY_RESULT_REQUESTED, okrAddKeyResult),
    takeEvery(constants.EDIT_KEY_RESULT_KEY_STATUS_REQUESTED, okrEditKeyStatus),
    takeEvery(constants.EDIT_KEY_RESULT_REQUESTED, okrEditKeyResult),
    takeLatest(constants.DELETE_OKR_REQUEST, okrDeleteOkr),
    takeLatest(constants.DELETE_KEY_RESULT_REQUESTED, okrDeleteKeyResult),
  ]);
}
