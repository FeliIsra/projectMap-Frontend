import * as constants from 'redux/contansts/comments.constants';

export const onGetAll = (tool, toolId) => ({
  type: constants.COMMENT_GET_ALL_REQUESTED,
  tool,
  toolId,
});

export const onCreate = (formData) => ({
  type: constants.COMMENT_CREATE_REQUESTED,
  formData,
});

export const onEdit = (id, formData) => ({
  type: constants.COMMENT_EDIT_REQUESTED,
  formData,
  id,
});

export const onDelete = (id) => ({
  type: constants.COMMENT_DELETE_REQUESTED,
  id,
});
