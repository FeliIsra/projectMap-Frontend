import { createSelector } from 'reselect';

import {
  Cuadrantes,
  CuadrantesColor,
  SignificadoCuadrante,
  CuadrantesOrder,
} from 'helpers/enums/mckinsey';

const getMckinsey = (state) => state.mckinsey.data;

export const cuadrantesSelector = createSelector([getMckinsey], (mckinsey) =>
  Object.entries(Cuadrantes)?.map(([key, value]) => ({
    title: value,
    name: value,
    unidades:
      mckinsey?.unidadesDeNegocio.reduce((result, unidad) => {
        if (unidad.cuadrante === value) {
          return result.concat({
            ...unidad,
            puntuacion: unidad.atractivoDeMercado * unidad.fuerzaCompetitiva,
          });
        }
        return result;
      }, []) || [],
    color: CuadrantesColor[key],
    significado: SignificadoCuadrante[key],
  }))
);
