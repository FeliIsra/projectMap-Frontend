import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import { IconButton, Menu } from '@mui/material';

import { STEPS } from 'helpers/enums/steps';

import {
  Container,
  Content,
  Step,
  StepContainer,
  ItemContainer,
  Item,
  ContentContainer,
  StepTitle,
} from './styles';

const ProjectView = ({ items }) => {
  const renderStep = (step) => (
    <Item>
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
              style={{ left: '50%', transform: 'translateX(-50%)', top: '0' }}
            >
              {renderStep(items[0])}
            </ItemContainer>
          </Step>
        </StepContainer>
        <StepContainer style={{ justifyContent: 'space-between' }}>
          <Step>
            <ItemContainer
              style={{ left: '-50%', transform: 'translateX(50%)', top: '0' }}
            >
              {renderStep(items[1])}
            </ItemContainer>
          </Step>
          <Step>
            <ItemContainer
              style={{ right: '-50%', transform: 'translateX(-50%)', top: '0' }}
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
                left: '-50%',
                transform: 'translateX(50%)',
                bottom: '0',
              }}
            >
              {renderStep(items[4])}
            </ItemContainer>
          </Step>
          <Step>
            <ItemContainer
              style={{
                right: '-50%',
                transform: 'translateX(-50%)',
                bottom: '0',
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
                bottom: '0',
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
