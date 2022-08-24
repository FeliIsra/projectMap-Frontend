import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  create,
  deleteFoda,
  getOne,
  insertFactor,
  deleteFactor,
  updateFactor,
  getOptions,
} from 'services/foda.services';

import * as constants from 'redux/contansts/foda.constants';

export function* fodaCreate(action) {
  try {
    const { formData } = action;
    const { data } = yield call(create, formData);
    yield put({ type: constants.CREATE_FODA_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CREATE_FODA_FAILED, error });
  }
}

export function* fodaDelete(action) {
  try {
    const { formData, id } = action;
    const { data } = yield call(deleteFoda, id, formData);
    yield put({ type: constants.DELETE_FODA_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.DELETE_FODA_FAILED, error });
  }
}

export function* fodaGet(action) {
  try {
    const { id } = action;
    const { data } = yield call(getOne, id);
    yield put({ type: constants.GET_FODA_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.GET_FODA_FAILED, error });
  }
}

export function* fodaInsertFactor(action) {
  try {
    const { formData, id } = action;
    const { data } = yield call(insertFactor, id, formData);
    yield put({ type: constants.INSERT_FACTOR_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.INSERT_FACTOR_FAILED, error });
  }
}

export function* fodaDeleteFactor(action) {
  try {
    const { idFoda, idFactor } = action;
    const { data } = yield call(deleteFactor, idFoda, idFactor);
    yield put({ type: constants.DELETE_FACTOR_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.DELETE_FACTOR_FAILED, error });
  }
}

export function* fodaUpdateFactor(action) {
  try {
    const { formData, idFoda, idFactor } = action;
    const { data } = yield call(updateFactor, idFoda, idFactor, formData);
    yield put({ type: constants.UPDATE_FACTOR_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.UPDATE_FACTOR_FAILED, error });
  }
}

export function* fodaGetOptions(action) {
  try {
    const { data: options } = yield call(getOptions);
    yield put({ type: constants.GET_OPTIONS_SUCCEEDED, data: { options } });
  } catch (error) {
    yield put({ type: constants.GET_OPTIONS_FAILED, error });
  }
}

export function* watchFoda() {
  yield all([
    takeLatest(constants.CREATE_FODA_REQUESTED, fodaCreate),
    takeLatest(constants.DELETE_FODA_REQUEST, fodaDelete),
    takeLatest(constants.GET_FODA_REQUESTED, fodaGet),
    takeLatest(constants.INSERT_FACTOR_REQUESTED, fodaInsertFactor),
    takeLatest(constants.DELETE_FACTOR_REQUESTED, fodaDeleteFactor),
    takeLatest(constants.UPDATE_FACTOR_REQUESTED, fodaUpdateFactor),
    takeLatest(constants.GET_OPTIONS_REQUESTED, fodaGetOptions),
  ]);
}
