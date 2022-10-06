import { get, post } from 'services/api';

export const createTool = (formData) => post('okr-projects', formData);

export const getOneTool = (id) => get(`okr-projects/${id}`);

export const createOkr = (id, formData) =>
  post(`okr-projects/${id}/okrs`, formData);

export const getOneOkr = (id, okrId) => get(`okr-projects/${id}/okrs/${okrId}`);

export const addKeyResult = (id, okrId, formData) =>
  post(`okr-projects/${id}/okrs/${okrId}`, formData);
