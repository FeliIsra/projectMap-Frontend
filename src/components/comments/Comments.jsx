import React, { useEffect, useState } from 'react';
import { Box, Collapse, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Comment from 'components/comments/Comment';
import { CustomInput } from 'components/inputs/Input/styles';
import SendIcon from '@mui/icons-material/Send';
import { onCreate, onGetAll } from 'redux/actions/comments.actions';
import { getCommentsList } from 'redux/selectors/comments.selector';

const Comments = ({ show, tool, toolId, projectId }) => {
  const comments = useSelector(getCommentsList);
  const [hide, setHide] = useState(true);
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

  const onExited = () => {
    setHide(true);
  };

  return (
    <Collapse
      hidden={hide && !show}
      in={show}
      orientation={'vertical'}
      sx={{ width: '100%' }}
      onExited={onExited}
    >
      <Box px={3} width="100%">
        <Box maxWidth="100vw" width={{ xs: '100%', md: '100%', lg: '350px' }}>
          <>
            {!Array.isArray(comments) || comments.length <= 0 ? (
              <div />
            ) : (
              <Box maxHeight="500px" mt={-2} overflow="auto" pt={2}>
                {comments.map((comment) => (
                  <Comment key={comment._id} comment={comment} />
                ))}
              </Box>
            )}
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
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
    </Collapse>
  );
};

export default Comments;
