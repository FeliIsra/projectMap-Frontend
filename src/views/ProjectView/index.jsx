import React from 'react';
import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';

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
} from './styles';

const ProjectView = ({ items }) => {
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
        <IconButton
          onClick={(event) => step.onClickAdd(step.value, event.currentTarget)}
        >
          <Add />
        </IconButton>
      </ContentContainer>
    </Item>
  );

  return (
    <Container>
      <Content>
        <StepContainer style={{ justifyContent: 'center' }}>
          <Step>
            <ItemContainer
              style={{ left: '50%', transform: 'translateX(-50%)', top: '4%' }}
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
              style={{ right: '-40%', transform: 'translateX(-50%)', top: '0' }}
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
  );
};

export default ProjectView;
