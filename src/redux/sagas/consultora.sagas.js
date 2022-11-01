import { all, call, put, takeLatest } from 'redux-saga/effects';
import { onRemoveConsultatn } from 'redux/actions/consultora.actions';
import * as constants from 'redux/contansts/consultora.constants';
import {
  addConsultant,
  create,
  deleteConsultora,
  getOne,
  deleteConsultant,
  update,
  assignProjects,
  unAssignProjects,
  deleteProject,
  addProject,
} from 'services/consultora.services';

export function* consultoraCreate(action) {
  try {
    const { formData } = action;
    const { data } = yield call(create, formData);
    yield put({ type: constants.CONSULTORIA_CREATE_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CONSULTORIA_CREATE_FAILED, error });
  }
}

export function* consultoraDelete(action) {
  try {
    const { id } = action;
    const { data } = yield call(deleteConsultora, id);
    yield put({ type: constants.CONSULTORIA_DELETE_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CONSULTORIA_DELETE_FAILED, error });
  }
}

export function* consultoraGetOne(action) {
  try {
    const { id } = action;
    const { data } = yield call(getOne, id);
    yield put({ type: constants.CONSULTORIA_GET_ONE_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CONSULTORIA_GET_ONE_FAILED, error });
  }
}

export function* consultoraUpdate(action) {
  try {
    const { id, formData } = action;
    const { data } = yield call(update, id, formData);
    yield put({ type: constants.CONSULTORIA_UPDATE_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CONSULTORIA_UPDATE_FAILED, error });
  }
}

export function* consultoraAssign(action) {
  try {
    const { consultoraId, formData } = action;
    const { data } = yield call(assignProjects, consultoraId, formData);
    yield put({ type: constants.CONSULTORIA_ASSIGN_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CONSULTORIA_ASSIGN_FAILED, error });
  }
}

export function* consultoraUnAssign(action) {
  try {
    const { consultoraId, formData } = action;
    const { data } = yield call(unAssignProjects, consultoraId, formData);
    yield put({ type: constants.CONSULTORIA_UNASSIGN_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CONSULTORIA_UNASSIGN_FAILED, error });
  }
}

export function* consultoraAddConsultant(action) {
  try {
    const { consultoraId, formData } = action;
    const { data } = yield call(addConsultant, consultoraId, formData);
    yield put({ type: constants.CONSULTORIA_ADD_CONSULTANT_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CONSULTORIA_ADD_CONSULTANT_FAILED, error });
  }
}

export function* consultoraRemoveConsultant(action) {
  try {
    const { consultoraId, formData } = action;
    const { data } = yield call(deleteConsultant, consultoraId, formData);
    yield put({
      type: constants.CONSULTORIA_REMOVE_CONSULTANT_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({ type: constants.CONSULTORIA_REMOVE_CONSULTANT_FAILED, error });
  }
}

export function* consultoraRemoveProject(action) {
  try {
    const { consultoraId, projectId } = action;
    const { data } = yield call(deleteProject, consultoraId, projectId);
    yield put({
      type: constants.CONSULTORIA_REMOVE_PROJECT_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({ type: constants.CONSULTORIA_REMOVE_PROJECT_FAILED, error });
  }
}

export function* consultoraAddProject(action) {
  try {
    const { consultoraId, projectId } = action;
    const { data } = yield call(addProject, consultoraId, projectId);
    yield put({
      type: constants.CONSULTORIA_ADD_PROJECT_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({ type: constants.CONSULTORIA_ADD_PROJECT_FAILED, error });
  }
}

export function* watchConsultora() {
  yield all([
    takeLatest(constants.CONSULTORIA_CREATE_REQUESTED, consultoraCreate),
    takeLatest(constants.CONSULTORIA_DELETE_REQUESTED, consultoraDelete),
    takeLatest(constants.CONSULTORIA_GET_ONE_REQUESTED, consultoraGetOne),
    takeLatest(constants.CONSULTORIA_UPDATE_REQUESTED, consultoraUpdate),
    takeLatest(constants.CONSULTORIA_ASSIGN_REQUESTED, consultoraAssign),
    takeLatest(constants.CONSULTORIA_UNASSIGN_REQUESTED, consultoraUnAssign),
    takeLatest(
      constants.CONSULTORIA_ADD_CONSULTANT_REQUESTED,
      consultoraAddConsultant
    ),
    takeLatest(
      constants.CONSULTORIA_REMOVE_CONSULTANT_REQUESTED,
      consultoraRemoveConsultant
    ),
  ]);
}
