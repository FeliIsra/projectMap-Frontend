import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as constants from 'redux/contansts/balanceScorecard.constants';
import {
  addCheckpoint,
  addInitiative,
  addObjetive,
  create,
  deleteBalanceScorecard,
  deleteCheckpoint,
  deleteInitiative,
  deleteObjetive,
  getOne,
  getOptions,
  update,
  updateCheckpoint,
  updateInitiative,
  updateObjetive,
} from 'services/balanceScorecards.services';

export function* balanceScorecardCreate(action) {
  try {
    const { formData } = action;
    const { data } = yield call(create, formData);
    yield put({ type: constants.CREATE_BALANCE_SCORECARD_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.CREATE_BALANCE_SCORECARD_FAILED, error });
  }
}

export function* balanceScorecardDelete(action) {
  try {
    const { id } = action;
    const { data } = yield call(deleteBalanceScorecard, id);
    yield put({ type: constants.DELETE_BALANCE_SCORECARD_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.DELETE_BALANCE_SCORECARD_FAILED, error });
  }
}

export function* balanceScorecardGetOne(action) {
  try {
    const { id } = action;
    const { data } = yield call(getOne, id);
    yield put({ type: constants.GET_ONE_BALANCE_SCORECARD_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.GET_ONE_BALANCE_SCORECARD_FAILED, error });
  }
}

export function* balanceScorecardGetOptions() {
  try {
    const { data: options } = yield call(getOptions);
    yield put({
      type: constants.GET_OPTIONS_BALANCE_SCORECARD_SUCCEEDED,
      data: { options },
    });
  } catch (error) {
    yield put({ type: constants.GET_OPTIONS_BALANCE_SCORECARD_FAILED, error });
  }
}

export function* balanceScorecardUpdate(action) {
  try {
    const { id, formData } = action;
    const { data } = yield call(update, id, formData);
    yield put({ type: constants.UPDATE_BALANCE_SCORECARD_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: constants.UPDATE_BALANCE_SCORECARD_FAILED, error });
  }
}

export function* balanceScorecardAddInitiative(action) {
  try {
    const { id, formData } = action;
    const { data } = yield call(addInitiative, id, formData);
    yield put({
      type: constants.ADD_INITIATIVE_BALANCE_SCORECARD_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.ADD_INITIATIVE_BALANCE_SCORECARD_FAILED,
      error,
    });
  }
}

export function* balanceScorecardAddObjective(action) {
  try {
    const { id, formData } = action;
    const { data } = yield call(addObjetive, id, formData);
    yield put({
      type: constants.ADD_OBJETIVE_BALANCE_SCORECARD_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.ADD_OBJETIVE_BALANCE_SCORECARD_FAILED,
      error,
    });
  }
}

export function* balanceScorecardAddCheckpoint(action) {
  try {
    const { id, objetiveId, formData } = action;
    const { data } = yield call(addCheckpoint, id, objetiveId, formData);
    yield put({
      type: constants.ADD_CHECKPOINT_BALANCE_SCORECARD_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.ADD_CHECKPOINT_BALANCE_SCORECARD_FAILED,
      error,
    });
  }
}

export function* balanceScorecardDeleteInitiative(action) {
  try {
    const { id, initiativeId } = action;
    const { data } = yield call(deleteInitiative, id, initiativeId);
    yield put({
      type: constants.DELETE_INITIATIVE_BALANCE_SCORECARD_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.DELETE_INITIATIVE_BALANCE_SCORECARD_FAILED,
      error,
    });
  }
}

export function* balanceScorecardDeleteObjective(action) {
  try {
    const { id, objetiveId } = action;
    const { data } = yield call(deleteObjetive, id, objetiveId);
    yield put({
      type: constants.DELETE_OBJETIVE_BALANCE_SCORECARD_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.DELETE_OBJETIVE_BALANCE_SCORECARD_FAILED,
      error,
    });
  }
}

export function* balanceScorecardDeleteCheckpoint(action) {
  try {
    const { id, objetiveId, checkpointId } = action;
    const { data } = yield call(deleteCheckpoint, id, objetiveId, checkpointId);
    yield put({
      type: constants.DELETE_CHECKPOINT_BALANCE_SCORECARD_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.DELETE_CHECKPOINT_BALANCE_SCORECARD_FAILED,
      error,
    });
  }
}

export function* balanceScorecardUpdateInitiative(action) {
  try {
    const { id, initiativeId, formData } = action;
    const { data } = yield call(updateInitiative, id, initiativeId, formData);
    yield put({
      type: constants.UPDATE_INITIATIVE_BALANCE_SCORECARD_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.UPDATE_INITIATIVE_BALANCE_SCORECARD_FAILED,
      error,
    });
  }
}

export function* balanceScorecardUpdateObjective(action) {
  try {
    const { id, objetiveId, formData } = action;
    const { data } = yield call(updateObjetive, id, objetiveId, formData);
    yield put({
      type: constants.UPDATE_OBJETIVE_BALANCE_SCORECARD_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.UPDATE_OBJETIVE_BALANCE_SCORECARD_FAILED,
      error,
    });
  }
}

export function* balanceScorecardUpdateCheckpoint(action) {
  try {
    const { id, objetiveId, checkpointId, formData } = action;
    const { data } = yield call(
      updateCheckpoint,
      id,
      objetiveId,
      checkpointId,
      formData
    );
    yield put({
      type: constants.UPDATE_CHECKPOINT_BALANCE_SCORECARD_SUCCEEDED,
      data,
    });
  } catch (error) {
    yield put({
      type: constants.UPDATE_CHECKPOINT_BALANCE_SCORECARD_FAILED,
      error,
    });
  }
}

export function* watchBalanceScorecard() {
  yield all([
    takeLatest(
      constants.CREATE_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardCreate
    ),
    takeLatest(
      constants.GET_OPTIONS_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardGetOptions
    ),
    takeLatest(
      constants.GET_ONE_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardGetOne
    ),
    takeLatest(
      constants.ADD_INITIATIVE_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardAddInitiative
    ),
    takeLatest(
      constants.ADD_OBJETIVE_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardAddObjective
    ),
    takeLatest(
      constants.ADD_CHECKPOINT_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardAddCheckpoint
    ),
    takeLatest(
      constants.DELETE_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardDelete
    ),
    takeLatest(
      constants.DELETE_INITIATIVE_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardDeleteInitiative
    ),
    takeLatest(
      constants.DELETE_OBJETIVE_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardDeleteObjective
    ),
    takeLatest(
      constants.DELETE_CHECKPOINT_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardDeleteCheckpoint
    ),
    takeLatest(
      constants.UPDATE_INITIATIVE_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardUpdateInitiative
    ),
    takeLatest(
      constants.UPDATE_OBJETIVE_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardUpdateObjective
    ),
    takeLatest(
      constants.UPDATE_CHECKPOINT_BALANCE_SCORECARD_REQUESTED,
      balanceScorecardUpdateCheckpoint
    ),
  ]);
}
