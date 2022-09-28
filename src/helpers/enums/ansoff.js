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

export const consejosPorEstrategia = (estrategia, porcentaje) => {
  switch (estrategia) {
    case Estrategia.PENETRACION:
      switch (true) {
        case porcentaje === 0:
          return 'No es necesario que los productos clasificados como Penetración mirar estudiar su cartera de productos e imaginar lo que otras demandas de otros mercados que podrían satisfacer!';
        case porcentaje > 30:
          return '¿Tiene un buen porcentaje de los productos o servicios clasificados como de penetración que significa que su compañía está operando en el mercado existente y productos existentes. Si bien esto es muy bueno, yo estaba fuera de las innovaciones disruptivas!';
        case porcentaje > 25 && porcentaje < 30:
          return 'Usted tiene un número promedio de productos clasificados como penetración, tratar de invertir más en similares mientras se expande inversiones en otros cuadrantes que pueden suponer ventajas sorprendentes!';
        default:
          return '¿Tiene un número relativamente pequeño de productos clasificados como penetración. Esto significa que su cartera tiene riesgo suficiente para estar siempre en busca de nuevos productos y nuevos mercados, tratar de equilibrar las cosas.';
      }
    case Estrategia.DIVERSIFICAICON:
      switch (true) {
        case porcentaje === 0:
          return 'Usted no tiene productos o servicios clasificados como diversificación. ¿Qué quiere decir que usted no está tratando de entrar en nuevos mercados o el lanzamiento de nuevos productos!';
        case porcentaje > 30:
          return '¿Tiene un gran porcentaje de los productos o servicios clasificados como diversificación. Esto significa que están arriesgando mucho hacia los mercados desconocidos y el lanzamiento de nuevos productos!';
        case porcentaje > 25 && porcentaje < 30:
          return 'Usted tiene un número promedio de productos clasificados como diversificación. Esto es interesante, porque significa que usted está tratando de reducir el riesgo de su negocio con otros productos y mercados!';
        default:
          return '¿Tiene un número relativamente pequeño de productos clasificados como diversificación. Se trata de una zona de riesgo, por lo que es importante estar siempre con algunos productos en ella, pero no levantó imprudentemente!';
      }
    case Estrategia.DESARROLLO_DE_MERCADO:
      switch (true) {
        case porcentaje === 0:
          return 'Usted no tiene productos o servicios clasificados como desarrollo del mercado. Esto significa que es probable que esté perdiendo la oportunidad de llevar los productos y servicios ya establecidos para otros mercados y tienen un excelente rendimiento!';
        case porcentaje > 30:
          return 'Tiene un gran número de productos o servicios afines, clasificadas como desarrollo del mercado. Si bien es interesante para estar siempre explorando nuevos mercados, es necesario tener cuidado de no poner toda su energía en ello y abandonar otros mercados ya establecidos!';
        case porcentaje > 25 && porcentaje < 30:
          return 'Usted tiene un número promedio de productos clasificados como Desarrollo de Mercado Esto es muy saludable, ya que indica que se está innovando, pero sin perder de vista lo que ya funciona. Trate de mantener este equilibrio!';
        default:
          return '¿Tiene un número relativamente pequeño de productos clasificados como Desarrollo de Mercado Esto significa que usted podría ser más innovador lanzamiento de nuevos productos a los mercados que ya sirve!';
      }
    case Estrategia.DESARROLLO_DE_PRODUCTO:
      switch (true) {
        case porcentaje === 0:
          return 'Usted no tiene productos o servicios clasificados como de desarrollo de productos. Esto es peligroso, ya que indica que su nivel de innovación es prácticamente nula. Si esto sigue así, el resultado final será perdiendo terreno frente a los nuevos participantes!';
        case porcentaje > 30:
          return '¿Tiene un gran porcentaje de los productos o servicios clasificados como de desarrollo de productos. Cuidado con las malas inversiones, porque no pueden llevar una gran cantidad de rendimiento a corto plazo. Obtener para estudiar el mercado de cada uno de ellos y dirigir sus acciones!';
        case porcentaje > 25 && porcentaje < 30:
          return 'Usted tiene un número promedio de productos clasificados como desarrollo de productos, la atención a aumentar la inversión en esta área. Aunque algunos riesgos en la innovación, no se deje llevar a la excitación y aumentar el riesgo de su negocio imprudentemente!';
        default:
          return '¿Tiene un número relativamente pequeño de productos clasificados como de desarrollo de productos. Por un lado, esto es bueno porque no se está ejecutando como muchos riesgos para sus inversiones, pero tal vez puede indicar una falta de innovación en su empresa. Estudiar el mercado para evitar la pérdida de posibles liberaciones!';
      }
    default:
      return '';
  }
};
