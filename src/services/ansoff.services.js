import { get, post, remove } from 'services/api';

export const create = (formData) => post('ansoff', formData);

export const deletePestel = (id, formData) => remove(`ansoff/${id}`, formData);

export const getOne = (id) => get(`ansoff/${id}`);

export const getOptions = () => get(`ansoff/options`);

export const addProduct = (id, formData) =>
  post(`ansoff/${id}/products`, formData);
