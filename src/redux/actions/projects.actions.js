import * as constants from 'redux/contansts/projects.constants';

export const onCreate = (formData) => ({
  type: constants.PROJECTS_ON_CREATE_REQUESTED,
  formData,
});

export const onGetAll = (id) => ({
  type: constants.PROJECTS_ON_GET_ALL_REQUESTED,
});

export const onGetOne = (id) => ({
  type: constants.PROJECTS_ON_GET_ONE_REQUESTED,
  id,
});

export const onGetFoda = (id) => ({
  type: constants.PROJECTS_ON_GET_FODA_REQUESTED,
  id,
});

export const onGetPestel = (id) => ({
  type: constants.PROJECTS_ON_GET_PESTEL_REQUESTED,
  id,
});

export const onGetPorter = (id) => ({
  type: constants.PROJECTS_ON_GET_PORTER_REQUESTED,
  id,
});

export const onGetOKR = (id) => ({
  type: constants.PROJECTS_ON_GET_OKR_REQUESTED,
  id,
});

export const onGetMckinsey = (id) => ({
  type: constants.PROJECTS_ON_GET_MCKINSEY_REQUESTED,
  id,
});

export const onGetAnsoff = (id) => ({
  type: constants.PROJECTS_ON_GET_ANSOFF_REQUESTED,
  id,
});
