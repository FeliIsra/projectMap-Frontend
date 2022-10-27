import { createSelector } from 'reselect';

const getQuestionnaire = (state) => state.questionnaire.one;
const getLoading = (state) => state.questionnaire.loading;

export const resultsSelector = createSelector(
  [getQuestionnaire, getLoading],
  (one, loading) => {
    if (loading) return [];
    const chartsData = [];
    one?.chapters?.map((chapter) => {
      const questions = chapter?.questions;
      const cantQuestions = questions.length;
      let cantRightAnswers = 0;
      questions?.map((question) => {
        if (question?.rightAnswer === question?.selectedAnswer)
          cantRightAnswers++;
      });

      chartsData.push([
        {
          name: 'Correcto',
          value: cantRightAnswers,
        },
        {
          name: 'Incorrecto',
          value: cantQuestions - cantRightAnswers,
        },
      ]);
    });

    return chartsData;
  }
);

export const initialValuesSelector = createSelector(
  [getQuestionnaire],
  (one) => {
    const initialValues = {};
    one?.chapters?.map((chapter) => {
      const chapterId = chapter?.chapterId;

      if (!initialValues[chapterId.toString()])
        initialValues[chapterId.toString()] = {};

      const questions = chapter?.questions;
      questions?.map((question) => {
        const questionId = question?.questionId;

        if (!initialValues[chapterId.toString()][questionId.toString()])
          initialValues[chapterId.toString()][questionId.toString()] = {};

        const questionText = question?.question;
        const selectedAnswer = question?.selectedAnswer || '';
        const answers = question?.answers;
        const answer = answers[selectedAnswer - 1]?.answer || '';

        initialValues[chapterId.toString()][questionId.toString()][
          questionText
        ] = answer;
      });
    });
    return initialValues;
  }
);
