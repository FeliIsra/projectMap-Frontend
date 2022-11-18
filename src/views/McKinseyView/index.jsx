import React from 'react';
import { Grid, IconButton, Fab, Box } from '@mui/material';
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
} from './styles';
import { ButtonContainer } from 'views/DashboardView/styles';
import { ArrowBack, Comment } from '@mui/icons-material';
import { Title, TitleContainer } from 'views/FodaView/styles';
import ToolTip from 'components/commons/ToolTip';
import { tooltips } from './tooltips';
import CustomChip from 'components/commons/CustomChip';

const McKinseyView = ({
  onAdd,
  cuadrantes,
  onClickResultsButton,
  showResults = false,
  onClickGoBackButton,
  openComments,
  title,
}) => {
  const renderTitle = (title) => (
    <CardTitleContainer>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardTitle>{title}</CardTitle>
        <ToolTip text={tooltips[title]} placement="right" fontSize="14px" />
      </Box>
    </CardTitleContainer>
  );

  const renderFactores = (items) =>
    items?.map((item) => (
      <FactorContent>
        <FactorDescription>{item.nombre}</FactorDescription>
        {showResults && <CustomChip value={item.puntuacion} total={100} />}
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
      <TitleContainer>
        <ButtonContainer>
          <IconButton size="small" onClick={onClickGoBackButton}>
            <ArrowBack />
          </IconButton>
        </ButtonContainer>
        <Title>{showResults ? `Resultados de ${title}` : title}</Title>
        <ButtonContainer sx={{ gap: '10px' }}>
          <IconButton
            size="small"
            onClick={(event) => openComments(event.currentTarget)}
          >
            <Comment />
          </IconButton>
        </ButtonContainer>
      </TitleContainer>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        height={'100%'}
        sx={{ padding: '30px' }}
      >
        {cuadrantes?.map(({ color, title, unidades }, index) =>
          renderBox(
            color,
            <>
              {renderTitle(title)}
              {
                <div
                  style={{
                    overflowY: 'scroll',
                    display: 'flex',
                    gap: 5,
                    flexDirection: 'column',
                  }}
                >
                  {renderFactores(unidades)}
                </div>
              }
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
        onClick={!showResults ? onClickResultsButton : onClickGoBackButton}
      >
        {showResults ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
      </Fab>
    </>
  );
};

export default McKinseyView;
