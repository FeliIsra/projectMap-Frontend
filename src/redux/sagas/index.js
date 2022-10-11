import { all } from 'redux-saga/effects';

import { watchUser } from 'redux/sagas/user.sagas';
import { watchProjects } from 'redux/sagas/projects.sagas';
import { watchFoda } from 'redux/sagas/foda.sagas';
import { watchPestel } from 'redux/sagas/pestel.sagas';
import { watchMckinsey } from 'redux/sagas/mckinsey.sagas';
import { watchAnsoff } from 'redux/sagas/ansoff.sagas';
import { watchPorter } from 'redux/sagas/porter.sagas';
import { watchBalanceScorecard } from 'redux/sagas/balanceScorecard.sagas';
import { watchOkr } from 'redux/sagas/okr.sagas';

export default function* rootSaga() {
  yield all([
    watchUser(),
    watchProjects(),
    watchFoda(),
    watchPestel(),
    watchMckinsey(),
    watchAnsoff(),
    watchPorter(),
    watchBalanceScorecard(),
    watchOkr(),
  ]);
}
