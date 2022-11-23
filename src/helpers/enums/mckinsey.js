import { COLORS } from 'helpers/enums/colors';

export const Cuadrantes = {
  DOBLE_O_NADA: 'Doble o nada',
  DESARROLLAR: 'Desarrollar',
  REFORZAR: 'Reforzar',
  REPLANTEAR: 'Replantear',
  REORGANIZAR: 'Reorganizar',
  MANTENER: 'Mantener',
  ABANDONAR: 'Abandonar',
  SALIR_CON_ORDEN: 'Salir con orden',
  COSECHAR: 'Cosechar',
};

export const CuadrantesColor = {
  DOBLE_O_NADA: COLORS.YellowGrandis,
  DESARROLLAR: COLORS.GreenSulu,
  REFORZAR: COLORS.GreenEmerald,
  REPLANTEAR: COLORS.RedBurntSienna,
  REORGANIZAR: COLORS.YellowGrandis,
  MANTENER: COLORS.GreenSulu,
  ABANDONAR: COLORS.VividTangerine,
  SALIR_CON_ORDEN: COLORS.RedBurntSienna,
  COSECHAR: COLORS.YellowGrandis,
};

export const SignificadoCuadrante = {
  DOBLE_O_NADA:
    'Existe un riesgo moderado para el éxito de esta unidad de negocio. Solo se debe invertir si queda después de inversiones seguras de capital y el crecimiento.',
  DESARROLLAR:
    'Algunas de las inversiones deben hacerse en esta unidad de negocio, dando prioridad a mejorar / corregir las fallas que llevaron a la puntuación y tomar la puntuación más alta.',
  REFORZAR:
    'La mayor parte de la inversión y hay que prestar atención a esta unidad de negocio crecer y generar la máxima rentabilidad posible para su empresa.',
  REPLANTEAR:
    'Si la unidad de negocio a generar dinero, vale la pena invertir lo menos posible para que continúe operando. Si no es así, reducir las inversiones y planificar una salida gradual.',
  REORGANIZAR:
    'Existe un riesgo moderado para el éxito de esta unidad de negocio. Solo se debe invertir si queda después de inversiones seguras de capital y el crecimiento.',
  MANTENER:
    'Algunas de las inversiones deben hacerse en esta unidad de negocio, dando prioridad a mejorar / corregir las fallas que llevaron a la puntuación y tomar la puntuación más alta.',
  ABANDONAR:
    'Ni unidad de negocio ni el mercado tienen perspectivas de éxito. Vale la pena detenerse a invertir en esta unidad y minimizar las pérdidas.',
  SALIR_CON_ORDEN:
    'Si la unidad de negocio a generar dinero, vale la pena invertir lo menos posible para que continúe operando. Si no es así, reducir las inversiones y planificar una salida gradual.',
  COSECHAR:
    'Existe un riesgo moderado para el éxito de esta unidad de negocio. Solo se debe invertir si queda después de inversiones seguras de capital y el crecimiento.',
};

export const CuadrantesOrder = {
  DOBLE_O_NADA: 4,
  DESARROLLAR: 2,
  REFORZAR: 1,
  REPLANTEAR: 7,
  REORGANIZAR: 5,
  MANTENER: 3,
  ABANDONAR: 9,
  SALIR_CON_ORDEN: 8,
  COSECHAR: 6,
};
