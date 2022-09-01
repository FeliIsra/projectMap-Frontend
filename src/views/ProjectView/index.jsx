import React, { useState } from 'react';
import { Add } from '@mui/icons-material';
import { IconButton, Menu } from '@mui/material';

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

const ProjectView = (props) => {
  const [anchorElement, setAnchorElement] = useState(null);

  const renderStep = (title) => (
    <Item>
      <ContentContainer style={{ flex: 1, justifyContent: 'center' }}>
        <StepTitle>{title}</StepTitle>
      </ContentContainer>
      <ContentContainer>
        <IconButton>
          <Add onClick={(event) => setAnchorElement(event.currentTarget)} />
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
              {renderStep('Evaluación del Entorno Externo')}
            </ItemContainer>
          </Step>
        </StepContainer>
        <StepContainer style={{ justifyContent: 'space-between' }}>
          <Step>
            <ItemContainer
              style={{ left: '-50%', transform: 'translateX(50%)', top: '0' }}
            >
              {renderStep('Planeamiento Financiero y Medición de Resultados')}
            </ItemContainer>
          </Step>
          <Step>
            <ItemContainer
              style={{ right: '-50%', transform: 'translateX(-50%)', top: '0' }}
            >
              {renderStep('Evaluación de la Situación Interna')}
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
              {renderStep('Mejora Continua')}
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
              {renderStep('Definición de los Planes de Transformación')}
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
              {renderStep('Definición de Lineamientos Estratégicos')}
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
              {renderStep('Formulación de la Estrategia Competitiva ')}
            </ItemContainer>
          </Step>
        </StepContainer>
      </Content>
      <Menu
        anchorEl={anchorElement}
        onClose={() => setAnchorElement(null)}
        open={!!anchorElement}
      ></Menu>
    </Container>
  );
};

export default ProjectView;
