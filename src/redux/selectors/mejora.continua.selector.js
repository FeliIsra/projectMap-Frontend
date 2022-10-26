import { Estrategia } from 'helpers/enums/ansoff';
import { createSelector } from 'reselect';

const getFodas = (state) => state.mejoraContinua.data?.fodas || [];
const getPestels = (state) => state.mejoraContinua.data?.pestels || [];
const getMckinseys = (state) => state.mejoraContinua.data?.mckinseys || [];
const getPorters = (state) => state.mejoraContinua.data?.porters || [];
const getAnsoffs = (state) => state.mejoraContinua.data?.ansoffs || [];
const getBalancedScorecard = (state) =>
  state.mejoraContinua.data?.balancedScorecards || [];
const getOkrs = (state) => state.mejoraContinua.data?.okrs || [];

const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

export const radarChartSelector = createSelector([getFodas], (fodas) => {
  const labels = ['Amenazas', 'Fortalezas', 'Debilidades', 'Oportunidades'];
  const data = fodas.map((foda, index) => {
    return foda.factores.reduce(
      (prev, item) => {
        if (item.area === 'Amenaza') prev.data[0] += item.puntuacion;
        if (item.area === 'Fortaleza') prev.data[1] += item.puntuacion;
        if (item.area === 'Debilidad') prev.data[2] += item.puntuacion;
        if (item.area === 'Oportunidad') prev.data[3] += item.puntuacion;
        return prev;
      },
      {
        label: foda.titulo,
        data: [0, 0, 0, 0],
        backgroundColor:
          index === 0 ? 'rgba(255, 206, 86)' : 'rgb(107, 99, 255)',
        borderWidth: 1,
      }
    );
  });

  return { labels, datasets: data };
});

export const pieChartSelector = createSelector([getPestels], (pestels) => {
  const labels = [
    'Politicos',
    'Economicos',
    'Sociales',
    'Tecnologicos',
    'Ambientales',
    'Legales',
  ];
  const data = pestels.map((pestel) => {
    return pestel.factores.reduce(
      (prev, item) => {
        if (item.area === 'Politico') prev.data[0] += item.puntuacion;
        if (item.area === 'Economico') prev.data[1] += item.puntuacion;
        if (item.area === 'Social') prev.data[2] += item.puntuacion;
        if (item.area === 'Tecnologico') prev.data[3] += item.puntuacion;
        if (item.area === 'Ambiental') prev.data[4] += item.puntuacion;
        if (item.area === 'Legal') prev.data[5] += item.puntuacion;
        return prev;
      },
      {
        label: pestel.titulo,
        data: [0, 0, 0, 0, 0, 0],
        backgroundColor: [
          'rgba(255, 99, 132)',
          'rgba(54, 162, 235)',
          'rgba(255, 206, 86)',
          'rgba(75, 192, 192)',
          'rgba(153, 102, 255)',
          'rgba(255, 159, 64)',
        ],
        borderWidth: 1,
      }
    );
  });
  return { labels, datasets: data };
});

export const polarChartSelector = createSelector(
  [getMckinseys],
  (mckinseys) => {
    const defaultData = {
      labels: [],
      datasets: [
        {
          label: 'Productos',
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    const unidades = mckinseys[0]?.unidadesDeNegocio.map(
      ({ nombre, atractivoDeMercado, fuerzaCompetitiva }) => ({
        nombre,
        puntuacion: atractivoDeMercado * fuerzaCompetitiva,
      })
    );
    unidades
      ?.sort((a, b) => a.puntuacion > b.puntuacion)
      .slice(0, 5)
      .forEach((unidad, index) => {
        defaultData.labels.push(unidad.nombre);
        defaultData.datasets[0].data.push(unidad.puntuacion);
      });
    return defaultData;
  }
);

export const barChartSelector = createSelector([getPorters], (porters) => {
  return porters?.reduce(
    (prev, porter, index) => {
      porter?.consejos?.forEach((item) => {
        if (item.fuerza === 'Rivalidad entre competidores')
          prev.datasets[index].data[0] += item.puntuacion;
        if (item.fuerza === 'Poder de negociacion con los clientes')
          prev.datasets[index].data[1] += item.puntuacion;
        if (item.fuerza === 'Poder de negociacion con los proveedores')
          prev.datasets[index].data[2] += item.puntuacion;
        if (item.fuerza === 'Amenaza de nuevos competidores')
          prev.datasets[index].data[3] += item.puntuacion;
        if (item.fuerza === 'Amenaza de productos substitutos')
          prev.datasets[index].data[4] += item.puntuacion;
      });
      prev.datasets[index].label = porter.titulo;
      return prev;
    },
    {
      labels: [
        'Competidores',
        'Clientes',
        'Proveedores',
        'A. Competidores',
        'A. Substitutos',
      ],
      datasets: [
        {
          label: '',
          data: [0, 0, 0, 0, 0],
          backgroundColor: 'rgba(255, 99, 132)',
        },
        {
          label: '',
          data: [0, 0, 0, 0, 0],
          backgroundColor: 'rgba(53, 162, 235)',
        },
      ],
    }
  );
});

export const horizontalBarChartSelector = createSelector(
  [getAnsoffs],
  (ansoffs) => {
    return ansoffs?.reduce(
      (prev, ansoff, index) => {
        prev.datasets[index].label = ansoff.titulo;
        const total = ansoff?.productos.length;
        if (!total) return prev;
        ansoff?.productos?.forEach((producto) => {
          if (producto.estrategia === Estrategia.DESARROLLO_DE_MERCADO)
            prev.datasets[index].data[0] += 1 / total;
          if (producto.estrategia === Estrategia.PENETRACION)
            prev.datasets[index].data[1] += 1 / total;
          if (producto.estrategia === Estrategia.DIVERSIFICAICON)
            prev.datasets[index].data[2] += 1 / total;
          if (producto.estrategia === Estrategia.DESARROLLO_DE_PRODUCTO)
            prev.datasets[index].data[3] += 1 / total;
        });
        prev.datasets[index].data = prev.datasets[index].data.map((item) =>
          parseFloat((item * 100).toFixed(2))
        );
        return prev;
      },
      {
        labels: [
          'Desarrollo Mer.',
          'Penetracion',
          'Diversificacion',
          'Desarollo Prod.',
        ],
        datasets: [
          {
            label: '',
            data: [0, 0, 0, 0],
            backgroundColor: 'rgba(255, 99, 132)',
          },
          {
            label: '',
            data: [0, 0, 0, 0],
            backgroundColor: 'rgba(53, 162, 235)',
          },
        ],
      }
    );
  }
);

export const horizontalChartSelector = createSelector([getOkrs], (tool) => {
  const defaultData = {
    labels: [],
    datasets: [
      {
        label: 'Target',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Progress',
        data: [],
        backgroundColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  };
  tool[0]?.okrs?.forEach((ork) => {
    ork.keyResults.forEach((keyResult) => {
      defaultData.labels.push(keyResult.description);
      defaultData.datasets[0].data.push(100);
      defaultData.datasets[1].data.push(keyResult.progress);
    });
  });
  return defaultData;
});

export const lineChartSelector = createSelector(
  [getBalancedScorecard],
  (balanced) => {
    const colors = [
      '#d9ed92',
      '#b5e48c',
      '#99d98c',
      '#76c893',
      '#52b69a',
      '#34a0a4',
      '#168aad',
      '#1a759f',
      '#1e6091',
      '#184e77',
    ];
    const defaultData = {
      labels: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      datasets: [],
    };
    balanced[0]?.objectives.forEach((objective, index) => {
      const color =
        colors[
          index % 2 === 0
            ? index % colors.length
            : colors.length - (index % colors.length)
        ];
      defaultData.datasets.push({
        label: objective.action,
        data: objective.checkpoints.map((check) => check.actual),
        backgroundColor: color,
        borderColor: color,
      });
    });
    return defaultData;
  }
);

const labelsMonths = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export const dataLine = {
  labels: labelsMonths,
  datasets: [
    {
      label: 'Dataset 1',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'Dataset 2',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235)',
    },
  ],
};
