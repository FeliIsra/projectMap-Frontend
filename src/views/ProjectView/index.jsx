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
    <Item>
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
              onMouseEnter={(e) =>
                setStepHover(StepValue.EVALUACION_ENTORNO_EXTERNO)
              }
              onMouseLeave={(e) => setStepHover(null)}
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
              onMouseEnter={(e) =>
                setStepHover(StepValue.PLAN_FINANCIERO_MEDICION_RESULTADOS)
              }
              onMouseLeave={(e) => setStepHover(null)}
            >
              <ItemContainer
                style={{ left: '-40%', transform: 'translateX(50%)', top: '0' }}
              >
                {renderStep(items[1])}
              </ItemContainer>
            </Step>
            <Step
              onMouseEnter={(e) =>
                setStepHover(StepValue.EVALUACION_SITUACION_INTERNA)
              }
              onMouseLeave={(e) => setStepHover(null)}
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
              onMouseEnter={(e) => setStepHover(StepValue.MEJORA_CONTINUA)}
              onMouseLeave={(e) => setStepHover(null)}
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
              onMouseEnter={(e) =>
                setStepHover(StepValue.DEFINICION_PLANES_TRANSFORMACION)
              }
              onMouseLeave={(e) => setStepHover(null)}
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
              onMouseEnter={(e) =>
                setStepHover(StepValue.DEFINICION_LINIAMIENTOS_ESTRATEGICOS)
              }
              onMouseLeave={(e) => setStepHover(null)}
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
              onMouseEnter={(e) =>
                setStepHover(StepValue.FORMULACION_ESTRATEGIA_COMPETITIVA)
              }
              onMouseLeave={(e) => setStepHover(null)}
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
            <Typography
              sx={{
                fontFamily: 'Fira Sans, sans-serif',
                fontSize: '24px',
                textAlign: 'center',
              }}
            >
              {stepHover
                ? stepsInfo[stepHover].title
                : 'Titulo direccion estrategica'}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Fira Sans, sans-serif',
                fontSize: '18px',
              }}
            >
              {parse(
                stepHover
                  ? stepsInfo[stepHover].description
                  : 'Descripcion direccion estrategica'
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
