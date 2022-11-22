import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  addUnidad,
  create,
  deletePestel,
  deleteUnidad,
  getOne,
} from 'services/mckinsey.services';

import * as constants from 'redux/contansts/mckinsey.constants';

export function* mckinseyCreate(action) {
  try {
    const { formData } = action;
    const { data } = yield call(create, formData);
    yield put({ type: constants.CREATE_MCKINSEY_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CREATE_MCKINSEY_FAILED, error });
  }
}

export function* mckinseyDelete(action) {
  try {
    const { formData, id } = action;
    const { data } = yield call(deletePestel, id, formData);
    yield put({ type: constants.DELETE_MCKINSEY_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.DELETE_MCKINSEY_FAILED, error });
  }
}

export function* mckinseyGet(action) {
  try {
    const { id } = action;
    const { data } = yield call(getOne, id);
    yield put({ type: constants.GET_MCKINSEY_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.GET_MCKINSEY_FAILED, error });
  }
}

export function* mckinseyAddUnidad(action) {
  try {
    const { id, formData } = action;
    const { data } = yield call(addUnidad, id, formData);
    yield put({ type: constants.ADD_UNIDAD_MCKINSEY_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.ADD_UNIDAD_MCKINSEY_FAILED, error });
  }
}

export function* mckinseyDeleteUnidad(action) {
  try {
    const { id, unidadId } = action;
    const { data } = yield call(deleteUnidad, id, unidadId);
    yield put({ type: constants.DELETE_UNIDAD_MCKINSEY_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.DELETE_UNIDAD_MCKINSEY_FAILED, error });
  }
}

export function* watchMckinsey() {
  yield all([
    takeLatest(constants.CREATE_MCKINSEY_REQUESTED, mckinseyCreate),
    takeLatest(constants.GET_MCKINSEY_REQUESTED, mckinseyGet),
    takeLatest(constants.DELETE_MCKINSEY_REQUEST, mckinseyDelete),
    takeLatest(constants.ADD_UNIDAD_MCKINSEY_REQUESTED, mckinseyAddUnidad),
    takeLatest(
      constants.DELETE_UNIDAD_MCKINSEY_REQUESTED,
      mckinseyDeleteUnidad
    ),
  ]);
}
