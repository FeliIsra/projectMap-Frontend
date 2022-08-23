import { get, post, put, remove } from 'services/api';

export const create = (formData) => post('foda', formData);

export const remove = (id, formData) => remove(`foda/${id}`, formData);

export const get = (id, formData) => get(`foda/${id}`, formData);

export const insertFactor = (id, formData) => post(`foda/${id}`, formData);

export const deleteFactor = (idFoda, idFactor, formData) =>
  remove(`foda/${idFoda}/factor/${idFactor}`, formData);

export const updateFactor = (idFoda, idFactor, formData) =>
  put(`foda/${idFoda}/factor/${idFactor}`, formData);
