import React from 'react';
import { Grid, IconButton, Fab } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import { COLORS } from 'helpers/enums/colors';

import {
  CardTitleContainer,
  CardContent,
  CardTitle,
  AddButton,
  FactoresContainer,
  FactorContent,
  FactorDescription,
  ButtonContainer,
  TitleContainer,
  Title,
  ChipContainer,
} from './styles';
import Button from 'components/commons/Button';

const McKinseyView = ({
  onAdd,
  debilidades,
  amenazas,
  oportunidades,
  fortalezas,
  onEdit,
  onDelete,
  title,
  showResults = false,
  onClickButton,
  buttonTitle,
  total = {},
}) => {
  const renderTitle = (title) => (
    <CardTitleContainer>
      <CardTitle>{title}</CardTitle>
    </CardTitleContainer>
  );

  const renderFactores = (factores) =>
    factores.map((factor) => (
      <FactorContent>
        <FactorDescription>{factor.descripcion}</FactorDescription>
      </FactorContent>
    ));

  const renderBox = (backgroundcolor, child) => (
    <Grid item xs={4} display={'flex'}>
      <CardContent backgroundcolor={backgroundcolor}>{child}</CardContent>
    </Grid>
  );

  return (
    <>
      {/* <TitleContainer>
        <Title>{showResults ? `Resultados de ${title}` : title}</Title>
        <ButtonContainer>
          <Button onClick={onClickButton}>{buttonTitle}</Button>
        </ButtonContainer>
      </TitleContainer> */}
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        height={'100%'}
        sx={{ padding: '30px 0' }}
      >
        {renderBox(COLORS.YellowGrandis, '')}
        {renderBox(COLORS.GreenSulu, '')}
        {renderBox(COLORS.GreenEmerald, '')}
        {renderBox(COLORS.VividTangerine, '')}
        {renderBox(COLORS.YellowGrandis, '')}
        {renderBox(COLORS.GreenSulu, '')}
        {renderBox(COLORS.RedBurntSienna, '')}
        {renderBox(COLORS.VividTangerine, '')}
        {renderBox(COLORS.YellowGrandis, '')}
      </Grid>
      <Fab
        color="primary"
        aria-label="add"
        style={{
          position: 'fixed',
          top: 'auto',
          bottom: 20,
          right: 20,
          left: 'auto',
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default McKinseyView;
