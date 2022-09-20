import { createSelector } from 'reselect';
import { initialValues } from 'containers/PORTER/initialValues';
const getPorter = (state) => state.porter.data;
const getLoading = (state) => state.porter.loading;

export const initialValuesSelector = createSelector(
  [getPorter, getLoading],
  (porter, loading) => {
    return loading
      ? initialValues
      : porter?.preguntasFormatted
      ? porter.preguntasFormatted
      : initialValues;
  }
);
