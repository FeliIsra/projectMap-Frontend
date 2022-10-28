export const validateField = (value) => {
  let error;
  if (!value) error = 'Field required.';
  if (value === 0) error = undefined;
  return error;
};
