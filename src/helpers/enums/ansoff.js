export const ansoffSteps = [
  {
    label: 'Clasificacion',
  },
  {
    label: 'Penetracion',
  },
  {
    label: 'Desarrollo de Producto',
  },
  {
    label: 'Diversificacion',
  },
  {
    label: 'Desarrollo de Mercado',
  },
];

export const exitoProductoList = [
  { label: 'Bastante Sucedido', value: 'Alto' },
  { label: 'Poco Sucedido', value: 'Bajo' },
  { label: 'Indefinido', value: 'Indefinido' },
];

export const getExitoProducto = (value) =>
  Object.values(exitoProductoList).find((exito) => exito.value === value) || {
    label: '',
    value: '',
  };
