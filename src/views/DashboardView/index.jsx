import React from 'react';
import Grid from '@mui/material/Grid';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Button from 'components/commons/Button';
import ProjectCard from 'components/commons/ProjectCard';

import {
  Container,
  Content,
  TitleContainer,
  Title,
  ButtonContainer,
  ButtonContent,
} from './styles';

const DashboardView = (props) => {
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>My projects</Title>
          <ButtonContainer>
            <Button onClick={props.onAddNew}>
              <ButtonContent>
                <AddCircleIcon /> Add new
              </ButtonContent>
            </Button>
          </ButtonContainer>
        </TitleContainer>
        <Grid container rowSpacing={2} columnSpacing={4}>
          <Grid item xs={6} md={4}>
            <ProjectCard
              backgroundcolor="red"
              title="Project 1"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
              onClick={() => {}}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <ProjectCard
              backgroundcolor="green"
              title="Project 2"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
              onClick={() => {}}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <ProjectCard
              backgroundcolor="grey"
              title="Project 3"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
              onClick={() => {}}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <ProjectCard
              backgroundcolor="blue"
              title="Project 4"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
              onClick={() => {}}
            />
          </Grid>
        </Grid>
      </Content>
    </Container>
  );
};

export default DashboardView;
