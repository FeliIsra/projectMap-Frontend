import * as constants from 'redux/contansts/mejora.continua.constants';

export const onGetOne = (id) => ({
  type: constants.GET_MEJORA_CONTINUA_REQUESTED,
  id,
});
