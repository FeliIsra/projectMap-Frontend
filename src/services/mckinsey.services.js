import { get, post, remove } from 'services/api';

export const create = (formData) => post('mckinsey', formData);

export const deletePestel = (id, formData) =>
  remove(`mckinsey/${id}`, formData);

export const getOne = (id) => get(`mckinsey/${id}`);

export const getOptions = () => get(`mckinsey/options`);

export const addUnidad = (id, formData) =>
  post(`mckinsey/${id}/unidades`, formData);
