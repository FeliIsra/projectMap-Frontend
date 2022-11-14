import { CompletitionColors } from 'helpers/enums/completition';
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
const getSharedUsers = (state) => state.projects.sharedUsers;

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
      1: [
        { titulo: 'PORTER', _id: -1 },
        ...porters,
        { titulo: 'PESTEL', _id: -2 },
        ...pestels,
      ],
      2: [...fodas],
      3: [...ansoffs],
      4: [...mckenseys],
      5: [...questionnaires],
      6: [
        { titulo: 'Balanced scorecard', _id: -3 },
        ...balanceScorecards,
        { titulo: 'OKR', _id: -4 },
        ...okrs,
      ],
      7: [],
    };
  }
);

const orderByCreatedDateDesc = (first, second) =>
  new Date(second.createdAt).getTime() - new Date(first.createdAt).getTime();

export const getFirstStep = createSelector(
  [getPorters, getPestels],
  (porters, pestels) => {
    const porterCompletion =
      porters.sort((a, b) => orderByCreatedDateDesc(a, b))[0]?.completion ||
      'Vacio';
    const pestelCompletion =
      pestels.sort((a, b) => orderByCreatedDateDesc(a, b))[0]?.completion ||
      'Vacio';

    const array = [porterCompletion, pestelCompletion];
    if (array.every((status) => status === 'Vacio')) return 'Vacio';
    if (array.every((status) => status === 'Completo')) return 'Completo';
    else return 'Incompleto';
  }
);

export const getSecondStep = createSelector(
  [getFodas],
  (fodas) =>
    fodas.sort((a, b) => orderByCreatedDateDesc(a, b))[0]?.completion || 'Vacio'
);

export const getThirdStep = createSelector(
  [getAnsoffs],
  (ansoffs) =>
    ansoffs.sort((a, b) => orderByCreatedDateDesc(a, b))[0]?.completion ||
    'Vacio'
);

export const getFourthStep = createSelector(
  [getMckinseys],
  (mckenseys) =>
    mckenseys.sort((a, b) => orderByCreatedDateDesc(a, b))[0]?.completion ||
    'Vacio'
);

export const getFivethStep = createSelector(
  [getQuestionnaires],
  (questionnaires) =>
    questionnaires.sort((a, b) => orderByCreatedDateDesc(a, b))[0]
      ?.completion || 'Vacio'
);

export const getSixthtStep = createSelector(
  [getOkrs, getBalancedScorecard],
  (okrs, balanceScorecards) => {
    const okrCompletion =
      okrs.sort((a, b) => orderByCreatedDateDesc(a, b))[0]?.completion ||
      'Vacio';
    const balancedCompletion =
      balanceScorecards.sort((a, b) => orderByCreatedDateDesc(a, b))[0]
        ?.completion || 'Vacio';

    const array = [okrCompletion, balancedCompletion];
    if (array.every((status) => status === 'Vacio')) return 'Vacio';
    if (array.every((status) => status === 'Completo')) return 'Completo';
    else return 'Incompleto';
  }
);

export const progressSelector = createSelector(
  [
    getFirstStep,
    getSecondStep,
    getThirdStep,
    getFourthStep,
    getFivethStep,
    getSixthtStep,
  ],
  (firstStep, secondStep, thirdStep, fourthStep, fivethStep, sixthStep) => {
    return {
      1: CompletitionColors[firstStep],
      2: CompletitionColors[secondStep],
      3: CompletitionColors[thirdStep],
      4: CompletitionColors[fourthStep],
      5: CompletitionColors[fivethStep],
      6: CompletitionColors[sixthStep],
    };
  }
);

export const getConsultantSelector = createSelector(
  [getSharedUsers],
  (sharedUsers) => sharedUsers?.find((user) => user.role === 'Consultant')
);
