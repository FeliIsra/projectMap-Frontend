import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { onDelete } from 'redux/actions/comments.actions';

const Comment = ({ comment }) => {
  const dispatch = useDispatch();

  const onClickDeleteButton = () => {
    dispatch(onDelete(comment._id));
  };

  return (
    <Box mb={2} width="100%">
      <Card
        sx={{
          bgcolor: '#aeaeae',
          transition: 'all .5s ease',
        }}
      >
        <CardContent sx={{ position: 'relative' }}>
          <Box position="absolute" right={5} top={2}>
            <Tooltip arrow placement="top" title="Borrar">
              <IconButton
                onClick={onClickDeleteButton}
                disabled={comment.showDelete}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box alignItems="flex-start" display="flex">
            <Box mr={1.5}>
              <Typography
                sx={{
                  borderRadius: 1000,
                  backgroundColor: 'white',
                  padding: 1,
                  width: '20px',
                  height: '20px',
                  textAlign: 'center',
                }}
                fontSize={12}
              >
                {' '}
                {comment.author?.firstName[0]}{' '}
              </Typography>
            </Box>
            <Box>
              <Box alignItems="center" display="flex">
                <Typography fontSize={14} fontWeight={500}>
                  {comment.author?.firstName} {comment.author?.lastName}
                  <Typography
                    color={'#aeaeae'}
                    component="span"
                    fontSize={12}
                    fontWeight={400}
                    ml={1}
                  ></Typography>
                </Typography>
              </Box>
              <Typography> {comment?.text} </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Comment;
