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
  const { onAddNew, onClickProject, items, onClickDelete, itemsShared } = props;
  return (
    <Container>
      <Content>
        <TitleContainer>
          <Title>Mis Proyectos</Title>
          <ButtonContainer>
            <Button onClick={onAddNew}>
              <ButtonContent>
                <AddCircleIcon /> Nuevo
              </ButtonContent>
            </Button>
          </ButtonContainer>
        </TitleContainer>
        <Grid container rowSpacing={2} columnSpacing={4}>
          {items?.map(({ _id, color, titulo, descripcion }) => (
            <Grid item xs={6} md={4} key={_id}>
              <ProjectCard
                key={_id}
                color={color}
                titulo={titulo}
                descripcion={descripcion}
                onClick={() => onClickProject(_id)}
                onClickIcon={() => {}}
                onClickDelete={() => onClickDelete(_id)}
              />
            </Grid>
          ))}
        </Grid>
        <TitleContainer>
          <Title>Proyectos Compartidos</Title>
        </TitleContainer>
        <Grid container rowSpacing={2} columnSpacing={4}>
          {itemsShared?.map(({ _id, color, titulo, descripcion }) => (
            <Grid item xs={6} md={4} key={_id}>
              <ProjectCard
                key={_id}
                color={color}
                titulo={titulo}
                descripcion={descripcion}
                onClick={() => onClickProject(_id)}
                onClickIcon={() => {}}
                onClickDelete={() => onClickDelete(_id)}
                onDeleteDisable={true}
              />
            </Grid>
          ))}
        </Grid>
      </Content>
    </Container>
  );
};

export default DashboardView;
