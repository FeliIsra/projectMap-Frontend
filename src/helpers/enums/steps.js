import { onCreate as onCreateFoda } from 'redux/actions/foda.actions';
import { onCreate as onCreatePestel } from 'redux/actions/pestel.actions';
import { onCreate as onCreateMckinsey } from 'redux/actions/mckinsey.actions';
import { onCreate as onCreateAnsoff } from 'redux/actions/ansoff.actions';
import { onCreate as onCreatePorter } from 'redux/actions/porter.actions';
import { onCreateTool as onCreateOkr } from 'redux/actions/okr.actions';
import { onCreate as onCreateBalanced } from 'redux/actions/balanceScorecard.actions';
import { onCreate as onCreateQuestionnarie } from 'redux/actions/questionnarie.actions';

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
      { titulo: 'Agregar Analisis de Porter', key: 1, action: onCreatePorter },
      { titulo: 'Agregar Analisis de Pestel', key: 2, action: onCreatePestel },
    ],
  },
  {
    value: StepValue.PLAN_FINANCIERO_MEDICION_RESULTADOS,
    title: 'Planeamiento Financiero y Medición de Resultados',
    menuItems: [
      { titulo: 'Agregar Balaced Scorecard', action: onCreateBalanced },
      { titulo: 'Agregar OKRs', action: onCreateOkr },
    ],
  },
  {
    value: StepValue.EVALUACION_SITUACION_INTERNA,
    title: 'Evaluación de la Situación Interna',
    menuItems: [{ titulo: 'Agregar Analisis FODA', action: onCreateFoda }],
  },
  {
    value: StepValue.MEJORA_CONTINUA,
    title: 'Mejora Continua',
    menuItems: [
      { titulo: 'Agregar Analisis de Indicadores y Metas', action: () => {} },
    ],
  },
  {
    value: StepValue.DEFINICION_PLANES_TRANSFORMACION,
    title: 'Definición de los Planes de Transformación',
    menuItems: [
      { titulo: 'Planes de transformacion', action: onCreateQuestionnarie },
    ],
  },
  {
    value: StepValue.DEFINICION_LINIAMIENTOS_ESTRATEGICOS,
    title: 'Definición de Lineamientos Estratégicos',
    menuItems: [{ titulo: 'Agregar Matiz ANSOFF', action: onCreateAnsoff }],
  },
  {
    value: StepValue.FORMULACION_ESTRATEGIA_COMPETITIVA,
    title: 'Formulación de la Estrategia Competitiva',
    menuItems: [
      { titulo: 'Agregar Matriz McKinsey', action: onCreateMckinsey },
    ],
  },
];

export const getMenuItems = (stepValue) =>
  Object.values(STEPS).find((step) => step.value === stepValue)?.menuItems ||
  [];
