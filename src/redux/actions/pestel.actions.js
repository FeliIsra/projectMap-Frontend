import * as constants from 'redux/contansts/pestel.constants';

export const onCreate = (formData) => ({
  type: constants.CREATE_PESTEL_REQUESTED,
  formData,
});

export const onGetOne = (id) => ({
  type: constants.GET_PESTEL_REQUESTED,
  id,
});

export const onDelete = (id, formData) => ({
  type: constants.DELETE_PESTEL_REQUEST,
  formData,
  id,
});

export const onInsertFactor = (id, formData) => ({
  type: constants.PESTEL_INSERT_FACTOR_REQUESTED,
  formData,
  id,
});

export const onUpdateFactor = (idPestel, idFactor, formData) => ({
  type: constants.PESTEL_UPDATE_FACTOR_REQUESTED,
  formData,
  idPestel,
  idFactor,
});

export const onDeleteFactor = (idPestel, idFactor) => ({
  type: constants.PESTEL_DELETE_FACTOR_REQUESTED,
  idPestel,
  idFactor,
});

export const onGetOptions = () => ({
  type: constants.PESTEL_GET_OPTIONS_REQUESTED,
});

export const onGetSeeds = () => ({
  type: constants.PESTEL_GET_SEEDS_REQUESTED,
});
