import React from 'react';
import { Grid, IconButton, Fab } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import {
  CardTitleContainer,
  CardContent,
  CardTitle,
  FactorContent,
  FactorDescription,
  ContentContainer,
} from './styles';
import { ButtonContainer } from 'views/DashboardView/styles';
import { ArrowBack } from '@mui/icons-material';

const McKinseyView = ({
  onAdd,
  cuadrantes,
  onClickResultsButton,
  showResults = false,
  onClickGoBackButton,
}) => {
  const renderTitle = (title) => (
    <CardTitleContainer>
      <CardTitle>{title}</CardTitle>
    </CardTitleContainer>
  );

  const renderFactores = (items) =>
    items.map((item) => (
      <FactorContent>
        <FactorDescription>{item.nombre}</FactorDescription>
        {showResults && <Chip label={item.puntuacion} />}
      </FactorContent>
    ));

  // TO-DO: stylear el span para que este al costado
  //  position: absolute;
  //  right: 100%;
  //  top: 50%;
  //  rotate: 270deg;
  const renderBox = (backgroundcolor, child, showText = false) => (
    <Grid item xs={4} sx={{ display: 'flex', height: '33%' }}>
      {/* {showText && <span>hola</span>} */}
      <CardContent backgroundcolor={backgroundcolor}>{child}</CardContent>
    </Grid>
  );

  // TO-DO: revisar el alto de los cuadrantes. Podriamos calcular dependiendo la pantalla
  return (
    <>
      <ButtonContainer>
        <IconButton size="small" onClick={onClickGoBackButton}>
          <ArrowBack />
        </IconButton>
      </ButtonContainer>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        height={'100%'}
        sx={{ padding: '30px' }}
      >
        {cuadrantes.map(({ color, title, unidades }, index) =>
          renderBox(
            color,
            <>
              {renderTitle(title)}
              {renderFactores(unidades)}
            </>
          )
        )}
      </Grid>
      {!showResults && (
        <Fab
          color="primary"
          aria-label="add"
          style={{
            position: 'fixed',
            top: 'auto',
            bottom: 80,
            right: 20,
            left: 'auto',
          }}
          onClick={onAdd}
        >
          <AddIcon />
        </Fab>
      )}
      <Fab
        color="secondary"
        aria-label="resultados"
        style={{
          position: 'fixed',
          top: 'auto',
          bottom: 20,
          right: 20,
          left: 'auto',
        }}
        onClick={onClickResultsButton}
      >
        {showResults ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
      </Fab>
    </>
  );
};

export default McKinseyView;
