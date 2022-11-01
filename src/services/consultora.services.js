import { get, post, put, remove } from 'services/api';

export const create = (formData) => post('consultoras', formData);

export const deleteConsultora = (id) => remove(`consultoras/${id}`);

export const getOne = (id) => get(`consultoras/${id}`);

export const update = (id, formData) => put(`consultoras/${id}`, formData);

export const addConsultant = (consultoraId, formData) =>
  put(`consultoras/${consultoraId}/consultants/add`, formData);

export const deleteConsultant = (consultoraId, formData) =>
  put(`consultoras/${consultoraId}/consultants/remove`, formData);

export const assignProjects = (consultoraId, formData) =>
  put(`consultoras/${consultoraId}/consultants/projects/add`, formData);

export const unAssignProjects = (consultoraId, formData) =>
  put(`consultoras/${consultoraId}/consultants/projects/remove`, formData);

export const addProject = (consultoraId, projectId) =>
  post(`consultoras/${consultoraId}/projects/${projectId}`);

export const deleteProject = (consultoraId, projectId) =>
  remove(`consultoras/${consultoraId}/projects/${projectId}`);
