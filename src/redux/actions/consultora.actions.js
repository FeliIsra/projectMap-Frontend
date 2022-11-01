import * as constants from 'redux/contansts/consultora.constants';

export const onCreate = (formData) => ({
  type: constants.CONSULTORIA_CREATE_REQUESTED,
  formData,
});

export const onDelete = (id) => ({
  type: constants.CONSULTORIA_DELETE_REQUESTED,
  id,
});

export const onGetOne = (id) => ({
  type: constants.CONSULTORIA_GET_ONE_REQUESTED,
  id,
});

export const onUpdate = (id, formData) => ({
  type: constants.CONSULTORIA_UPDATE_REQUESTED,
  id,
  formData,
});

export const onAssign = (consultoraId, formData) => ({
  type: constants.CONSULTORIA_ASSIGN_REQUESTED,
  consultoraId,
  formData,
});

export const onUnAssign = (consultoraId, formData) => ({
  type: constants.CONSULTORIA_UNASSIGN_REQUESTED,
  consultoraId,
  formData,
});

export const onAddConsultant = (consultoraId, formData) => ({
  type: constants.CONSULTORIA_ADD_CONSULTANT_REQUESTED,
  consultoraId,
  formData,
});

export const onRemoveConsultatn = (consultoraId, formData) => ({
  type: constants.CONSULTORIA_REMOVE_CONSULTANT_REQUESTED,
  consultoraId,
  formData,
});

export const onAddProject = (consultoraId, projectId) => ({
  type: constants.CONSULTORIA_ADD_PROJECT_REQUESTED,
  consultoraId,
  projectId,
});

export const onRemoveProject = (consultoraId, projectId) => ({
  type: constants.CONSULTORIA_REMOVE_PROJECT_REQUESTED,
  consultoraId,
  projectId,
});
