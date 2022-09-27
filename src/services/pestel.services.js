import { get, post, put, remove } from 'services/api';

export const create = (formData) => post('pestel', formData);

export const deletePestel = (id, formData) => remove(`pestel/${id}`, formData);

export const getOne = (id) => get(`pestel/${id}`);

export const getOptions = () => get(`pestel/options`);

export const getSeeds = () => get(`pestel/preSeeds`);

export const insertFactor = (id, formData) =>
  post(`pestel/${id}/factor`, formData);

export const deleteFactor = (idPestel, idFactor) =>
  remove(`pestel/${idPestel}/factor/${idFactor}`);

export const updateFactor = (idPestel, idFactor, formData) => {
  return put(`pestel/${idPestel}/factor/${idFactor}`, formData);
};
