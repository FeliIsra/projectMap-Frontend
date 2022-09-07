import * as constants from 'redux/contansts/app.constants';

export const onInitialize = () => ({
  type: constants.APP_ON_INITIALIZE_REQUESTED,
});

export const onRedirect = (path) => ({
  type: constants.APP_ON_INITIALIZE_REQUESTED,
  path,
});
