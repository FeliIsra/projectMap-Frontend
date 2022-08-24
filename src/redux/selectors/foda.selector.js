import { createSelector } from 'reselect';

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
