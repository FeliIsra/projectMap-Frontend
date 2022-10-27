import * as constants from 'redux/contansts/questionnarie.constants';

export const defaultState = {
  data: null,
  loading: false,
  one: {},
};

const questionnaireReducer = (state = defaultState, action) => {
  const { data, error, type } = action;
  switch (type) {
    case constants.QUESTIONNARIE_ON_CREATE_REQUESTED:
    case constants.QUESTIONNARIE_ON_GET_QUESTIONS_REQUESTED:
    case constants.QUESTIONNARIE_ON_INSERT_REQUESTED:
    case constants.QUESTIONNARIE_ON_GET_ONE_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case constants.QUESTIONNARIE_ON_CREATE_SUCCEEDED:
    case constants.QUESTIONNARIE_ON_GET_QUIESTIONS_SUCCEEDED:
    case constants.QUESTIONNARIE_ON_INSERT_SUCCEEDED:
      return {
        ...state,
        data: { ...state.data, ...data },
        loading: false,
      };

    case constants.QUESTIONNARIE_ON_GET_ONE_SUCCEEDED:
      return {
        ...state,
        one: data,
        loading: false,
      };
    case constants.QUESTIONNARIE_ON_CREATE_FAILED:
    case constants.QUESTIONNARIE_ON_GET_QUESTIONS_FAILED:
    case constants.QUESTIONNARIE_ON_INSERT_FAILED:
    case constants.QUESTIONNARIE_ON_GET_ONE_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return error?.response?.status === 401 ? defaultState : state;
  }
};

export default questionnaireReducer;
