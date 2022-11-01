import React from 'react';
import { Add, ArrowBack, ArrowForward, Menu } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

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
import { StepValue } from 'helpers/enums/steps';

const ProjectView = ({
  items,
  titulo,
  onClickButtonGoBack,
  project,
  onCLickMejoraContinua,
}) => {
  const renderStep = (step) => (
    <Item>
      <CustomCircularProgress
        variant="determinate"
        value={100}
        size="168px"
        thickness={2}
        style={{ color: 'white' }}
      />
      <CustomCircularProgress
        variant="determinate"
        value={step.progress}
        size="168px"
        thickness={2}
      />
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
      </TitleButtonContainer>
      <Container>
        <Content style={{ background: project?.color || COLORS.AthensGray }}>
          <StepContainer style={{ justifyContent: 'center' }}>
            <Step>
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
            <Step>
              <ItemContainer
                style={{ left: '-40%', transform: 'translateX(50%)', top: '0' }}
              >
                {renderStep(items[1])}
              </ItemContainer>
            </Step>
            <Step>
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
            <Step>
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
            <Step>
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
            <Step>
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
            <Step>
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
      </Container>
    </>
  );
};

export default ProjectView;
