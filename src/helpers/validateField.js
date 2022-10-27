export const validateField = (value) => {
  console.log({ value });
  let error;
  if (!value) error = 'Field required.';
  if (value === 0) error = undefined;
  return error;
};
