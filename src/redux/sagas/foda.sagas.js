import {
  create,
  remove,
  get,
  insertFactor,
  deleteFactor,
  updateFactor,
} from 'services/foda.services';

import * as constants from 'redux/contansts/foda.constants';
import { all, call, put, takeLatest } from 'redux-saga/effects';

export function* fodaCreate() {
  try {
    const { formData } = action;
    const { data } = yield call(create, formData);
    yield put({ tpye: constants.CREATE_FODA_SUCCEEDED }, data);
  } catch (error) {
    yield put({ type: constants.CREATE_FODA_FAILED, error });
  }
}

export function* fodaDelete() {
  try {
    const { formData, id } = action;
    const { data } = yield call(remove, formData, id);
    yield put({ tpye: constants.DELETE_FODA_SUCCEEDED }, data);
  } catch (error) {
    yield put({ type: constants.DELETE_FODA_FAILED, error });
  }
}

export function* fodaGet() {
  try {
    const { formData, id } = action;
    const { data } = yield call(get, formData, id);
    yield put({ tpye: constants.GET_FODA_SUCCEEDED }, data);
  } catch (error) {
    yield put({ type: constants.GET_FODA_FAILED, error });
  }
}

export function* fodaInsertFactor() {
  try {
    const { formData, idFoda } = action;
    const { data } = yield call(insertFactor, formData, idFoda);
    yield put({ tpye: constants.INSERT_FACTOR_SUCCEEDED }, data);
  } catch (error) {
    yield put({ type: constants.INSERT_FACTOR_FAILED, error });
  }
}

export function* fodaDeleteFactor() {
  try {
    const { formData, idFoda, idFactor } = action;
    const { data } = yield call(deleteFactor, formData, idFoda, idFactor);
    yield put({ tpye: constants.DELETE_FACTOR_SUCCEEDED }, data);
  } catch (error) {
    yield put({ type: constants.DELETE_FACTOR_FAILED, error });
  }
}

export function* fodaUpdateFactor() {
  try {
    const { formData, idFoda, idFactor } = action;
    const { data } = yield call(updateFactor, formData, idFoda, idFactor);
    yield put({ tpye: constants.UPDATE_FACTOR_SUCCEEDED }, data);
  } catch (error) {
    yield put({ type: constants.UPDATE_FACTOR_FAILED, error });
  }
}
