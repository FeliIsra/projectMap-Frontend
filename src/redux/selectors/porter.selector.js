import { createSelector } from 'reselect';
import { initialValues } from 'containers/PORTER/initialValues';
const getPorter = (state) => state.porter.data;
const getPorterNoData = (state) => state.porter;
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

export const consejosSelector = createSelector(
  [getPorterNoData, getLoading],
  (porter, loading) => {
    if (loading) return {};
    const consejos = porter?.consejos || [];
    const consejosMapped = {};
    Object.values(consejos)?.forEach((consejo) => {
      consejosMapped[consejo.fuerza] = {
        consejos: consejo.consejos,
        consejoGeneral: consejo.consejoGeneral,
        valorConsejoGeneral: consejo.valorConsejoGeneral,
      };
    });

    return consejosMapped;
  }
);
