import React, { useState } from 'react';
import {
  Add,
  ArrowBack,
  ArrowForward,
  Menu,
  Comment,
  PresentToAll,
  CancelPresentation,
  Send,
  CancelScheduleSend,
} from '@mui/icons-material';
import { Box, Fab, IconButton, Typography, Tooltip } from '@mui/material';

import { COLORS } from 'helpers/enums/colors';
import parse from 'html-react-parser';

import {
  Container,
  Content,
  Step,
  StepContainer,
  ItemContainer,
  Item,
  ContentContainer,
  StepTitle,
  CustomCircularProgress,
  TitleButtonContainer,
  ButtonContainer,
  Title,
} from './styles';
import { stepsInfo, StepValue } from 'helpers/enums/steps';
import { color } from '@mui/system';

const ProjectView = ({
  items,
  titulo,
  onClickButtonGoBack,
  project,
  onCLickMejoraContinua,
  stepsColors,
  openComments,
  openShareModal,
  openUnShareModal,
}) => {
  const [stepHover, setStepHover] = useState(null);
  const renderStep = (step) => (
    <Item sx={{ cursor: 'pointer' }}>
      {step.value !== StepValue.MEJORA_CONTINUA && (
        <CustomCircularProgress
          variant="determinate"
          value={100}
          size="168px"
          thickness={2}
          style={{ color: stepsColors[step.value] }}
        />
      )}
      <ContentContainer style={{ flex: 1, justifyContent: 'center' }}>
        <StepTitle>{step.title}</StepTitle>
      </ContentContainer>
      <ContentContainer>
        {step.value !== StepValue.MEJORA_CONTINUA ? (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <IconButton
              onClick={(event) =>
                step.onClickAdd(step.value, event.currentTarget)
              }
            >
              <Add />
            </IconButton>
            <IconButton
              onClick={(event) =>
                step.onClickList(step.value, event.currentTarget)
              }
            >
              <Menu />
            </IconButton>
          </Box>
        ) : (
          <IconButton onClick={(event) => onCLickMejoraContinua()}>
            <ArrowForward />
          </IconButton>
        )}
      </ContentContainer>
    </Item>
  );

  return (
    <>
      <TitleButtonContainer
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <ButtonContainer>
          <IconButton size="small" onClick={onClickButtonGoBack}>
            <ArrowBack />
          </IconButton>
        </ButtonContainer>
        <Box sx={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
          <Title>{titulo}</Title>
        </Box>
      </TitleButtonContainer>

      <Container sx={{ marginTop: '90px' }}>
        <Content style={{ background: '#275C62' }}>
          <StepContainer style={{ justifyContent: 'center' }}>
            <Step
              onClick={(e) =>
                setStepHover(StepValue.EVALUACION_ENTORNO_EXTERNO)
              }
              // onMouseLeave={(e) => setStepHover(null)}
            >
              <ItemContainer
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: '4%',
                }}
              >
                {renderStep(items[0])}
              </ItemContainer>
            </Step>
          </StepContainer>
          <StepContainer style={{ justifyContent: 'space-between' }}>
            <Step
              onClick={(e) =>
                setStepHover(StepValue.PLAN_FINANCIERO_MEDICION_RESULTADOS)
              }
              // onMouseLeave={(e) => setStepHover(null)}
            >
              <ItemContainer
                style={{ left: '-40%', transform: 'translateX(50%)', top: '0' }}
              >
                {renderStep(items[1])}
              </ItemContainer>
            </Step>
            <Step
              onClick={(e) =>
                setStepHover(StepValue.EVALUACION_SITUACION_INTERNA)
              }
              // onMouseLeave={(e) => setStepHover(null)}
            >
              <ItemContainer
                style={{
                  right: '-40%',
                  transform: 'translateX(-50%)',
                  top: '0',
                }}
              >
                {renderStep(items[2])}
              </ItemContainer>
            </Step>
          </StepContainer>
          <StepContainer style={{ justifyContent: 'center' }}>
            <Step
              onClick={(e) => setStepHover(StepValue.MEJORA_CONTINUA)}
              // onMouseLeave={(e) => setStepHover(null)}
            >
              <ItemContainer
                style={{
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  top: '50%',
                }}
              >
                {renderStep(items[3])}
              </ItemContainer>
            </Step>
          </StepContainer>
          <StepContainer style={{ justifyContent: 'space-between' }}>
            <Step
              onClick={(e) =>
                setStepHover(StepValue.DEFINICION_PLANES_TRANSFORMACION)
              }
              // onMouseLeave={(e) => setStepHover(null)}
            >
              <ItemContainer
                style={{
                  left: '-40%',
                  transform: 'translateX(50%)',
                  bottom: '5%',
                }}
              >
                {renderStep(items[4])}
              </ItemContainer>
            </Step>
            <Step
              onClick={(e) =>
                setStepHover(StepValue.DEFINICION_LINIAMIENTOS_ESTRATEGICOS)
              }
              // onMouseLeave={(e) => setStepHover(null)}
            >
              <ItemContainer
                style={{
                  right: '-40%',
                  transform: 'translateX(-50%)',
                  bottom: '5%',
                }}
              >
                {renderStep(items[5])}
              </ItemContainer>
            </Step>
          </StepContainer>
          <StepContainer style={{ justifyContent: 'center' }}>
            <Step
              onClick={(e) =>
                setStepHover(StepValue.FORMULACION_ESTRATEGIA_COMPETITIVA)
              }
              // onMouseLeave={(e) => setStepHover(null)}
            >
              <ItemContainer
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bottom: '10%',
                }}
              >
                {renderStep(items[6])}
              </ItemContainer>
            </Step>
          </StepContainer>
        </Content>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            maxWidth: '30%',
            backgroundColor: '#275C62',
            height: '100%',
            color: COLORS.white,
            borderRadius: '15px',
            marginRight: '15px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flex: 1,
              padding: '20px',
              color: COLORS.white,
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              {stepHover && (
                <IconButton size="small" onClick={() => setStepHover(null)}>
                  <ArrowBack />
                </IconButton>
              )}
              <Typography
                sx={{
                  fontFamily: 'Fira Sans, sans-serif',
                  fontSize: '24px',
                  textAlign: 'center',
                  marginRight: stepHover === 7 ? '25%' : '',
                }}
              >
                {stepHover
                  ? stepsInfo[stepHover].title
                  : 'Proceso de Planificación Estratégica'}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontFamily: 'Fira Sans, sans-serif',
                fontSize: '18px',
                overflowY: 'auto',
              }}
            >
              {parse(
                stepHover
                  ? `<br> ${stepsInfo[stepHover].description}`
                  : `
                      <br>
                      El proceso de Planificación Estratégica puede ser dividido en varias fases, todas con sus distintas herramientas orientadas a evaluar la situación actual de su proyecto, definir lineamientos estratégicos y un plan de acción para alcanzar los objetivos que usted decida definir. En ProjectMap, y con el propósito de simplificar el mismo, nos limitamos a 7 esferas con sus respectivas herramientas, 6 para completar, y una para visualizar. Las mismas pueden ser completadas en cualquier orden, dependiendo de la información que usted tenga a su disposición
                      <br><br>
                      <p style=text-align:center><b>Modo de uso</b></p>
                      Al hacer click en las distintas esferas detalladas del lado izquierdo de la pantalla, podrá ver información de las mismas junto con las distintas herramientas disponibles para su uso. Recuerde, cuanto más esferas complete y con más periodicidad las actualice, mejores serán las respuestas que las mismas le den, y mayor seguimiento le podrá dar usted a su proyecto. 
                      <br><br>
                      <p style=text-align:center><b>Completitud de las esferas</b></p>
                      Inicialmente, todas las esferas aparecerán con su completitud vacía, por lo que estarán marcadas en rojo. Cuando usted avance con las mismas, verá su color cambiar de rojo a amarillo, que representa completitud intermedia, y de amarillo a verde, representando su completitud recomendada. 
                      <br><br>
                      Recuerde que estos colores representan la completitud de la herramienta y no tiene que ver con las respuestas o consejos de las mismas
                  `
              )}
            </Typography>
          </Box>
        </Box>
      </Container>
      <Tooltip title="Comentarios" arrow placement="right">
        <Fab
          aria-label="share"
          style={{
            position: 'fixed',
            top: 80,
            bottom: 'auto',
            right: 20,
            left: 'auto',
            color: COLORS.white,
            backgroundColor: '#00A4E8',
          }}
          onClick={(event) => openComments(event.currentTarget)}
        >
          <Comment />
        </Fab>
      </Tooltip>
      <Tooltip title="Dejar de Compartir" arrow placement="right">
        <Fab
          aria-label="unshare"
          style={{
            position: 'fixed',
            top: 'auto',
            bottom: 150,
            right: 'auto',
            left: 20,
            color: COLORS.white,
            backgroundColor: COLORS.RedBurntSienna,
          }}
          onClick={() => openUnShareModal()}
        >
          <CancelScheduleSend />
        </Fab>
      </Tooltip>
      <Tooltip title="Compartir" arrow placement="right">
        <Fab
          aria-label="share"
          style={{
            position: 'fixed',
            top: 'auto',
            bottom: 80,
            right: 'auto',
            left: 20,
            color: COLORS.white,
            backgroundColor: '#00A4E8',
          }}
          onClick={() => openShareModal()}
        >
          <Send style={{ rotate: '270deg' }} />
        </Fab>
      </Tooltip>
    </>
  );
};

export default ProjectView;
