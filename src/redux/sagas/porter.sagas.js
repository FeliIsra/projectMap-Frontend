import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  create,
  deletePorter,
  deleteQuestion,
  editQuestion,
  getConsejos,
  getOne,
  getOptions,
  getQuestions,
  insertQuestion,
} from 'services/porter.services';
import * as constants from 'redux/contansts/porter.constants';

export function* porterCreate(action) {
  try {
    const { formData } = action;
    const { data } = yield call(create, formData);
    yield put({ type: constants.PORTER_CREATE_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.PORTER_CREATE_FAILED, error });
  }
}

export function* porterDelete(action) {
  try {
    const { formData, id } = action;
    const { data } = yield call(deletePorter, id, formData);
    yield put({ type: constants.PORTER_DELETE_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.PORTER_DELETE_FAILED, error });
  }
}

export function* porterGet(action) {
  try {
    const { id } = action;
    const { data } = yield call(getOne, id);
    yield put({ type: constants.PORTER_GET_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.PORTER_GET_FAILED, error });
  }
}

export function* porterInsertQuestion(action) {
  try {
    const { formData, id } = action;
    const { data } = yield call(insertQuestion, id, formData);
    yield put({ type: constants.PORTER_INSERT_QUESTION_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.PORTER_INSERT_QUESTION_FAILED, error });
  }
}

export function* porterDeleteQuestion(action) {
  try {
    const { idPorter, idQuestion } = action;
    const { data } = yield call(deleteQuestion, idPorter, idQuestion);
    yield put({ type: constants.PORTER_DELETE_QUESTION_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.PORTER_DELETE_QUESTION_FAILED, error });
  }
}

export function* porterEditQuestion(action) {
  try {
    const { idPorter, idQuestion, formData } = action;
    const { data } = yield call(editQuestion, idPorter, idQuestion, formData);
    yield put({ type: constants.PORTER_EDIT_QUESTION_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.PORTER_EDIT_QUESTION_FAILED, error });
  }
}

export function* porterGetOptions(action) {
  try {
    const { data: options } = yield call(getOptions);
    yield put({
      type: constants.PORTER_GET_OPTIONS_SUCCEEDED,
      data: { options },
    });
  } catch (error) {
    yield put({ type: constants.PORTER_GET_OPTIONS_FAILED, error });
  }
}

export function* porterGetQuestions(action) {
  try {
    const { data: questions } = yield call(getQuestions);
    yield put({
      type: constants.PORTER_GET_QUESTIONS_SUCCEEDED,
      data: { questions },
    });
  } catch (error) {
    yield put({ type: constants.PORTER_GET_QUESTIONS_FAILED, error });
  }
}

export function* porterGetConsejos(action) {
  try {
    const { id } = action;
    const { data: consejos } = yield call(getConsejos, id);
    yield put({
      type: constants.PORTER_GET_CONSEJOS_SUCCEEDED,
      data: { consejos },
    });
  } catch (error) {
    yield put({ type: constants.PORTER_GET_CONSEJOS_FAILED, error });
  }
}

export function* watchPorter() {
  yield all([
    takeLatest(constants.PORTER_CREATE_REQUESTED, porterCreate),
    takeLatest(constants.PORTER_DELETE_REQUESTED, porterDelete),
    takeLatest(constants.PORTER_GET_REQUESTED, porterGet),
    takeLatest(
      constants.PORTER_INSERT_QUESTION_REQUESTED,
      porterInsertQuestion
    ),
    takeLatest(
      constants.PORTER_DELETE_QUESTION_REQUESTED,
      porterDeleteQuestion
    ),
    takeLatest(constants.PORTER_EDIT_QUESTION_REQUESTED, porterEditQuestion),
    takeLatest(constants.PORTER_GET_OPTIONS_REQUESTED, porterGetOptions),
    takeLatest(constants.PORTER_GET_QUESTIONS_REQUESTED, porterGetQuestions),
    takeLatest(constants.PORTER_GET_CONSEJOS_REQUESTED, porterGetConsejos),
  ]);
}
