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
