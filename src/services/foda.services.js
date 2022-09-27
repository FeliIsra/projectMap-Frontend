import { get, post, put, remove } from 'services/api';

export const create = (formData) => post('foda', formData);

export const deleteFoda = (id, formData) => remove(`foda/${id}`, formData);

export const getOne = (id) => get(`foda/${id}`);

export const getOptions = () => get(`foda/options`);

export const getSeeds = () => get(`foda/preSeeds`);

export const insertFactor = (id, formData) =>
  post(`foda/${id}/factor`, formData);

export const deleteFactor = (idFoda, idFactor) =>
  remove(`foda/${idFoda}/factor/${idFactor}`);

export const updateFactor = (idFoda, idFactor, formData) => {
  return put(`foda/${idFoda}/factor/${idFactor}`, formData);
};
