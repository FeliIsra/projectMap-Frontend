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
  return (
    <Card>
      <CardContent backgroundColor={props.backgroundcolor}>
        <TitleContainer>
          <Title>{props.title}</Title>
          <IconButton onClick={props.onClick}>
            <IosShareIcon color="black" />
          </IconButton>
        </TitleContainer>
        <Description>{props.description}</Description>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
