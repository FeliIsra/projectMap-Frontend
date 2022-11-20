/* eslint-disable no-useless-escape */
export const validateField = (value) => {
  let error;
  if (!value) error = 'Campo requerido.';
  if (value === 0) error = undefined;
  return error;
};

export const validateFielWithNoZero = (value) => {
  let error;
  if (!value) error = 'Campo requerido.';
  return error;
};

export const validateCalendlyLink = (value) => {
  const regex = new RegExp('https://calendly.com/[a-zA-Z0-9]*/[0-9]{2}min');
  return regex.test(value)
    ? undefined
    : 'Link invalido. Formato valido: https://calendly.com/{nombreUsuario}/{tipoReunion}';
};
