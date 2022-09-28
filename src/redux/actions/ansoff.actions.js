import * as constants from 'redux/contansts/ansoff.constants';

export const onCreate = (formData) => ({
  type: constants.CREATE_ANSOFF_REQUESTED,
  formData,
});

export const onGetOne = (id) => ({
  type: constants.GET_ANSOFF_REQUESTED,
  id,
});

export const onDelete = (id) => ({
  type: constants.DELETE_ANSOFF_REQUEST,
  id,
});

export const onAddProducto = (id, formData) => ({
  type: constants.ADD_PRODUCT_ANSOFF_REQUESTED,
  id,
  formData,
});

export const onGetOptions = () => ({
  type: constants.GET_OPTIONS_ANSOFF_REQUESTED,
});

export const onEditProduct = (id, productId, formData) => ({
  type: constants.EDIT_PRODUCT_ANSOFF_REQUESTED,
  id,
  productId,
  formData,
});
