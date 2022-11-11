import React, { useEffect, useState } from 'react';
import { Box, Collapse, Divider, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Comment from 'components/comments/Comment';
import { CustomInput } from 'components/inputs/Input/styles';
import SendIcon from '@mui/icons-material/Send';
import { onCreate, onGetAll } from 'redux/actions/comments.actions';
import { getCommentsList } from 'redux/selectors/comments.selector';

const Comments = ({ show, tool, toolId, projectId }) => {
  const comments = useSelector(getCommentsList);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const createComment = () => {
    dispatch(
      onCreate({
        projectId,
        text: comment,
        position: 0,
        tool,
        toolId,
      })
    );
  };

  useEffect(() => {
    dispatch(onGetAll(tool, toolId));
  }, []);

  return (
    <Box width="100%">
      <Box maxWidth="100vw" width={{ xs: '100%', md: '100%', lg: '100%' }}>
        <>
          {!Array.isArray(comments) || comments?.length <= 0 ? (
            <div />
          ) : (
            <Box overflow="auto" maxHeight="calc(100vh - 300px)">
              {comments?.map((comment) => (
                <Comment key={comment.author._id} comment={comment} />
              ))}
            </Box>
          )}
          <Divider />
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingTop={2}
          >
            <CustomInput
              type="text"
              id="comment"
              name="comment"
              onChange={handleCommentChange}
              value={comment}
            />
            <IconButton onClick={createComment}>
              <SendIcon />
            </IconButton>
          </Box>
        </>
      </Box>
    </Box>
  );
};

export default Comments;
