import { createSelector } from 'reselect';

const getFodaLoading = (state) => state.foda.loading;
const getPestelLoading = (state) => state.pestel.loading;

export const toolsLoadingSelector = createSelector(
  [getFodaLoading, getPestelLoading],
  (fodaLoading, pestelLoading) => fodaLoading || pestelLoading
);
