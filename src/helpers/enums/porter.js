export const Fuerza = {
  RIVALIDAD_ENTRE_COMPETIDORES: 'Rivalidad entre competidores',
  PODER_DE_NEGOCIACION_CON_LOS_CLIENTES:
    'Poder de negociacion con los clientes',
  PODER_DE_NEGOCIACION_CON_LOS_PROVEEDORES:
    'Poder de negociacion con los proveedores',
  AMENAZA_DE_NUEVOS_COMPETIDORES: 'Amenaza de nuevos competidores',
  AMENAZA_DE_PRODUCTOS_SUBSTITUTOS: 'Amenaza de productos sustitutos',
};

export const Fuerzas = [
  {
    value: Fuerza.RIVALIDAD_ENTRE_COMPETIDORES,
    label: 'Rivalidad entre competidores',
  },
  {
    value: Fuerza.PODER_DE_NEGOCIACION_CON_LOS_CLIENTES,
    label: 'Poder de negociación con los clientes',
  },
  {
    value: Fuerza.PODER_DE_NEGOCIACION_CON_LOS_PROVEEDORES,
    label: 'Poder de negociación con los proveedores',
  },
  {
    value: Fuerza.AMENAZA_DE_NUEVOS_COMPETIDORES,
    label: 'Amenaza de nuevos competidores',
  },
  {
    value: Fuerza.AMENAZA_DE_PRODUCTOS_SUBSTITUTOS,
    label: 'Amenaza de productos sustitutos',
  },
];

export const getLabel = (value) =>
  Fuerzas.find((fuerza) => fuerza.value === value).label;
