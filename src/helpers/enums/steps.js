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
      { titulo: 'Agregar OKR', action: onCreateOkr },
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
    Consiste en analizar los distintos factores externos a la organización o emprendimiento que afectan el funcionamiento del mismo, los mismos pueden ser políticos, económicos, socioculturales, tecnológicos, ecológicos o legales.

      <p style=text-align:center ><b>Herramientas</b></p>
       - <b>PESTEL</b>: 
          El análisis PESTEL es utilizado para hacer una planificación estratégica de una empresa, tanto a nivel organizacional como de mercado. Además, si se hace regularmente, tiene la capacidad de mostrar oportunamente las tendencias o cambios en el mercado que puedan influir negativa o positivamente en tu sector, por lo que recomendamos que él mismo se realice varias veces por periodo.
      <br><br>
       - <b>PORTER</b>:
        El modelo de las 5 fuerzas de Porter es una herramienta metodológica de análisis para la investigación acerca de las oportunidades y amenazas en una industria determinada, el mismo utiliza un enfoque mixto entre 5 ejes distintos, siendo los mismos: 
        <br><br>

        1) Rivalidad entre competidores<br>
        2) Poder de negociación con los clientes<br>
        3) Poder de negociación con los proveedores<br>
        4) Amenaza de nuevos competidores<br>
        5) Amenaza de productos sustitutos 
    `,
  },
  2: {
    title: 'Evaluación de la Situación Interna',
    description: `
    Está conformada por el análisis tanto de las competencias claves de la organización y de sus mayores fuentes de diferenciación como de sus más grandes debilidades. 

      <p style=text-align:center ><b>Herramientas</b></p>
       - <b>FODA</b>: 
          El análisis FODA es una herramienta de planificación estratégica, diseñada para realizar un análisis interno (Fortalezas y Debilidades) y externo (Oportunidades y Amenazas) en la empresa. Resulta fundamental para la toma de decisiones actuales y futuras. 
          Se trata de una herramienta muy valiosa para cualquier negocio, en tanto que da la pauta para conocer lo que se está haciendo bien y todo aquello que representa un reto actual o potencial.
    `,
  },
  3: {
    title: 'Definición de Lineamientos Estratégicos',
    description: `
    Esta esfera tiene como objetivo el evaluar las posibles oportunidades que posee una organización, como podrían ser posibles negocios a incursionar, como asignar los recursos o como fusionarse. ProjectMap proporciona el análisis del lado del producto en su respectivo mercado.
         <p style=text-align:center ><b>Herramientas</b></p>
       - <b>Matriz Ansoff</b>: 
         La matriz Ansoff es una herramienta de análisis estratégico que se enfoca en identificar las oportunidades de crecimiento de una empresa. En el caso de nuestra implementación, nos enfocamos en formar una solución de clasificación de productos dependiendo de su estado y su lugar en el mercado. Esta herramienta es importante, ya que le dará una visión comparativa en sus distintos productos o servicios para saber cúales debe priorizar sobre otros. 

    `,
  },
  4: {
    title: 'Formulación de la Estrategia Competitiva',
    description: `
         La misma consiste en el diseño e implementación de planes y estrategias que definan las acciones a realizar para lograr sus objetivos tanto a corto como largo plazo.
         <p style=text-align:center ><b>Herramientas</b></p>
       - <b>Matriz McKinsey</b>: 
          A través de la matriz de McKinsey se evalúa el posicionamiento de un producto o servicio en un mercado y se define si, según las condiciones competitivas y otros factores que pueden afectar a su producción y distribución, es una buena decisión mantener ese producto en un determinado mercado, si conviene invertir para crecer o si, por el contrario, lo más conveniente es realizar una desinversión. El objetivo de esta herramienta es proporcionar información clave para configurar la cartera de negocios de la mejor manera.
    `,
  },
  5: {
    title: 'Definición de los Planes de Transformación',
    description: `
         Ninguna organización puede sobrevivir manteniéndose estática, por lo que planes de transformación deben ser definidos tanto para el talento humano, como para la tecnología utilizada, los procesos que mantiene y cómo maneja la comunicación tanto interna como externa.
         <p style=text-align:center ><b>Herramientas</b></p>
       - <b>Planes de transformacion</b>: 
          Los planes de transformación son las estrategias que su empresa deberá tomar para no quedarse atrás en tendencias o nuevas culturas organizacionales que podrían mejorar la calidad de tanto su producto o servicio como de su organización.
          <br><br>
          Para esto, les ofrecemos una serie de cuestionarios con su respectiva teoría para que usted responda. De su producto ser de una organización, seguramente su consultor asociado le prepare cuestionarios personalizados para usted.
    `,
  },
  6: {
    title: 'Planeamiento Financiero y Medición de Resultados',
    description: `
    Planeamiento financiero y medición de resultados: Quizá uno de los aspectos más fuertes a considerar, en esta etapa la organización deberá delinear y establecer cómo se medirá y distribuirá  sus recursos para lograr los objetivos trazados, en un plazo previamente determinado.

         <p style=text-align:center ><b>Herramientas</b></p>
       - <b>OKR</b>: 
          Un OKR es una metodología de gestión de trabajo que tiene como finalidad facilitar los objetivos marcados por una empresa mediante la medición de manera cuantitativa y cualitativa del progreso de los equipos. Cuando hablamos de Objectives and Key Results, que podemos traducir al castellano como objetivos y resultados clave, lo hacemos de una herramienta que puede marcar el destino de una organización al aplicar un método que permite organizar el día a día de la compañía, definiendo grupos de trabajo y realizando un seguimiento de los avances de cada empleado.
          <br><br>
       - <b>Balanced Scorecard</b>:
          El balanced scorecard (o cuadro de mando integral) es una herramienta de la metodología de gestión estratégica utilizada para definir y para hacer seguimiento de las estrategias definidas por la misma. Se basa en lograr un correcto equilibrio entre los elementos de la estrategia general de la empresa y los elementos operativos de la misma. Esto se logra mediante la definición de indicadores en 4 perspectivas predefinidas; la financiera, la del cliente, la de los procesos internos y la de aprendizaje.
`,
  },
  7: {
    title: 'Mejora Continua',
    description:
      'Habiendo completado todas las herramientas que usted desee, usted aún deberá darle un seguimiento a su proyecto. Para esto, ProjectMap le proporciona un espacio para que usted pueda visualizar métricas generales comparativas de su proyecto en iteraciones anteriores del mismo. Complete la mayor cantidad de herramientas para ver mejores y más detallados resultados, y recuerde agregar nuevas iteraciones de las mismas para mejores gráficos comparativos.',
  },
};
