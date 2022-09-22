import { parseDate } from 'helpers/date';
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
  ansoff?.productos.forEach((producto) => {
    if (list[producto.estrategia]) list[producto.estrategia].push(producto);
    else list = { ...list, [producto.estrategia]: [producto] };
  });
  return list;
});
