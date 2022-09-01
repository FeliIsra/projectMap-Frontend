import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  create,
  deletePestel,
  getOne,
  insertFactor,
  deleteFactor,
  updateFactor,
  getOptions,
} from 'services/pestel.services';

import * as constants from 'redux/contansts/pestel.constants';

export function* pestelCreate(action) {
  try {
    const { formData } = action;
    const { data } = yield call(create, formData);
    yield put({ type: constants.CREATE_PESTEL_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CREATE_PESTEL_FAILED, error });
  }
}

export function* pestelDelete(action) {
  try {
    const { formData, id } = action;
    const { data } = yield call(deletePestel, id, formData);
    yield put({ type: constants.DELETE_PESTEL_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.DELETE_PESTEL_FAILED, error });
  }
}

export function* pestelGet(action) {
  try {
    const { id } = action;
    const { data } = yield call(getOne, id);
    yield put({ type: constants.GET_PESTEL_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.GET_PESTEL_FAILED, error });
  }
}

export function* pestelInsertFactor(action) {
  try {
    const { formData, id } = action;
    const { data } = yield call(insertFactor, id, formData);
    yield put({ type: constants.PESTEL_INSERT_FACTOR_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.PESTEL_INSERT_FACTOR_FAILED, error });
  }
}

export function* pestelDeleteFactor(action) {
  try {
    const { idPestel, idFactor } = action;
    const { data } = yield call(deleteFactor, idPestel, idFactor);
    yield put({ type: constants.PESTEL_DELETE_FACTOR_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.PESTEL_DELETE_FACTOR_FAILED, error });
  }
}

export function* pestelUpdateFactor(action) {
  try {
    const { formData, idPestel, idFactor } = action;
    const { data } = yield call(updateFactor, idPestel, idFactor, formData);
    yield put({ type: constants.PESTEL_UPDATE_FACTOR_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.PESTEL_UPDATE_FACTOR_FAILED, error });
  }
}

export function* pestelGetOptions(action) {
  try {
    const { data: options } = yield call(getOptions);
    yield put({
      type: constants.PESTEL_GET_OPTIONS_SUCCEEDED,
      data: { options },
    });
  } catch (error) {
    yield put({ type: constants.PESTEL_GET_OPTIONS_FAILED, error });
  }
}

export function* watchPestel() {
  yield all([
    takeLatest(constants.CREATE_PESTEL_REQUESTED, pestelCreate),
    takeLatest(constants.DELETE_PESTEL_REQUEST, pestelDelete),
    takeLatest(constants.GET_PESTEL_REQUESTED, pestelGet),
    takeLatest(constants.PESTEL_INSERT_FACTOR_REQUESTED, pestelInsertFactor),
    takeLatest(constants.PESTEL_DELETE_FACTOR_REQUESTED, pestelDeleteFactor),
    takeLatest(constants.PESTEL_UPDATE_FACTOR_REQUESTED, pestelUpdateFactor),
    takeLatest(constants.PESTEL_GET_OPTIONS_REQUESTED, pestelGetOptions),
  ]);
}
