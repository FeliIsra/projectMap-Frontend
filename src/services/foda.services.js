import { get, post, put, remove } from 'services/api';

export const create = (formData) => post('foda', formData);

export const deleteFoda = (id, formData) => remove(`foda/${id}`, formData);

export const getOne = (id) => get(`foda/${id}`);

export const getOptions = () => get(`foda/options`);

export const insertFactor = (id, formData) =>
  post(`foda/${id}/factor`, formData);

export const deleteFactor = (idFoda, idFactor, formData) =>
  remove(`foda/${idFoda}/factor/${idFactor}`, formData);

export const updateFactor = (idFoda, idFactor, formData) =>
  put(`foda/${idFoda}/factor/${idFactor}`, formData);
