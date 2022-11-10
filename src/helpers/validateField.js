export const validateField = (value) => {
  let error;
  if (!value) error = 'Campo requerido.';
  if (value === 0) error = undefined;
  return error;
};
