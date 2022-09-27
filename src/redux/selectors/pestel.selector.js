import { parseDate } from 'helpers/date';
import { createSelector } from 'reselect';
import { getConsejos } from 'services/porter.services';

const sortByPuntuacion = (a, b) => b.puntuacion - a.puntuacion;
const reduceByPuntuacion = (a, b) => a + b.puntuacion;
const getPestel = (state) => state.pestel.data;
const getSeeds = (state) => state.pestel.seeds;

export const politicoSelector = createSelector(
  [getPestel],
  (pestel) =>
    pestel?.factores.filter((factor) => factor.area === 'Politico') || []
);

export const economicoSelector = createSelector(
  [getPestel],
  (pestel) =>
    pestel?.factores.filter((factor) => factor.area === 'Economico') || []
);

export const socialSelector = createSelector(
  [getPestel],
  (pestel) =>
    pestel?.factores.filter((factor) => factor.area === 'Social') || []
);

export const tecnologicoSelector = createSelector(
  [getPestel],
  (pestel) =>
    pestel?.factores.filter((factor) => factor.area === 'Tecnologico') || []
);

export const ambientalSelector = createSelector(
  [getPestel],
  (pestel) =>
    pestel?.factores.filter((factor) => factor.area === 'Ambiental') || []
);

export const legalSelector = createSelector(
  [getPestel],
  (pestel) => pestel?.factores.filter((factor) => factor.area === 'Legal') || []
);

export const politicoSelectorOrdenadas = createSelector(
  [politicoSelector],
  (politicos) => politicos.sort(sortByPuntuacion)
);

export const economicoSelectorOrdenadas = createSelector(
  [economicoSelector],
  (economicos) => economicos.sort(sortByPuntuacion)
);

export const socialSelectorOrdenadas = createSelector(
  [socialSelector],
  (sociales) => sociales.sort(sortByPuntuacion)
);

export const tecnologicoSelectorOrdenadas = createSelector(
  [tecnologicoSelector],
  (tecnologicos) => tecnologicos.sort(sortByPuntuacion)
);

export const ambientalSelectorOrdenadas = createSelector(
  [ambientalSelector],
  (ambientales) => ambientales.sort(sortByPuntuacion)
);

export const legalSelectorOrdenadas = createSelector(
  [legalSelector],
  (legales) => legales.sort(sortByPuntuacion)
);

export const totalResultsSelect = createSelector(
  [
    politicoSelector,
    economicoSelector,
    socialSelector,
    tecnologicoSelector,
    ambientalSelector,
    legalSelector,
  ],
  (politicos, economicos, sociales, tecnologicos, ambientales, legales) => {
    return {
      politicos: politicos.reduce(reduceByPuntuacion, 0),
      economicos: economicos.reduce(reduceByPuntuacion, 0),
      sociales: sociales.reduce(reduceByPuntuacion, 0),
      tecnologicos: tecnologicos.reduce(reduceByPuntuacion, 0),
      ambientales: ambientales.reduce(reduceByPuntuacion, 0),
      legales: legales.reduce(reduceByPuntuacion, 0),
    };
  }
);

export const porcentajeSelector = createSelector(
  [totalResultsSelect],
  (total) => {
    let totalPuntuacion = 0;
    Object.keys(total).forEach((area) => (totalPuntuacion += total[area]));
    const politica = {
      area: 'Politico',
      porcentaje: (total['politicos'] * 100) / totalPuntuacion,
    };
    const economia = {
      area: 'Economico',
      porcentaje: (total['economicos'] * 100) / totalPuntuacion,
    };
    const sociales = {
      area: 'Social',
      porcentaje: (total['sociales'] * 100) / totalPuntuacion,
    };
    const tecnologia = {
      area: 'Tecnologico',
      porcentaje: (total['tecnologicos'] * 100) / totalPuntuacion,
    };
    const ambientales = {
      area: 'Ambiental',
      porcentaje: (total['ambientales'] * 100) / totalPuntuacion,
    };
    const legales = {
      area: 'Legal',
      porcentaje: (total['legales'] * 100) / totalPuntuacion,
    };

    return [politica, economia, sociales, tecnologia, ambientales, legales];
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

export const titleSelector = createSelector([getPestel], (pestel) => ({
  ...pestel,
  title: `${pestel?.title} - ${parseDate(pestel?.createdAt)}`,
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

export const consejosSelector = createSelector(
  [
    politicoSelector,
    economicoSelector,
    socialSelector,
    tecnologicoSelector,
    ambientalSelector,
    legalSelector,
    getSeeds,
  ],
  (
    politicos,
    economicos,
    sociales,
    tecnologicos,
    ambientales,
    legales,
    seeds
  ) => {
    const getConsejo = (actualSeed, seed) => {
      return actualSeed.puntuacion > seed.puntaje
        ? seed.consejoPositivo
        : seed.consejoNegativo;
    };

    return Object.entries(seeds).reduce((prevValue, [key, seedList]) => {
      let actualSeed = {};
      switch (key) {
        case 'Politico':
          return prevValue.concat(
            seedList
              .filter((seed) =>
                politicos.some((politico) => {
                  if (seed.descripcion === politico.descripcion) {
                    actualSeed = politico;
                    return true;
                  }
                  return false;
                })
              )
              .map((seed) => {
                return {
                  ...seed,
                  area: key,
                  consejo: getConsejo(actualSeed, seed),
                };
              })
          );
        case 'Economico':
          return prevValue.concat(
            seedList
              .filter((seed) =>
                economicos.some((economico) => {
                  if (seed.descripcion === economico.descripcion) {
                    actualSeed = economico;
                    return true;
                  }
                  return false;
                })
              )
              .map((seed) => {
                return {
                  ...seed,
                  area: key,
                  consejo: getConsejo(actualSeed, seed),
                };
              })
          );
        case 'Social':
          return prevValue.concat(
            seedList
              .filter((seed) =>
                sociales.some((social) => {
                  if (seed.descripcion === social.descripcion) {
                    actualSeed = social;
                    return true;
                  }
                  return false;
                })
              )
              .map((seed) => {
                return {
                  ...seed,
                  area: key,
                  consejo: getConsejo(actualSeed, seed),
                };
              })
          );
        case 'Tecnologico':
          return prevValue.concat(
            seedList
              .filter((seed) =>
                tecnologicos.some((tech) => {
                  if (seed.descripcion === tech.descripcion) {
                    actualSeed = tech;
                    return true;
                  }
                  return false;
                })
              )
              .map((seed) => {
                return {
                  ...seed,
                  area: key,
                  consejo: getConsejo(actualSeed, seed),
                };
              })
          );
        case 'Ambiental':
          return prevValue.concat(
            seedList
              .filter((seed) =>
                ambientales.some((ambiental) => {
                  if (seed.descripcion === ambiental.descripcion) {
                    actualSeed = ambiental;
                    return true;
                  }
                  return false;
                })
              )
              .map((seed) => {
                return {
                  ...seed,
                  area: key,
                  consejo: getConsejo(actualSeed, seed),
                };
              })
          );
        case 'Legal':
          return prevValue.concat(
            seedList
              .filter((seed) =>
                legales.some((legal) => {
                  if (seed.descripcion === legal.descripcion) {
                    actualSeed = legal;
                    return true;
                  }
                  return false;
                })
              )
              .map((seed) => {
                return {
                  ...seed,
                  area: key,
                  consejo: getConsejo(actualSeed, seed),
                };
              })
          );
        default:
          return [];
      }
    }, []);
  }
);
