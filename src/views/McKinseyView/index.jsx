import React from 'react';
import { Grid, IconButton, Fab } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import Chip from '@mui/material/Chip';

import {
  CardTitleContainer,
  CardContent,
  CardTitle,
  FactorContent,
  FactorDescription,
} from './styles';

const McKinseyView = ({ onAdd, cuadrantes }) => {
  const renderTitle = (title) => (
    <CardTitleContainer>
      <CardTitle>{title}</CardTitle>
    </CardTitleContainer>
  );

  const renderFactores = (items) =>
    items.map((item) => (
      <FactorContent>
        <FactorDescription>{item.nombre}</FactorDescription>
      </FactorContent>
    ));

  const renderBox = (backgroundcolor, child) => (
    <Grid item xs={4} sx={{ display: 'flex' }}>
      <CardContent backgroundcolor={backgroundcolor}>{child}</CardContent>
    </Grid>
  );

  // TO-DO: revisar el alto de los cuadrantes. Podriamos calcular dependiendo la pantalla
  return (
    <>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        height={'100%'}
        sx={{ padding: '30px 0' }}
      >
        {cuadrantes.map(({ color, title, unidades }) =>
          renderBox(
            color,
            <>
              {renderTitle(title)}
              {renderFactores(unidades)}
            </>
          )
        )}
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
        onClick={onAdd}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default McKinseyView;
