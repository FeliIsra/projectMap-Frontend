import * as constants from 'redux/contansts/mckinsey.constants';

export const onCreate = (formData) => ({
  type: constants.CREATE_MCKINSEY_REQUESTED,
  formData,
});

export const onGetOne = (id) => ({
  type: constants.GET_MCKINSEY_REQUESTED,
  id,
});

export const onDelete = (id) => ({
  type: constants.DELETE_MCKINSEY_REQUEST,
  id,
});
