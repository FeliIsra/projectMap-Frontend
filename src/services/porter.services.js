import { get, post, put, remove } from 'services/api';

export const create = (formData) => post('porter', formData);
export const insertQuestion = (id, formData) =>
  post(`porter/${id}/preguntas`, formData);

export const editQuestion = (id, idQuestion, formData) =>
  put(`porter/${id}/preguntas/${idQuestion}`, formData);

export const deleteQuestion = (id, idQuestion) =>
  remove(`porter/${id}/preguntas/${idQuestion}`);

export const getOptions = () => get(`porter/options`);
export const getQuestions = () => get(`porter/preguntas`);

export const getConsejos = (id) => get(`porter/${id}/consejos`);
export const getOne = (id) => get(`porter/${id}`);

export const deletePorter = (id, formData) => remove(`porter/${id}`, formData);
