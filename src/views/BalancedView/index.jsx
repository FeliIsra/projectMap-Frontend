import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';

import { COLORS } from 'helpers/enums/colors';
import { Area, getDeviationColor, Trend } from 'helpers/enums/balanced';

import ObjetiveInput from './components/ObjetiveInput';
import AddButton from './components/AddButton';

import { Accordion, AccordionDetails, AccordionSummary } from './styles';
import Checkpoints from './components/Checkpoints';
import {
  ArrowBack,
  TrendingDown,
  TrendingFlat,
  TrendingUp,
  Comment,
} from '@mui/icons-material';
import { ButtonContainer, Title, TitleContainer } from 'views/FodaView/styles';
import ToolTip from 'components/commons/ToolTip';

const tableHeaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const stringToColor = (string) => {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
};

const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: stringToColor(name)?.toString(),
      width: 24,
      height: 24,
      fontSize: 14,
    },
    children: `${name && name.split(' ')[0][0]}${
      name.split(' ')[1] ? name.split(' ')[1][0] : ''
    }`,
  };
};

const getTrendIcon = (trend) => {
  switch (trend) {
    case Trend.Upwards:
      return <TrendingUp />;
    case Trend.Stable:
      return <TrendingFlat />;
    case Trend.Downwards:
      return <TrendingDown />;

    default:
      break;
  }
};

const BalancedView = ({
  onSubmitObjetive,
  objectives,
  onEditObjective,
  title,
  openComments,
  onClickButtonGoBack,
}) => {
  const [areaInput, setAreaInput] = useState(null);
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  const renderHeader = (area) => {
    console.log(area);
    let toolTip;
    if (area === 'Financiera')
      toolTip =
        'En esta perspectiva usted debe analizar sus objetivos e indicadores económicos y financieros. Los mismos podrían ser un ROI, unas ganancias operativas, el valor agregado económico entre otras cosas. Recuerde cargar la mayor cantidad de indicadores, sean micro o macroeconómicos para aumentar la información que usted tiene en su contexto';
    if (area === 'Clientes')
      toolTip =
        'La perspectiva del cliente es de las más importantes a tener en cuenta en una empresa de productos o servicios. Con este tipo de perspectiva usted debe apuntar a indicadores orientados a la satisfacción, retención y crecimiento de sus clientes.';
    if (area === 'Procesos Internos')
      toolTip =
        'Esta perspectiva le permitirá a usted analizar todos los procesos que poseen una importancia fundamental en su empresa, aspectos como el mantenimiento de equipos o instalaciones, la reposición de ciertos productos entre otros.';
    if (area === 'Aprendizaje')
      toolTip =
        'Esta perspectiva le permite a usted identificar los factores relacionados a la información en su empresa. Los mismos pueden ser el capital humano, los sistemas de información o el clima organizacional que hay en su empresa, todas cosas que le permiten a usted sustentar los procesos de valor en su organización.';
    return (
      <Grid
        container
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '0 10px 0 25px',
          background: '#cfd7c7',
        }}
      >
        <Grid item md={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontSize: 20, fontWeight: 800 }}>{area}</span>
          <ToolTip text={toolTip} placement="right" fontSize="14px" />
        </Grid>
        <Grid item md={2} sx={tableHeaderStyle}>
          <span>Medida</span>
          <ToolTip
            text="Unidad de medida con la que se analiza el objetivo, como podría ser una venta o una unidad monetaria"
            placement="right"
            fontSize="14px"
          />
        </Grid>
        <Grid item md={2} sx={tableHeaderStyle}>
          <span>Responsable</span>
          <ToolTip
            text="Es importante que todo el equipo sepa quien es el responsable de que se haga seguimiento de este objetivo."
            placement="right"
            fontSize="14px"
          />
        </Grid>
        <Grid item md={1} sx={tableHeaderStyle}>
          <span>Objectivo</span>
          <ToolTip
            text="Piense un objetivo desafiante pero posible, aunque usted tiene la posibilidad de editar el mismo, recomendamos mantener la primera aproximación al mismo para poder observar mejor los desvíos."
            placement="right"
            fontSize="14px"
          />
        </Grid>
        <Grid item md={1} sx={tableHeaderStyle}>
          <span>Actual</span>
          <ToolTip
            text="Representa el avance porcentual a su objetivo. Recuerde comparar esto con el lugar en el que está en el trimestre para entender su situación actual. Además, utilice el desvío y tendencia para contextualizar"
            placement="right"
            fontSize="14px"
          />
        </Grid>
        <Grid item md={1} sx={tableHeaderStyle}>
          <span>Tendencia</span>
          <ToolTip
            text="Representa la tendencia del avance en función de los últimos data points."
            placement="right"
            fontSize="14px"
          />
        </Grid>
        <Grid item md={1} sx={tableHeaderStyle}>
          <span>Desvio</span>
          <ToolTip
            text="Representa la diferencia entre donde estoy versus donde debería estar; el avance esperado versus el avances real."
            placement="right"
            fontSize="14px"
          />
        </Grid>
      </Grid>
    );
  };

  const renderRow = ({
    action,
    measure,
    responsible,
    target,
    progress,
    trend,
    deviation,
  }) => (
    <Grid
      container
      sx={{
        padding: '10px 0',
      }}
    >
      <Grid item md={4}>
        <span>{action}</span>
      </Grid>
      <Grid item md={2} sx={tableHeaderStyle}>
        <span>{measure}</span>
      </Grid>
      <Grid item md={2} sx={tableHeaderStyle}>
        <Tooltip title={responsible} placement="top" arrow>
          <Avatar {...stringAvatar(responsible)} />
        </Tooltip>
      </Grid>
      <Grid item md={1} sx={tableHeaderStyle}>
        <span>{target}</span>
      </Grid>
      <Grid item md={1} sx={tableHeaderStyle}>
        <span>
          {progress?.toLocaleString(undefined, {
            maximumFractionDigits: 2,
            minimumFractionDigits: 0,
          }) || 0}
          %
        </span>
      </Grid>
      <Grid item md={1} sx={tableHeaderStyle}>
        <span>{trend && getTrendIcon(trend)}</span>
      </Grid>
      <Grid item md={1} sx={tableHeaderStyle}>
        <Tooltip title={deviation} placement="top" arrow>
          <Box
            sx={{
              borderRadius: '50%',
              backgroundColor: getDeviationColor(deviation),
              width: '24px',
              height: '24px',
            }}
          />
        </Tooltip>
      </Grid>
    </Grid>
  );

  return (
    <Grid>
      <Box
        sx={{
          padding: '30px',
          display: 'flex',
          flex: 1,
          justifyContent: 'space-between',
        }}
      >
        <ButtonContainer>
          <IconButton size="small" onClick={onClickButtonGoBack}>
            <ArrowBack />
          </IconButton>
        </ButtonContainer>
        <Title>{title}</Title>
        <ButtonContainer sx={{ gap: '10px' }}>
          <IconButton
            size="small"
            onClick={(event) => openComments(event.currentTarget)}
          >
            <Comment />
          </IconButton>
        </ButtonContainer>
      </Box>
      <Grid
        container
        sx={{
          padding: '30px',
        }}
        rowGap={6}
      >
        {Object.values(Area).map((area) => (
          <Grid item xs={12}>
            {renderHeader(area)}
            <Grid
              container
              sx={{
                padding: '10px',
                background: COLORS.AthensGray,
                alignItems: 'center',
              }}
            >
              {objectives[area]?.map((objective) => (
                <Grid item xs={12}>
                  <Accordion>
                    <AccordionSummary
                      expanded={expanded === objective._id}
                      onChange={handleChange(objective._id)}
                    >
                      {renderRow(objective)}
                    </AccordionSummary>
                    <AccordionDetails>
                      <Checkpoints
                        checkpoints={objective.checkpoints}
                        onClickCancel={handleChange(null)}
                        onSubmit={(formData) =>
                          onEditObjective(objective._id, {
                            ...objective,
                            ...formData,
                          })
                        }
                      />
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              ))}
              {/* Cambiar por el area que hace el render */}
              <Grid item xs={12}>
                {areaInput === area && (
                  <ObjetiveInput
                    area={area}
                    onClickCancel={() => setAreaInput(null)}
                    onSubmit={onSubmitObjetive}
                  />
                )}
              </Grid>
              <AddButton onClick={() => setAreaInput(area)} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BalancedView;
