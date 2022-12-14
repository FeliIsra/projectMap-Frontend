import { post, get, remove, put } from 'services/api';

export const save = (formData) => post('projects', formData);

export const getAll = () => get('projects');

export const deleteProject = (id) => remove(`projects/${id}`);

export const getOne = (id) => get(`projects/${id}`);

export const getFodas = (id) => get(`projects/${id}/foda`);

export const getPorters = (id) => get(`projects/${id}/porter`);

export const getPestels = (id) => get(`projects/${id}/pestel`);

export const getAnsoffs = (id) => get(`projects/${id}/ansoff`);

export const getMckinsey = (id) => get(`projects/${id}/mckinsey`);

export const getOkrs = (id) => get(`projects/${id}/okr-projects`);

export const getBalancedScorecard = (id) =>
  get(`projects/${id}/balanced-scorecards`);

export const getQuestionnaires = (id) => get(`projects/${id}/questionnaires`);

export const getShared = () => get('projects/shared');

export const getSharedUsers = (id) => get(`projects/${id}/shared`);

export const shareUser = (id, formData) =>
  post(`projects/${id}/share/email`, formData);

export const unShareUsers = (id, formData) =>
  put(`projects/${id}/share/email/stop`, formData);
