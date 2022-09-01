import React from 'react';
import { Grid, IconButton } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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

const PestelView = ({
  onAdd,
  politicos,
  economicos,
  sociales,
  tecnologicos,
  ambientales,
  legales,
  onEdit,
  onDelete,
  title,
  showResults = false,
  onClickButton,
  buttonTitle,
  total = {},
}) => {
  const renderTitle = (title, onAdd, total) => (
    <CardTitleContainer>
      <CardTitle>{title}</CardTitle>
      {!showResults ? (
        <AddButton onClick={onAdd}>
          <AddCircleRoundedIcon />
        </AddButton>
      ) : (
        <ChipContainer>
          <Chip label={total} />
        </ChipContainer>
      )}
    </CardTitleContainer>
  );

  const renderFactores = (factores) =>
    factores.map((factor) => (
      <FactorContent>
        <FactorDescription>{factor.descripcion}</FactorDescription>
        {!showResults ? (
          <>
            <IconButton size="small" onClick={() => onEdit(factor)}>
              <EditIcon />
            </IconButton>
            <IconButton size="small" onClick={() => onDelete(factor)}>
              <DeleteIcon />
            </IconButton>
          </>
        ) : (
          <Chip label={factor.puntuacion} />
        )}
      </FactorContent>
    ));

  return (
    <>
      <TitleContainer>
        <Title>{showResults ? `Resultados de ${title}` : title}</Title>
        <ButtonContainer>
          <Button onClick={onClickButton}>{buttonTitle}</Button>
        </ButtonContainer>
      </TitleContainer>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        height={'100%'}
        sx={{ padding: '30px 0' }}
      >
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.MiddleBlueGreen}>
            {renderTitle('Politicos', () => onAdd('Politico'), total.politicos)}
            <FactoresContainer>{renderFactores(politicos)}</FactoresContainer>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.Aquamarine}>
            {renderTitle(
              'Economicos',
              () => onAdd('Economico'),
              total.economicos
            )}
            <FactoresContainer>{renderFactores(economicos)}</FactoresContainer>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.MagicMint}>
            {renderTitle('Sociales', () => onAdd('Social'), total.sociales)}
            <FactoresContainer>{renderFactores(sociales)}</FactoresContainer>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.Bone}>
            {renderTitle(
              'Tecnologicos',
              () => onAdd('Tecnologico'),
              total.tecnologicos
            )}
            <FactoresContainer>
              {renderFactores(tecnologicos)}
            </FactoresContainer>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.VividTangerine}>
            {renderTitle(
              'Ambientales',
              () => onAdd('Ambiental'),
              total.ambientales
            )}
            <FactoresContainer>{renderFactores(ambientales)}</FactoresContainer>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.BitterSweet}>
            {renderTitle('Legales', () => onAdd('Legal'), total.legales)}
            <FactoresContainer>{renderFactores(legales)}</FactoresContainer>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};

export default PestelView;
