import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getOne } from 'services/mejora.continua.services';

import * as constants from 'redux/contansts/mejora.continua.constants';

export function* mejoraContinuaGetOne(action) {
  try {
    const { id } = action;
    const { data } = yield call(getOne, id);
    yield put({ type: constants.GET_MEJORA_CONTINUA_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.GET_MEJORA_CONTINUA_FAILED, error });
  }
}

export function* watchMejoraContinua() {
  yield all([
    takeLatest(constants.GET_MEJORA_CONTINUA_REQUESTED, mejoraContinuaGetOne),
  ]);
}
