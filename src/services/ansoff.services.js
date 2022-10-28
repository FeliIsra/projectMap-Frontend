import { get, post, remove, put } from 'services/api';

export const create = (formData) => post('ansoff', formData);

export const deleteAnsoff = (id) => remove(`ansoff/${id}`);

export const getOne = (id) => get(`ansoff/${id}`);

export const getOptions = () => get(`ansoff/options`);

export const addProduct = (id, formData) =>
  post(`ansoff/${id}/products`, formData);

export const editProduct = (id, productId, formData) =>
  put(`ansoff/${id}/products/${productId}`, formData);

export const deleteProduct = (id, productId) =>
  remove(`ansoff/${id}/products/${productId}`);
