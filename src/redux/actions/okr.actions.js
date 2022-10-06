import * as constants from 'redux/contansts/okr.constants';

export const onCreateTool = (formData) => ({
  type: constants.CREATE_OKR_TOOL_REQUESTED,
  formData,
});

export const onGetOneTool = (id) => ({
  type: constants.GET_OKR_TOOL_REQUESTED,
  id,
});

export const onDeleteTool = (id) => ({
  type: constants.DELETE_OKR_TOOL_REQUEST,
  id,
});

export const onAddOkr = (id, formData) => ({
  type: constants.CREATE_OKR_REQUESTED,
  id,
  formData,
});

export const onAddKeyResult = (id, okrId, formData) => ({
  type: constants.ADD_OKR_KEY_RESULT_REQUESTED,
  id,
  okrId,
  formData,
});
