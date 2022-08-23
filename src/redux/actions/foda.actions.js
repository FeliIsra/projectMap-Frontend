import * as constants from 'redux/contansts/foda.constants';

export const onCreate = (formData) => ({
  type: constants.CREATE_FODA,
  formData,
});

export const onGetOne = (id, formData) => ({
  type: constants.GET_FODA_REQUESTED,
  formData,
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

export const onDeleteFactor = (idFoda, idFactor, formData) => ({
  type: constants.DELETE_FACTOR_REQUESTED,
  formData,
  idFoda,
  idFactor,
});
