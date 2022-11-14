import React, { useState } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
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
import { ArrowBack, Comment } from '@mui/icons-material';
import Comments from 'components/comments/Comments';
import ToolTip from 'components/commons/ToolTip';
import CustomChip from 'components/commons/CustomChip';

const FodaView = ({
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
  onClickButtonGoBack,
  buttonTitle,
  total = {},
  openComments,
}) => {
  const renderTitle = (title, onAdd, value, toolTip) => (
    <CardTitleContainer>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardTitle>{title}</CardTitle>
        <ToolTip
          text={toolTip?.text}
          placement={toolTip?.placement}
          fontSize={toolTip?.fontSize}
        />
      </Box>
      {!showResults ? (
        <AddButton onClick={onAdd}>
          <AddCircleRoundedIcon />
        </AddButton>
      ) : (
        <ChipContainer>
          <CustomChip value={value} />
        </ChipContainer>
      )}
    </CardTitleContainer>
  );

  const renderFactores = (factores) =>
    factores?.map((factor) => (
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
          <CustomChip value={factor.puntuacion} total={125} />
        )}
      </FactorContent>
    ));

  return (
    <>
      <TitleContainer>
        <IconButton size="small" onClick={onClickButtonGoBack}>
          <ArrowBack />
        </IconButton>
        <Title>{showResults ? `Resultados de ${title}` : title}</Title>
        <ButtonContainer sx={{ gap: '10px' }}>
          <IconButton
            size="small"
            onClick={(event) => openComments(event.currentTarget)}
          >
            <Comment />
          </IconButton>
          {!showResults && (
            <Button onClick={onClickButton}>{buttonTitle}</Button>
          )}
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
          <CardContent backgroundcolor={COLORS.GreenEmerald}>
            {renderTitle(
              'Fortalezas',
              () => onAdd('Fortaleza'),
              total.fortalezas,
              {
                text: 'Las fortalezas en el análisis FODA representan los puntos fuertes de una empresa. Se incluyen todos los aspectos positivos que emanen y de los cuales puede depender el futuro de la organización.',
                placement: 'right',
                fontSize: '15px',
              }
            )}
            <FactoresContainer>{renderFactores(fortalezas)}</FactoresContainer>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.GreenSulu}>
            {renderTitle(
              'Oportunidades',
              () => onAdd('Oportunidad'),
              total.oportunidades,
              {
                text: 'Las oportunidades en el análisis FODA representan todas las buenas oportunidades que tiene la empresa y de las cuales puede beneficiarse. Son las condiciones externas, lo que está a la vista por todos o la popularidad y competitividad que tenga la industria u organización útiles para alcanzar el objetivo.',
                placement: 'right',
                fontSize: '15px',
              }
            )}
            <FactoresContainer>
              {renderFactores(oportunidades)}
            </FactoresContainer>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.YellowGrandis}>
            {renderTitle(
              'Debilidades',
              () => onAdd('Debilidad'),
              total.debilidades,
              {
                text: 'Las debilidades en el análisis FODA representan los puntos débiles o aspectos negativos internos de una empresa. Estas dependen de la misma organización y la colocan en un punto desfavorable en comparación con sus competidores. Estas pueden ser falta de habilidades y experiencia o incluso equipo o tecnología.',
                placement: 'right',
                fontSize: '15px',
              }
            )}
            <FactoresContainer>{renderFactores(debilidades)}</FactoresContainer>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.RedBurntSienna}>
            {renderTitle('Amenazas', () => onAdd('Amenaza'), total.amenazas, {
              text: 'Las amenazas en el análisis FODA son todos aquellos problemas, desafíos, obstáculos o dificultades por los que puede atravesar una empresa. Estas situaciones negativas pueden llegar a provocar problemas, conflictos o hasta poner en riesgo la permanencia de la organización.',
              placement: 'right',
              fontSize: '15px',
            })}
            <FactoresContainer>{renderFactores(amenazas)}</FactoresContainer>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};

export default FodaView;
