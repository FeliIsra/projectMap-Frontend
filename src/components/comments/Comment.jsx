import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Avatar,
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

const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
};

const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: stringToColor(name)?.toString(),
      width: 30,
      height: 30,
      fontSize: 16,
    },
    children: `${name && name.split(' ')[0][0]}${
      name.split(' ')[1] ? name.split(' ')[1][0] : ''
    }`,
  };
};

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
          {comment.showDelete && (
            <Box position="absolute" right={5} top={2}>
              <Tooltip arrow placement="top" title="Borrar">
                <IconButton onClick={onClickDeleteButton}>
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          <Box alignItems="flex-start" display="flex">
            <Box mr={1.5}>
              <Avatar
                {...stringAvatar(
                  `${comment.author?.firstName} ${comment.author?.lastName}`
                )}
              />
            </Box>
            <Box>
              <Box alignItems="center" display="flex">
                <Typography fontSize={14} fontWeight={500}>
                  {comment.author?.firstName} {comment.author?.lastName}
                </Typography>
              </Box>
              <Typography sx={{ whiteSpace: 'break-spaces', display: 'flex' }}>
                {comment?.text}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Comment;
