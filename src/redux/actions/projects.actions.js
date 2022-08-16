import * as constants from 'redux/contansts/projects.constants';

export const onCreate = (formData) => ({
  type: constants.PROJECTS_ON_CREATE_REQUESTED,
  formData,
});
