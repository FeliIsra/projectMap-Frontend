import React from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Chip from '@mui/material/Chip';
import { COLORS } from 'helpers/enums/colors';
import { ArrowBack, Comment } from '@mui/icons-material';

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
import ToolTip from 'components/commons/ToolTip';

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
  onClickButtonGoBack,
  buttonTitle,
  total = {},
  openComments,
}) => {
  const renderTitle = (title, onAdd, total, toolTip) => (
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
          <Chip label={total} />
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
          <Chip label={factor.puntuacion} />
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
          <CardContent backgroundcolor={COLORS.MiddleBlueGreen}>
            {renderTitle(
              'Politicos',
              () => onAdd('Politico'),
              total.politicos,
              {
                text: 'En este caso se debe pensar en todos los factores políticos que rodean a tu empresa. Estos elementos provienen de regulaciones legislativas y otros mecanismos, mediante los cuales el gobierno puede incidir en tu negocio.',
                placement: 'right',
                fontSize: '15px',
              }
            )}
            <FactoresContainer>{renderFactores(politicos)}</FactoresContainer>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.Aquamarine}>
            {renderTitle(
              'Economicos',
              () => onAdd('Economico'),
              total.economicos,
              {
                text: 'Al agregar estos factores, tenga en cuenta todas las variables macroeconómicas que afecten de manera positiva o negativa el desempeño de la empresa u organización tanto a nivel internacional como nacional .Además, tenga en cuenta las variaciones que se puedan presentar en los ciclos económicos, como los periodos de ascenso y de crisis económica. ',
                placement: 'right',
                fontSize: '15px',
              }
            )}
            <FactoresContainer>{renderFactores(economicos)}</FactoresContainer>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.MagicMint}>
            {renderTitle('Sociales', () => onAdd('Social'), total.sociales, {
              text: 'En este sector usted deberá ingresar los factores relacionados con tanto la creencia, cultura, religión, costumbres y preferencias de cada individuo.Para una empresa esto se traduce en aquellos elementos que pueden ser beneficiosos o no en los resultados que esperan generar y que estén atados a posibles tendencias sociales que de más está aclarar van evolucionando constantemente.',
              placement: 'right',
              fontSize: '15px',
            })}
            <FactoresContainer>{renderFactores(sociales)}</FactoresContainer>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.Bone}>
            {renderTitle(
              'Tecnologicos',
              () => onAdd('Tecnologico'),
              total.tecnologicos,
              {
                text: 'Los factores tecnológicos son los que están relacionados con el mundo de la ciencia y la innovación. Los mismos son actualmente muy decisivos porque la velocidad de mejora tecnológica es brutal. Se debe ser consciente que la tecnología que se está desarrollando hoy va a cambiar nuestro futuro inmediato y tu empresa no será ajena a estos cambios.',
                placement: 'right',
                fontSize: '15px',
              }
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
              total.ambientales,
              {
                text: 'El cuidado del medio ambiente se está convirtiendo en un punto referente para los clientes al momento de elegir entre una marca u otra. Aspectos vinculados al cuidado del medioambiente afectan directa e indirectamente la estabilidad de muchas empresas. Si bien es importante que tengas en cuenta lo que a tu público objetivo le inquieta, también debes considerar cómo los cambios en el medio ambiente y las tendencias del entorno pueden perjudicar a tu compañía.',
                placement: 'right',
                fontSize: '15px',
              }
            )}
            <FactoresContainer>{renderFactores(ambientales)}</FactoresContainer>
          </CardContent>
        </Grid>

        <Grid item xs={12} md={6} display={'flex'}>
          <CardContent backgroundcolor={COLORS.BitterSweet}>
            {renderTitle('Legales', () => onAdd('Legal'), total.legales, {
              text: 'Estos factores se refieren a todos aquellos cambios en la normativa legal relacionada con nuestro proyecto, que le puede afectar de forma positiva o negativa. Por supuesto, si estamos inmersos en un negocio internacional, nos interesará estudiar los aspectos legales tanto del país de origen como de destino.',
              placement: 'right',
              fontSize: '15px',
            })}
            <FactoresContainer>{renderFactores(legales)}</FactoresContainer>
          </CardContent>
        </Grid>
      </Grid>
    </>
  );
};

export default PestelView;
