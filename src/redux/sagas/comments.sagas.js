import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as constants from 'redux/contansts/comments.constants';
import {
  create,
  getAll,
  edit,
  deleteComment,
} from 'services/comments.services';

export function* commentsCreate(action) {
  try {
    const { formData } = action;
    const { data } = yield call(create, formData);
    yield put({ type: constants.COMMENT_CREATE_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.COMMENT_CREATE_FAILED, error });
  }
}

export function* commentsGetAll(action) {
  try {
    const { tool, toolId } = action;
    const { data } = yield call(getAll, tool, toolId);
    yield put({ type: constants.COMMENT_GET_ALL_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.COMMENT_GET_ALL_FAILED, error });
  }
}

export function* commentsEdit(action) {
  try {
    const { id, formData } = action;
    const { data } = yield call(edit, id, formData);
    yield put({ type: constants.COMMENT_EDIT_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.COMMENT_EDIT_FAILED, error });
  }
}

export function* commentsDelete(action) {
  try {
    const { id } = action;
    const { data } = yield call(deleteComment, id);
    yield put({ type: constants.COMMENT_DELETE_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.COMMENT_DELETE_FAILED, error });
  }
}

export function* watchComments() {
  yield all([
    takeLatest(constants.COMMENT_GET_ALL_REQUESTED, commentsGetAll),
    takeLatest(constants.COMMENT_EDIT_REQUESTED, commentsEdit),
    takeLatest(constants.COMMENT_CREATE_REQUESTED, commentsCreate),
    takeLatest(constants.COMMENT_DELETE_REQUESTED, commentsDelete),
  ]);
}
