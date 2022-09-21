import React, { useEffect, useState } from 'react';
import LayoutContainer from 'containers/LayoutContainer';
import { Container } from 'views/PorterView/styles';
import PorterViewResults from 'views/PorterViewResults';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetConsejos,
  onGetOptions,
  onGetQuestions,
} from 'redux/actions/porter.actions';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from 'components/commons/Button';
import Typography from '@mui/material/Typography';
import { consejosSelector } from 'redux/selectors/porter.selector';

const PorterContainerResults = () => {
  const { porterId } = useParams();

  const dispatch = useDispatch();
  const porter = useSelector((state) => state.porter);
  const { questions } = porter;

  const steps = Object.keys(questions);

  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const consejos = useSelector(consejosSelector);

  useEffect(() => {
    dispatch(onGetConsejos(porterId));
  }, []);

  const isStepOptional = (step) => {
    return step === 99;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };

  const handleNext = () => {
    let newSkipped = skipped;

    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) =>
      prevActiveStep + 1 !== steps.length
        ? prevActiveStep + 1
        : steps.length - 1
    );
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    dispatch(onGetQuestions());
    dispatch(onGetOptions());
  }, []);

  return (
    <LayoutContainer>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you&apos;re finished
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                <PorterViewResults
                  consejo={consejos[steps[activeStep]]}
                  activeStep={activeStep}
                  handleBack={handleBack}
                  handleNext={handleNext}
                  steps={steps}
                  titulo={steps[activeStep]}
                />
              </Typography>
            </React.Fragment>
          )}
        </Box>
      </Container>
    </LayoutContainer>
  );
};

export default PorterContainerResults;
