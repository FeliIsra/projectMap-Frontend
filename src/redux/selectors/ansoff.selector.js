import { parseDate } from 'helpers/date';
import { consejosPorEstrategia, Estrategia } from 'helpers/enums/ansoff';
import { createSelector } from 'reselect';

const getOptions = (state) => state.ansoff.options;
const getItem = (state) => state.ansoff.data;

export const situacionDelMercadoSelector = createSelector(
  [getOptions],
  (options) => options?.situacionDelMercado || []
);

export const situacionDelProductoSelector = createSelector(
  [getOptions],
  (options) => options?.situacionDelProducto || []
);

export const exitoSelector = createSelector(
  [getOptions],
  (options) => options?.exito || []
);

export const productosSelector = createSelector([getItem], (ansoff) => {
  let list = {};
  ansoff?.productos?.forEach((producto) => {
    if (list[producto.estrategia]) list[producto.estrategia].push(producto);
    else list = { ...list, [producto.estrategia]: [producto] };
  });
  return list;
});

export const porcentajesSelector = createSelector(
  [productosSelector, getItem],
  (productosList, ansoff) => {
    let list = {};
    if (productosList && ansoff)
      Object.values(Estrategia)?.forEach((value) => {
        const porcentaje = productosList[value]
          ? (
              (productosList[value]?.length / ansoff?.productos?.length) *
              100
            ).toFixed(2)
          : 0;
        const consejo = consejosPorEstrategia(value, porcentaje);
        list = {
          ...list,
          [value]: { porcentaje, consejo },
        };
      });
    return list;
  }
);

export const titleSelector = createSelector([getItem], (ansoff) => ({
  ...ansoff,
  title: `${ansoff?.titulo} - ${parseDate(ansoff?.createdAt)}`,
}));
