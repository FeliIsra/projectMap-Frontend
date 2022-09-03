import React from 'react';
import IosShareIcon from '@mui/icons-material/IosShare';

import {
  Card,
  TitleContainer,
  Title,
  Description,
  CardContent,
} from './styles';
import { IconButton } from '@mui/material';

const ProjectCard = (props) => {
  const { color, descripcion, titulo, onClick, onClickIcon } = props;
  return (
    <Card onClick={onClick}>
      <CardContent backgroundcolor={color}>
        <TitleContainer>
          <Title>{titulo}</Title>
          <IconButton onClick={onClickIcon}>
            <IosShareIcon color="black" />
          </IconButton>
        </TitleContainer>
        <Description>{descripcion}</Description>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
