import { post, get } from 'services/api';

export const save = (formData) => post('projects', formData);

export const getAll = () => get('projects');

export const getOne = (id) => get(`projects/${id}`);

export const getFodas = (id) => get(`projects/${id}/foda`);

export const getPorters = (id) => get(`projects/${id}/porter`);

export const getPestels = (id) => get(`projects/${id}/pestel`);

export const getAnsoffs = (id) => get(`projects/${id}/ansoff`);

export const getMckinsey = (id) => get(`projects/${id}/mckinsey`);

export const getOkrs = (id) => get(`projects/${id}/okr`);

export const getBalancedScorecard = (id) =>
  get(`projects/${id}/balanced-scorecard`);
