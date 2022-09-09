import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  create,
  deletePestel,
  getOne,
  getOptions,
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

export function* mckinseyGetOptions(action) {
  try {
    const { data: options } = yield call(getOptions);
    yield put({
      type: constants.GET_MCKINSEY_SUCCEEDED,
      data: { options },
    });
  } catch (error) {
    yield put({ type: constants.GET_MCKINSEY_FAILED, error });
  }
}

export function* watchMckinsey() {
  yield all([
    takeLatest(constants.CREATE_MCKINSEY_REQUESTED, mckinseyCreate),
    takeLatest(constants.GET_MCKINSEY_REQUESTED, mckinseyGet),
    takeLatest(constants.DELETE_MCKINSEY_REQUEST, mckinseyDelete),
    takeLatest(constants.MCKINSEY_GET_OPTIONS_REQUESTED, mckinseyGetOptions),
  ]);
}
