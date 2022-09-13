import * as constants from 'redux/contansts/porter.constants';

export const onCreate = (formData) => ({
  type: constants.PORTER_CREATE_REQUESTED,
  formData,
});

export const onDelete = (id, formData) => ({
  type: constants.PORTER_CREATE_REQUESTED,
  formData,
  id,
});

export const onGetOne = (id) => ({
  type: constants.PORTER_GET_REQUESTED,
  id,
});

export const onInsertQuestion = (id, formData) => ({
  type: constants.PORTER_INSERT_QUESTION_REQUESTED,
  id,
  formData,
});

export const onDeleteQuestion = (idPorter, idQuestion) => ({
  type: constants.PORTER_DELETE_QUESTION_REQUESTED,
  idPorter,
  idQuestion,
});

export const onEditQuestion = (idPorter, idQuestion, formData) => ({
  type: constants.PORTER_EDIT_QUESTION_REQUESTED,
  idPorter,
  idQuestion,
  formData,
});

export const onGetOptions = () => ({
  type: constants.PORTER_GET_OPTIONS_REQUESTED,
});

export const onGetQuestions = () => ({
  type: constants.PORTER_GET_QUESTIONS_REQUESTED,
});

export const onGetConsejos = (id) => ({
  type: constants.PORTER_GET_CONSEJOS_REQUESTED,
  id,
});
