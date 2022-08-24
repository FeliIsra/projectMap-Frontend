import * as constants from 'redux/contansts/foda.constants';

export const onCreate = (formData) => ({
  type: constants.CREATE_FODA_REQUESTED,
  formData,
});

export const onGetOne = (id) => ({
  type: constants.GET_FODA_REQUESTED,
  id,
});

export const onDelete = (id, formData) => ({
  type: constants.DELETE_FODA_REQUEST,
  formData,
  id,
});

export const onInsertFactor = (id, formData) => ({
  type: constants.INSERT_FACTOR_REQUESTED,
  formData,
  id,
});

export const onUpdateFactor = (idFoda, idFactor, formData) => ({
  type: constants.UPDATE_FACTOR_REQUESTED,
  formData,
  idFoda,
  idFactor,
});

export const onDeleteFactor = (idFoda, idFactor) => ({
  type: constants.DELETE_FACTOR_REQUESTED,
  idFoda,
  idFactor,
});

export const onGetOptions = () => ({
  type: constants.GET_OPTIONS_REQUESTED,
});
