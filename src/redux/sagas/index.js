import { all } from 'redux-saga/effects';

import { watchUser } from 'redux/sagas/user.sagas';

export default function* rootSaga() {
  yield all([watchUser()]);
}
