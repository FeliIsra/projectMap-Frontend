import { get, post, put, remove } from './api';

export const create = (formData) => post('questionnaires', formData);

export const questions = () => get('questionnaires/questions');

export const getOne = (id) => get(`questionnaires/${id}`);

export const insert = (formData, id) =>
  put(`questionnaires/${id}/answers`, formData);

export const deleteQuestionnaire = (id) => remove(`questionnaires/${id}`);
