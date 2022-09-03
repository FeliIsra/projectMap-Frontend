import { parseDate } from 'helpers/date';
import { createSelector } from 'reselect';

const sortByPuntuacion = (a, b) => b.puntuacion - a.puntuacion;
const reduceByPuntuacion = (a, b) => a + b.puntuacion;
const getFoda = (state) => state.foda.data;

export const debilidadesSelector = createSelector(
  [getFoda],
  (foda) => foda?.factores.filter((factor) => factor.area === 'Debilidad') || []
);

export const amenazasSelector = createSelector(
  [getFoda],
  (foda) => foda?.factores.filter((factor) => factor.area === 'Amenaza') || []
);

export const fortalezasSelector = createSelector(
  [getFoda],
  (foda) => foda?.factores.filter((factor) => factor.area === 'Fortaleza') || []
);

export const oportunidadesSelector = createSelector(
  [getFoda],
  (foda) =>
    foda?.factores.filter((factor) => factor.area === 'Oportunidad') || []
);

export const debilidadesSelectorOrdenadas = createSelector(
  [debilidadesSelector],
  (debilidades) => debilidades.sort(sortByPuntuacion)
);

export const amenazasSelectorOrdenadas = createSelector(
  [amenazasSelector],
  (amenazas) => amenazas.sort(sortByPuntuacion)
);

export const fortalezasSelectorOrdenadas = createSelector(
  [fortalezasSelector],
  (fortalezas) => fortalezas.sort(sortByPuntuacion)
);

export const oportunidadesSelectorOrdenadas = createSelector(
  [oportunidadesSelector],
  (oportunidades) => oportunidades.sort(sortByPuntuacion)
);

export const totalResultsSelect = createSelector(
  [
    fortalezasSelector,
    oportunidadesSelector,
    debilidadesSelector,
    amenazasSelector,
  ],
  (fortalezas, oportunidades, debilidades, amenazas) => {
    return {
      fortalezas: fortalezas.reduce(reduceByPuntuacion, 0),
      oportunidades: oportunidades.reduce(reduceByPuntuacion, 0),
      debilidades: debilidades.reduce(reduceByPuntuacion, 0),
      amenazas: amenazas.reduce(reduceByPuntuacion, 0),
    };
  }
);

export const porcentajeSelector = createSelector(
  [totalResultsSelect],
  (total) => {
    let totalPuntuacion = 0;
    Object.keys(total).forEach((area) => (totalPuntuacion += total[area]));
    const fortaleza = {
      area: 'Fortaleza',
      porcentaje: (total['fortalezas'] * 100) / totalPuntuacion,
      descripcion: '',
    };
    const oportunidad = {
      area: 'Oportunidad',
      porcentaje: (total['oportunidades'] * 100) / totalPuntuacion,
      descripcion: '',
    };
    const debilidad = {
      area: 'Debilidad',
      porcentaje: (total['debilidades'] * 100) / totalPuntuacion,
      descripcion: '',
    };
    const amenaza = {
      area: 'Amenaza',
      porcentaje: (total['amenazas'] * 100) / totalPuntuacion,
      descripcion: '',
    };

    if (fortaleza.porcentaje < debilidad.porcentaje) {
      fortaleza.descripcion =
        'Tus fortalezas son más bajas que tus debilidades, ¿qué te parece pensar en planes de acción para obtener mejores calificaciones en este elemento?';
      debilidad.descripcion =
        'Tus debilidades son mayores que tus fortalezas, esta es una clásica señal de advertencia de que existen áreas de mejora en tu empresa, crea planes de acción para reducir estas debilidades.';
    } else {
      fortaleza.descripcion =
        'Tus fortalezas son mayores o iguales a tus debilidades, ¡mantén ese buen resultado!';
      debilidad.descripcion =
        'Tus debilidades son menores o iguales a tus fortalezas, esta es una buena señal, ¡pero no te conformes!';
    }

    if (oportunidad.porcentaje >= amenaza.porcentaje) {
      oportunidad.descripcion =
        'Tiene más oportunidades que amenazas y esto indica un futuro prometedor, solo necesita alinear qué fuerzas optimizarán las posibilidades de que realmente sucedan.';
      amenaza.descripcion =
        'Sus amenazas son menores que sus oportunidades, pero aun así vale la pena analizar sus amenazas más relevantes y crear planes de acción para ellas.';
    } else {
      oportunidad.descripcion =
        'Sus oportunidades son menores que sus amenazas, vale la pena pensar en planes de acción para reducir las amenazas.';
      amenaza.descripcion =
        'Tus amenazas son mayores o iguales a las oportunidades, necesitas pensar en planes de acción para reducir los riesgos de que sucedan lo antes posible.';
    }

    return [fortaleza, oportunidad, debilidad, amenaza];
  }
);

export const tableSelector = createSelector([porcentajeSelector], (list) => {
  return list.map((area) => {
    return {
      ...area,
      porcentaje: `${area.porcentaje.toFixed(2)}%`,
    };
  });
});

export const titleSelector = createSelector([getFoda], (foda) => ({
  ...foda,
  title: `${foda?.title} - ${parseDate(foda?.createdAt)}`,
}));

export const pieChartSelector = createSelector(
  [porcentajeSelector, totalResultsSelect],
  (list, total) => {
    let totalPuntuacion = 0;
    Object.keys(total).forEach((area) => (totalPuntuacion += total[area]));
    return list.map((area) => {
      return {
        name: area.area,
        value: area.porcentaje,
      };
    });
  }
);

export const radarChartSelector = createSelector(
  [totalResultsSelect],
  (total) => {
    console.log({ total });
    let totalPuntuacion = 0;
    Object.keys(total).forEach((area) => (totalPuntuacion += total[area]));

    return Object.keys(total).map((area) => {
      return {
        subject: area,
        A: total[area],
        fullMark: totalPuntuacion,
      };
    });
  }
);
