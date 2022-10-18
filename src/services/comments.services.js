import { get, post, put, remove } from 'services/api';

export const create = (formData) => post('sticky-notes', formData);

export const getAll = (tool, toolId) =>
  get(`sticky-notes/tools/${tool}/${toolId}`);

export const edit = (id, formData) => put(`sticky-notes/${id}`, formData);

export const deleteComment = (id) => remove(`sticky-notes/${id}`);
