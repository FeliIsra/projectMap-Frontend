import React from 'react';
import { Grid, IconButton } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { COLORS } from 'helpers/enums/colors';

import {
  Container,
  CardTitleContainer,
  CardContent,
  CardTitle,
  AddButton,
  FactoresContainer,
  FactorContent,
  FactorDescription,
} from './styles';

const FodaView = ({
  onAdd,
  debilidades,
  amenazas,
  oportunidades,
  fortalezas,
  onEdit,
  onDelete,
}) => {
  const renderTitle = (title, onAdd) => (
    <CardTitleContainer>
      <CardTitle>{title}</CardTitle>
      <AddButton onClick={onAdd}>
        <AddCircleRoundedIcon />
      </AddButton>
    </CardTitleContainer>
  );

  const renderFactores = (factores) =>
    factores.map((factor) => (
      <FactorContent>
        <FactorDescription>{factor.descripcion}</FactorDescription>
        <IconButton size="small" onClick={() => onEdit(factor)}>
          <EditIcon />
        </IconButton>
        <IconButton size="small" onClick={() => onDelete(factor)}>
          <DeleteIcon />
        </IconButton>
      </FactorContent>
    ));

  return (
    <Container>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        height={'100%'}
        sx={{ padding: '30px 0' }}
      >
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.GreenEmerald}>
            {renderTitle('Fortalezas', () => onAdd('Fortaleza'))}
            <FactoresContainer>{renderFactores(fortalezas)}</FactoresContainer>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.GreenSulu}>
            {renderTitle('Oportunidades', () => onAdd('Oportunidad'))}
            <FactoresContainer>
              {renderFactores(oportunidades)}
            </FactoresContainer>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.YellowGrandis}>
            {renderTitle('Debilidades', () => onAdd('Debilidad'))}
            <FactoresContainer>{renderFactores(debilidades)}</FactoresContainer>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.RedBurntSienna}>
            {renderTitle('Amenazas', () => onAdd('Amenaza'))}
            <FactoresContainer>{renderFactores(amenazas)}</FactoresContainer>
          </CardContent>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FodaView;
