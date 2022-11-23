export const ansoffSteps = [
  {
    label: 'Clasificación',
  },
  {
    label: 'Penetración',
  },
  {
    label: 'Desarrollo de Producto',
  },
  {
    label: 'Diversificación',
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
  PENETRACION: 'Penetración',
  DIVERSIFICAICON: 'Diversificación',
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
  { label: 'Bastante Exitoso', value: 'Muy Exitoso' },
  { label: 'Poco Exitoso', value: 'Poco exitoso' },
  { label: 'Indefinido', value: 'Indefinido' },
];

export const getExitoProducto = (value) =>
  Object.values(exitoProductoList)?.find((exito) => exito.value === value) || {
    label: '',
    value: '',
  };

export const EstrategiaTextos = {
  [Estrategia.PENETRACION]: {
    definicion:
      'Estos productos ya existen y están en los mercados que conozco. Es importante tener siempre un buen porcentaje de los mismos para asegurar ingresos y tener control de los riesgos.',
    reflexion:
      'Reflexión: ¿Tengo un buen nivel de penetracion de producto que me permite estabilizar mi riesgo?',
  },
  [Estrategia.DIVERSIFICAICON]: {
    definicion:
      'La diversificación es importante para reducir el riesgo de dependencia de un mercado o producto en particular. Es importante, de todas maneras,  no perder foco de lo que ya funciona.',
    reflexion:
      'Reflexión: ¿Qué está demostrando ser prometedor y que debería ser abandonado?',
  },
  [Estrategia.DESARROLLO_DE_PRODUCTO]: {
    definicion:
      'Usted esta intentando innovar lanzando nuevos productos en mercados conocidos. Esta practica es esencial y siempre deben mantenerse para evitar la entrada de posibles competidores.',
    reflexion:
      'Reflexión:  ¿Que otros productos puedo lanzar conociendo a mis clientes actuales?',
  },
  [Estrategia.DESARROLLO_DE_MERCADO]: {
    definicion:
      'Cuenta con grandes productos y el éxito de los mismos. Ahora es el momento de lanzarse en nuevos mercados para aprovechar el momento generado. Genere rendimiento con lo ya desarrollado.',
    reflexion:
      'Reflexión: ¿Qué productos son lo suficientemente flexibles para satisfacer las diferentes demandas del mercado?',
  },
};

export const consejosPorEstrategia = (estrategia, porcentaje) => {
  switch (estrategia) {
    case Estrategia.PENETRACION:
      switch (true) {
        case porcentaje === 0:
          return 'No tiene productos clasificados como penetración. Mire su cartera de productos e imagine que otras demandas de su mercado puede satisfacer.';
        case porcentaje > 30:
          return 'Usted tiene un porcentaje bastante alto de productos o servicios en el mismo mercado. Este atento a posibles innovaciones disruptivas que puedan modificar el mercado actual.';
        case porcentaje > 25 && porcentaje < 30:
          return 'Usted tiene un numero sano de productos clasificados como penetrativos. Esto significa que el riesgo es el correcto para buscar nuevos productos y nuevos mercados. Intente mantener este equilibrio.';
        default:
          return 'Usted tiene un numero bajo de productos penetrativos. El riesgo puede ser bajo, pero las oportunidades perdidas en su mercado actual, en el conoce a sus clientes, podrían ser muy altas.';
      }
    case Estrategia.DIVERSIFICAICON:
      switch (true) {
        case porcentaje === 0:
          return 'Usted no tiene productos o servicios clasificados como diversificación. Esto implica que usted no esta intentando expandirse a nuevos mercados o lanzando nuevos productos. Su empresa no será exitosa con solo escalamiento vertical.';
        case porcentaje > 30:
          return 'Usted tiene un gran porcentaje de productos clasificados como diversificación. Se esta arriesgando demasiado a nuevos mercados o nuevos productos. Busque equilibrar sus prioridades, o asuma el riesgo conscientemente.';
        case porcentaje > 25 && porcentaje < 30:
          return 'Usted tiene un numero promedio de productos clasificados como diversificación. Esta es la posición en la que quiere estar, el riesgo esta reducido pero las oportunidades de expansion son altas.';
        default:
          return 'Tiene un numero relativamente pequeño de productos clasificados como diversificación. Aunque sea una zona de riesgo, busque aumentar estas posibilidades para no perder oportunidades.';
      }
    case Estrategia.DESARROLLO_DE_MERCADO:
      switch (true) {
        case porcentaje === 0:
          return 'Usted no tiene productos o servicios clasificados como desarrollo del mercado. Esto implica que se esta perdiendo la oportunidad de llevar sus productos o servicios ya establecidos a nuevos mercados. Utilice lo que ya tiene!';
        case porcentaje > 30:
          return 'Tiene un gran numero de productos o servicios clasificados como desarrollo del mercado. Tenga cuidado de no poner toda su energía y riesgo en expandirse a nuevos mercados. Recuerde que mantener clientes actuales es mucho mas barato y seguro que crear nuevos. Busque un equilibrio.';
        case porcentaje > 25 && porcentaje < 30:
          return 'Usted tiene un numero promedio de productos clasificados como desarrollo de mercado. Esto es extremadamente saludable ya que se trata de un equilibrio interesante entre innovación y mantener mercados funcionales. Siga asi.';
        default:
          return 'Tiene un numero pequeño de productos clasificados como desarrollo de mercado. El riesgo es bajo, pero las oportunidades también. Busque utilizar productos ya testeados y exitosos en nuevos mercados.';
      }
    case Estrategia.DESARROLLO_DE_PRODUCTO:
      switch (true) {
        case porcentaje === 0:
          return 'Usted no tiene productos o servicios clasificados como de desarrollo de productos. Esto es extremadamente peligroso, ya que indica que su nivel de innovación es nulo. El producto final de esta situacion es perder terreno ante nuevos participantes o competencia innovativa.';
        case porcentaje > 30:
          return 'Usted tiene un gran porcentaje de sus productos o servicios clasificados como desarrollo de producto. Tenga cuidado con sus inversiones, no todas llevaran a rendimiento a corto plazo, algunas tampoco lo harán al largo. Recuerde que invertir es intrinsicamente riesgoso y dirija sus esfuerzos y dineros en los mejores productos.';
        case porcentaje > 25 && porcentaje < 30:
          return 'Usted tiene un numero promedio de productos clasificados como desarrollo de productos.  Se encuentra en un lugar saludable. De tener éxito, no se deje llevar y no siga invirtiendo en todo producto que se le ocurra. Sea cauteloso ante nuevos riesgos.';
        default:
          return 'Tiene un numero relativamente pequeño de productos clasificados como de desarrollo de producto. Por un lado es cierto que el riesgo es bajo, pero esto podría indicar una falta de innovacion en su empresa. Estudie si esto es su realidad y de ser asi invierta en la misma.';
      }
    default:
      return '';
  }
};
