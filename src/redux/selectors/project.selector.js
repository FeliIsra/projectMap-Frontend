import { getMenuItems } from 'helpers/enums/steps';
import { createSelector } from 'reselect';

const getFodas = (state) =>
  state.projects.fodas?.map((x) => ({ ...x, redirectUrl: `foda/${x._id}` }));
const getPorters = (state) =>
  state.projects.porters?.map((x) => ({
    ...x,
    redirectUrl: `porter/${x._id}`,
  }));
const getPestels = (state) =>
  state.projects.pestels?.map((x) => ({
    ...x,
    redirectUrl: `pestel/${x._id}`,
  }));
const getAnsoffs = (state) =>
  state.projects.ansoffs?.map((x) => ({
    ...x,
    redirectUrl: `ansoff/${x._id}`,
  }));
const getOkrs = (state) =>
  state.projects.okrs?.map((x) => ({ ...x, redirectUrl: `okr/${x._id}` }));
const getMckinseys = (state) =>
  state.projects.mckinseys?.map((x) => ({
    ...x,
    redirectUrl: `mckinsey/${x._id}`,
  }));
const getBalancedScorecard = (state) =>
  state.projects.balancedScorecards?.map((x) => ({
    ...x,
    redirectUrl: `balanceScorecard/${x._id}`,
  }));
const getQuestionnaires = (state) =>
  state.projects.questionnaires?.map((x) => ({
    ...x,
    redirectUrl: `questionnaire/${x._id}`,
  }));

export const stepToolsSelector = createSelector(
  [
    getFodas,
    getPorters,
    getPestels,
    getAnsoffs,
    getOkrs,
    getMckinseys,
    getBalancedScorecard,
    getQuestionnaires,
  ],
  (
    fodas,
    porters,
    pestels,
    ansoffs,
    okrs,
    mckenseys,
    balanceScorecards,
    questionnaires
  ) => {
    return {
      1: [...porters, ...pestels],
      2: [...fodas],
      3: [...ansoffs],
      4: [...mckenseys],
      5: [...questionnaires],
      6: [...balanceScorecards, ...okrs],
      7: [],
    };
  }
);
