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
  const { backgroundcolor, description, title, onClick, onClickIcon } = props;
  return (
    <Card onClick={onClick}>
      <CardContent backgroundColor={backgroundcolor}>
        <TitleContainer>
          <Title>{title}</Title>
          <IconButton onClick={onClickIcon}>
            <IosShareIcon color="black" />
          </IconButton>
        </TitleContainer>
        <Description>{description}</Description>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
