import { getMenuItems } from 'helpers/enums/steps';
import { createSelector } from 'reselect';

const getFodas = (state) =>
  state.projects.fodas.map((x) => ({ ...x, redirectUrl: `foda/${x._id}` }));
const getPorters = (state) =>
  state.projects.porters.map((x) => ({ ...x, redirectUrl: `porter/${x._id}` }));
const getPestels = (state) =>
  state.projects.pestels.map((x) => ({ ...x, redirectUrl: `pestel/${x._id}` }));
const getAnsoffs = (state) =>
  state.projects.ansoffs.map((x) => ({ ...x, redirectUrl: `ansoff/${x._id}` }));
const getOkrs = (state) =>
  state.projects.okrs.map((x) => ({ ...x, redirectUrl: `okr/${x._id}` }));
const getMckinseys = (state) =>
  state.projects.mckinseys.map((x) => ({
    ...x,
    redirectUrl: `mckinsey/${x._id}`,
  }));
const getBalancedScorecard = (state) =>
  state.projects.balancedScorecards.map((x) => ({
    ...x,
    redirectUrl: `balanced-scorecard/${x._id}`,
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
  ],
  (fodas, porters, pestels, ansoffs, okrs, mckenseys, balanceScorecards) => {
    return {
      1: [...porters, getMenuItems(1)[0], ...pestels, getMenuItems(1)[1]],
      2: [...fodas, getMenuItems(2)[0]],
      3: [...ansoffs, getMenuItems(3)[0]],
      4: [...mckenseys, getMenuItems(4)[0]],
      5: [getMenuItems(5)[0]],
      6: [
        ...okrs,
        getMenuItems(6)[0],
        ...balanceScorecards,
        getMenuItems(6)[1],
      ],
      7: [getMenuItems(7)[0]],
    };
  }
);
