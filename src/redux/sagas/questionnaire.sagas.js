import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import * as constants from 'redux/contansts/questionnarie.constants';
import {
  create,
  getOne,
  insert,
  questions,
} from 'services/questionnaire.services';

export function* questionnaireCreate(action) {
  try {
    const { formData } = action;
    const { data } = yield call(create, formData);
    yield put({
      type: constants.QUESTIONNARIE_ON_CREATE_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.QUESTIONNARIE_ON_CREATE_FAILED,
      error,
    });
  }
}

export function* questionnaireGetQuestions() {
  try {
    const { data } = yield call(questions);
    yield put({
      type: constants.QUESTIONNARIE_ON_GET_QUIESTIONS_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.QUESTIONNARIE_ON_GET_QUESTIONS_FAILED,
      error,
    });
  }
}

export function* questionnaireGetOne(action) {
  try {
    const { id } = action;
    const { data } = yield call(getOne, id);
    yield put({
      type: constants.QUESTIONNARIE_ON_GET_ONE_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.QUESTIONNARIE_ON_GET_ONE_FAILED,
      error,
    });
  }
}

export function* questionnaireInsert(action) {
  try {
    const { id, formData } = action;
    const { data } = yield call(insert, formData, id);
    yield put({
      type: constants.QUESTIONNARIE_ON_INSERT_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.QUESTIONNARIE_ON_INSERT_FAILED,
      error,
    });
  }
}

export function* watchQuestionnaire() {
  yield all([
    takeLatest(
      constants.QUESTIONNARIE_ON_CREATE_REQUESTED,
      questionnaireCreate
    ),
    takeLatest(
      constants.QUESTIONNARIE_ON_GET_QUESTIONS_REQUESTED,
      questionnaireGetQuestions
    ),
    takeLatest(
      constants.QUESTIONNARIE_ON_GET_ONE_REQUESTED,
      questionnaireGetOne
    ),
    takeLatest(
      constants.QUESTIONNARIE_ON_INSERT_REQUESTED,
      questionnaireInsert
    ),
  ]);
}
