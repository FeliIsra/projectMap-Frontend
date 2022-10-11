import { createSelector } from 'reselect';

const getOkrSelected = (state) => state.okr.data;

export const okrToolSelector = createSelector([getOkrSelected], (okrTool) => ({
  ...okrTool,
  okrs: okrTool?.okrs.map((okr) => ({
    ...okr,
    ...okr?.keyResults.reduce(
      (previusValue, keyResult) => {
        return {
          goal: previusValue.goal + keyResult.goal,
          priority:
            previusValue.priority + keyResult.priority / okr?.keyResults.length,
        };
      },
      {
        goal: 0,
        priority: 0,
      }
    ),
  })),
}));
