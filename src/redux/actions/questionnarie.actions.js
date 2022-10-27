import * as constants from 'redux/contansts/questionnarie.constants';

export const onCreate = (formData) => ({
  type: constants.QUESTIONNARIE_ON_CREATE_REQUESTED,
  formData,
});

export const onGetQuestions = () => ({
  type: constants.QUESTIONNARIE_ON_GET_QUESTIONS_REQUESTED,
});

export const onGetOne = (id) => ({
  type: constants.QUESTIONNARIE_ON_GET_ONE_REQUESTED,
  id,
});

export const onInsert = (formData, id) => ({
  type: constants.QUESTIONNARIE_ON_INSERT_REQUESTED,
  formData,
  id,
});
