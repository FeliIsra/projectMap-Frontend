import { onCreate as onCreateFoda } from 'redux/actions/foda.actions';
import { onCreate as onCreatePestel } from 'redux/actions/pestel.actions';

const StepValue = {
  EVALUACION_ENTORNO_EXTERNO: 1,
  EVALUACION_SITUACION_INTERNA: 2,
  DEFINICION_LINIAMIENTOS_ESTRATEGICOS: 3,
  FORMULACION_ESTRATEGIA_COMPETITIVA: 4,
  DEFINICION_PLANES_TRANSFORMACION: 5,
  PLAN_FINANCIERO_MEDICION_RESULTADOS: 6,
  MEJORA_CONTINUA: 7,
};

export const STEPS = [
  {
    value: StepValue.EVALUACION_ENTORNO_EXTERNO,
    title: 'Evaluación del Entorno Externo',
    menuItems: [
      { title: 'Agregar Foda', key: 1, action: onCreateFoda },
      { title: 'Agregar Pestel', key: 2, action: onCreatePestel },
    ],
  },
  {
    value: StepValue.PLAN_FINANCIERO_MEDICION_RESULTADOS,
    title: 'Planeamiento Financiero y Medición de Resultados',
    menuItems: [{ title: 'Agregar Pestel' }],
  },
  {
    value: StepValue.EVALUACION_SITUACION_INTERNA,
    title: 'Evaluación de la Situación Interna',
    menuItems: [{ title: 'Agregar Pestel' }],
  },
  {
    value: StepValue.MEJORA_CONTINUA,
    title: 'Mejora Continua',
    menuItems: [{ title: 'Agregar Pestel' }],
  },
  {
    value: StepValue.DEFINICION_PLANES_TRANSFORMACION,
    title: 'Definición de los Planes de Transformación',
    menuItems: [{ title: 'Agregar Pestel' }],
  },
  {
    value: StepValue.DEFINICION_LINIAMIENTOS_ESTRATEGICOS,
    title: 'Definición de Lineamientos Estratégicos',
    menuItems: [{ title: 'Agregar Pestel' }],
  },
  {
    value: StepValue.EVALUACION_ENTORNO_EXTERNO,
    title: 'Formulación de la Estrategia Competitiva',
    menuItems: [{ title: 'Agregar Pestel' }],
  },
];

export const getMenuItems = (stepValue) =>
  Object.values(STEPS).find((step) => step.value === stepValue)?.menuItems ||
  [];
