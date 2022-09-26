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

export const SituacionDelMercado = {
  ACTUAL: 'Mercado Existe',
  NUEVO: 'Nuevo Mercado',
};

export const SituacionDelProducto = {
  ACTUAL: 'Existe Producto',
  NUEVO: 'Nuevo Producto',
};

export const Estrategia = {
  PENETRACION: 'Penetracion',
  DIVERSIFICAICON: 'Diversificacion',
  DESARROLLO_DE_PRODUCTO: 'Desarrollo de Producto',
  DESARROLLO_DE_MERCADO: 'Desarrollo de Mercado',
};

export const EstrategiaClasificacion = {
  [Estrategia.PENETRACION]: {
    situacionDelMercado: SituacionDelMercado.ACTUAL,
    situacionDelProducto: SituacionDelProducto.ACTUAL,
  },
  [Estrategia.DIVERSIFICAICON]: {
    situacionDelMercado: SituacionDelMercado.ACTUAL,
    situacionDelProducto: SituacionDelProducto.NUEVO,
  },
  [Estrategia.DESARROLLO_DE_PRODUCTO]: {
    situacionDelMercado: SituacionDelMercado.NUEVO,
    situacionDelProducto: SituacionDelProducto.ACTUAL,
  },
  [Estrategia.DESARROLLO_DE_MERCADO]: {
    situacionDelMercado: SituacionDelMercado.NUEVO,
    situacionDelProducto: SituacionDelProducto.NUEVO,
  },
};

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

export const EstrategiaTextos = {
  [Estrategia.PENETRACION]: {
    definicion:
      'Estos productos ya existen y están en los mercados que ya sirve. Es importante tener siempre un buen porcentaje de este tipo para asegurar los ingresos y el control de riesgos.',
    reflexion:
      'Reflexión: Tengo un buen nivel de penetración del producto para estabilizar mi riesgo?',
  },
  [Estrategia.DIVERSIFICAICON]: {
    definicion:
      'La diversificación es importante para usted para reducir el riesgo de dependencia de un mercado o producto en particular. Sin embargo, debe hacerse con precaución para no perder el foco en lo que ya funciona.',
    reflexion:
      'Reflexión: ¿Qué está demostrando ser prometedores y lo que debería ser abandonado?',
  },
  [Estrategia.DESARROLLO_DE_PRODUCTO]: {
    definicion:
      'Usted está tratando de innovar con el lanzamiento de nuevos productos que ya se conoce y se sabe mercados. Esto es esencial y siempre debe mantenerse a un nivel controlado para evitar la entrada de los competidores!',
    reflexion:
      'Reflexión: ¿Qué otros productos que puedo lanzar a conocer a mis clientes actuales?',
  },
  [Estrategia.DESARROLLO_DE_MERCADO]: {
    definicion:
      'Cuenta con increíbles productos y el éxito. Ahora es el momento de conseguir lanzar en nuevos mercados para lograr incluso tener un mayor rendimiento con lo que ya han desarrollado!',
    reflexion:
      'Reflexión: ¿Qué productos son lo suficientemente flexibles para satisfacer las diferentes demandas del mercado?',
  },
};
