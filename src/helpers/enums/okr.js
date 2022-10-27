export const quartersOptions = [
  {
    value: 1,
    label: 'Enero-Marzo',
  },
  {
    value: 2,
    label: 'Abril-Junio',
  },
  {
    value: 3,
    label: 'Julio-Septiembre',
  },
  {
    value: 4,
    label: 'Octubre-Diciembre',
  },
];

export const monthsPerQuarter = {
  1: ['Enero', 'Febrero', 'Marzo'],
  2: ['Abril', 'Mayo', 'Junio'],
  3: ['Julio', 'Agosto', 'Septiembre'],
  4: ['Octubre', 'Noviembre', 'Diciembre'],
};

export const getKeyResultInitialValues = (quarter) => {
  return monthsPerQuarter[quarter]?.map((monthName) => ({
    month: monthName.toLowerCase(),
    value: 0,
  }));
};

export const getKeyResultWitValues = (quarter, values) => {
  return monthsPerQuarter[quarter]?.map((monthName, index) => ({
    month: monthName.toLowerCase(),
    value: values[index].value,
  }));
};
