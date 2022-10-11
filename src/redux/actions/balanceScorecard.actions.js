import * as constants from 'redux/contansts/balanceScorecard.constants';

export const onCreate = (formData) => ({
  type: constants.CREATE_BALANCE_SCORECARD_REQUESTED,
  formData,
});

export const onGetOne = (id) => ({
  type: constants.GET_ONE_BALANCE_SCORECARD_REQUESTED,
  id,
});

export const onUpdate = (id, formData) => ({
  type: constants.UPDATE_BALANCE_SCORECARD_REQUESTED,
  id,
  formData,
});

export const onDelete = (id) => ({
  type: constants.DELETE_BALANCE_SCORECARD_REQUESTED,
  id,
});

export const onGetOptions = () => ({
  type: constants.GET_OPTIONS_BALANCE_SCORECARD_REQUESTED,
});

export const onAddInitiative = (id, formData) => ({
  type: constants.ADD_INITIATIVE_BALANCE_SCORECARD_REQUESTED,
  id,
  formData,
});

export const onAddObjective = (id, formData) => ({
  type: constants.ADD_OBJETIVE_BALANCE_SCORECARD_REQUESTED,
  id,
  formData,
});

export const onAddCheckpoint = (id, objectiveId, formData) => ({
  type: constants.ADD_CHECKPOINT_BALANCE_SCORECARD_REQUESTED,
  id,
  objectiveId,
  formData,
});

export const onDeleteInitiative = (id, initiativeId, formData) => ({
  type: constants.DELETE_INITIATIVE_BALANCE_SCORECARD_REQUESTED,
  id,
  initiativeId,
  formData,
});

export const onDeleteObjective = (id, objectiveId, formData) => ({
  type: constants.DELETE_OBJETIVE_BALANCE_SCORECARD_REQUESTED,
  id,
  objectiveId,
  formData,
});

export const onDeleteCheckpoint = (
  id,
  objectiveId,
  checkpointId,
  formData
) => ({
  type: constants.DELETE_CHECKPOINT_BALANCE_SCORECARD_REQUESTED,
  id,
  objectiveId,
  checkpointId,
  formData,
});

export const onUpdateInitiative = (id, initiativeId, formData) => ({
  type: constants.UPDATE_INITIATIVE_BALANCE_SCORECARD_REQUESTED,
  id,
  initiativeId,
  formData,
});

export const onUpdateObjective = (id, objectiveId, formData) => ({
  type: constants.UPDATE_OBJETIVE_BALANCE_SCORECARD_REQUESTED,
  id,
  objectiveId,
  formData,
});

export const onUpdateCheckpoint = (
  id,
  objectiveId,
  checkpointId,
  formData
) => ({
  type: constants.UPDATE_CHECKPOINT_BALANCE_SCORECARD_REQUESTED,
  id,
  objectiveId,
  checkpointId,
  formData,
});
