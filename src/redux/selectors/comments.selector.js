import { createSelector } from 'reselect';

const getComments = (state) => state.comments.data;
const getUser = (state) => state.user.data;

export const getCommentsList = createSelector(
  [getComments, getUser],
  (comments, user) => {
    return comments.map((comment) => ({
      ...comment,
      showDelete: comment.author === user._id,
    }));
  }
);
