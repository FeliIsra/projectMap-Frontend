import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  addProduct,
  create,
  deletePestel,
  editProduct,
  getOne,
  getOptions,
} from 'services/ansoff.services';

import * as constants from 'redux/contansts/ansoff.constants';

export function* ansoffCreate(action) {
  try {
    const { formData } = action;
    const { data } = yield call(create, formData);
    yield put({ type: constants.CREATE_ANSOFF_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CREATE_ANSOFF_FAILED, error });
  }
}

export function* ansoffDelete(action) {
  try {
    const { formData, id } = action;
    const { data } = yield call(deletePestel, id, formData);
    yield put({ type: constants.DELETE_ANSOFF_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.DELETE_ANSOFF_FAILED, error });
  }
}

export function* ansoffGet(action) {
  try {
    const { id } = action;
    const { data } = yield call(getOne, id);
    yield put({ type: constants.GET_ANSOFF_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.GET_ANSOFF_FAILED, error });
  }
}

export function* ansoffAddProduct(action) {
  try {
    const { id, formData } = action;
    const { data } = yield call(addProduct, id, formData);
    yield put({ type: constants.ADD_PRODUCT_ANSOFF_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.ADD_PRODUCT_ANSOFF_FAILED, error });
  }
}

export function* ansoffGetOptions() {
  try {
    const { data } = yield call(getOptions);
    yield put({ type: constants.GET_OPTIONS_ANSOFF_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.GET_OPTIONS_ANSOFF_FAILED, error });
  }
}

export function* ansoffEditProduct(action) {
  try {
    const { id, productId, formData } = action;
    const { data } = yield call(editProduct, id, productId, formData);
    yield put({ type: constants.EDIT_PRODUCT_ANSOFF_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.EDIT_PRODUCT_ANSOFF_FAILED, error });
  }
}

export function* watchAnsoff() {
  yield all([
    takeLatest(constants.CREATE_ANSOFF_REQUESTED, ansoffCreate),
    takeLatest(constants.GET_ANSOFF_REQUESTED, ansoffGet),
    takeLatest(constants.DELETE_ANSOFF_REQUEST, ansoffDelete),
    takeLatest(constants.ADD_PRODUCT_ANSOFF_REQUESTED, ansoffAddProduct),
    takeLatest(constants.GET_OPTIONS_ANSOFF_REQUESTED, ansoffGetOptions),
    takeLatest(constants.EDIT_PRODUCT_ANSOFF_REQUESTED, ansoffEditProduct),
  ]);
}
