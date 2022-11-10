import React, { useState } from 'react';
import {
  Add,
  ArrowBack,
  ArrowForward,
  Menu,
  Comment,
  PresentToAll,
  CancelPresentation,
} from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

import { COLORS } from 'helpers/enums/colors';

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
import { STEPS, stepsInfo, StepValue } from 'helpers/enums/steps';

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
      <TitleButtonContainer>
        <ButtonContainer>
          <IconButton size="small" onClick={onClickButtonGoBack}>
            <ArrowBack />
          </IconButton>
        </ButtonContainer>
        <Title>{titulo}</Title>

        <IconButton
          size="small"
          onClick={() => openShareModal()}
          sx={{ marginLeft: '35%', marginRight: '5px' }}
        >
          <PresentToAll />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => openUnShareModal()}
          sx={{ marginRight: '5px' }}
        >
          <CancelPresentation />
        </IconButton>
        <IconButton
          size="small"
          onClick={(event) => openComments(event.currentTarget)}
        >
          <Comment />
        </IconButton>
      </TitleButtonContainer>
      <Container>
        <Content style={{ background: project?.color || COLORS.AthensGray }}>
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
            maxWidth: '20%',
            backgroundColor: COLORS.BlueDianne,
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
                textAlign: 'center',
              }}
            >
              {stepHover
                ? stepsInfo[stepHover].description
                : 'Descripcion direccion estrategica'}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ProjectView;
