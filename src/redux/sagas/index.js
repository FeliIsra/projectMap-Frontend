import { all } from 'redux-saga/effects';

import { watchUser } from 'redux/sagas/user.sagas';
import { watchProjects } from 'redux/sagas/projects.sagas';
import { watchFoda } from 'redux/sagas/foda.sagas';

export default function* rootSaga() {
  yield all([watchUser(), watchProjects(), watchFoda()]);
}
