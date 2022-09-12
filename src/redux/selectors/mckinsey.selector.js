import { Cuadrantes, CuadrantesColor } from 'helpers/enums/mckinsey';
import { createSelector } from 'reselect';

const getMckinsey = (state) => state.mckinsey.data;

export const cuadrantesSelector = createSelector([getMckinsey], (mckinsey) =>
  Object.entries(Cuadrantes).map(([key, value]) => ({
    title: value,
    unidades:
      mckinsey?.unidadesDeNegocio.filter(
        (unidad) => unidad.cuadrante === value
      ) || [],
    color: CuadrantesColor[key],
  }))
);
