import { onCreate as onCreateFoda } from 'redux/actions/foda.actions';
import { onCreate as onCreatePestel } from 'redux/actions/pestel.actions';
import { onCreate as onCreateMckinsey } from 'redux/actions/mckinsey.actions';
import { onCreate as onCreateAnsoff } from 'redux/actions/ansoff.actions';
import { onCreate as onCreatePorter } from 'redux/actions/porter.actions';
import { onCreateTool as onCreateOkr } from 'redux/actions/okr.actions';
import { onCreate as onCreateBalanced } from 'redux/actions/balanceScorecard.actions';
import { onCreate as onCreateQuestionnarie } from 'redux/actions/questionnarie.actions';

export const StepValue = {
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
    menuItems: [
      {
        titulo: 'Agregar Analisis FODA',
        action: onCreateFoda,
      },
    ],
  },
  {
    value: StepValue.MEJORA_CONTINUA,
    title: 'Mejora Continua',
    menuItems: [{ titulo: '', action: () => {} }],
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
  Object.values(STEPS)?.find((step) => step.value === stepValue)?.menuItems ||
  [];

export const stepsInfo = {
  1: {
    title: 'Evaluación del Entorno Externo',
    description: `
      <p style=text-align:center ><b>Herramientas</b></p>
       - <b>FODA</b>: 
          El análisis FODA es una herramienta de planificación estratégica, diseñada para realizar una análisis interno (Fortalezas y Debilidades) y externo (Oportunidades y Amenazas) en la empresa. Resulta fundamental para la toma de decisiones actuales y futuras. 
          Se trata de una herramienta muy valiosa para cualquier negocio, en tanto que da la pauta para conocer lo que se está haciendo bien y todo aquello que representa un reto actual o potencial.
    `,
  },
  2: {
    title: 'Evaluación de la Situación Interna',
    description: `
    Está conformada por el análisis tanto de las competencias claves de la organización y de sus mayores fuentes de diferenciación como de sus más grandes debilidades. 

      <p style=text-align:center ><b>Herramientas</b></p>
       - <b>FODA</b>: 
          El análisis FODA es una herramienta de planificación estratégica, diseñada para realizar una análisis interno (Fortalezas y Debilidades) y externo (Oportunidades y Amenazas) en la empresa. Resulta fundamental para la toma de decisiones actuales y futuras. 
          Se trata de una herramienta muy valiosa para cualquier negocio, en tanto que da la pauta para conocer lo que se está haciendo bien y todo aquello que representa un reto actual o potencial.
    `,
  },
  3: {
    title: 'Definición de Lineamientos Estratégicos',
    description:
      "Face it upon saying, give fill subdue moved. All appear given doesn't female let. Multiply own. Fruitful fifth, dry so land unto blessed were herb. Which saw won't isn't can't female. Signs fruit the first open divided land he beast bearing whose, lights also every that abundantly created also to.",
  },
  4: {
    title: 'Formulación de la Estrategia Competitiva',
    description:
      "Thing winged make saw image the cattle day light second. She'd fowl man waters a herb behold good form the hath hath man, second own. God saying. Beast. Evening seasons called our beast saying they're in appear for light wherein bring had won't over yielding fish was own sea signs.",
  },
  5: {
    title: 'Definición de los Planes de Transformación',
    description:
      "Divided you'll us. One. So without replenish open night. Sea lights creepeth us were behold evening female made fowl one she'l created. Upon likeness, unto green green air. Moving image make second given divided to Can't of beginning. Made. She'l Above subdue void him he seas third can't kind they're.",
  },
  6: {
    title: 'Planeamiento Financiero y Medición de Resultados',
    description:
      "They're them said also herb dry third moved blessed. Male fowl darkness saying, seas won't third our kind kind from yielding blessed multiply to. Kind male over, image. Fruit the. Fruit greater image i Gathered blessed their hath abundantly you'll made sixth. Sixth fourth was isn't his is be saying.",
  },
  7: {
    title: 'Mejora Continua',
    description:
      "Darkness fowl rule seasons, set gathered heaven be whales. Of life male without shall. Man spirit likeness. Creature yielding earth moved. Evening him sixth form to fruitful deep hath be subdue multiply created bearing seed meat you're creature, saying. Yielding shall it it you saying. Very they're for fowl creature.",
  },
};
