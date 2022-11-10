import React from 'react';
import IosShareIcon from '@mui/icons-material/IosShare';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  Card,
  TitleContainer,
  Title,
  Description,
  CardContent,
} from './styles';
import { Box, IconButton } from '@mui/material';

const ProjectCard = (props) => {
  const {
    color,
    descripcion,
    titulo,
    onClick,
    onClickDelete,
    onDeleteDisable = false,
  } = props;
  return (
    <Card>
      <CardContent backgroundcolor={color}>
        <TitleContainer>
          <Title>{titulo}</Title>
          <Box display="flex">
            <IconButton onClick={onClick}>
              <IosShareIcon color="black" />
            </IconButton>
            <IconButton onClick={onClickDelete} disabled={onDeleteDisable}>
              <DeleteIcon color="black" />
            </IconButton>
          </Box>
        </TitleContainer>
        <Description>{descripcion}</Description>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
