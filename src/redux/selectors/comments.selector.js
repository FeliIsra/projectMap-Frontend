import { createSelector } from 'reselect';

const getComments = (state) => state.comments.data;

export const getCommentsList = createSelector([getComments], (comments) => {
  const list = [];
  Object.values(comments).map((comment) => list.push(comment));
  return list;
});
