import React, { useEffect, useState } from 'react';
import LayoutContainer from 'containers/LayoutContainer';
import { Container } from 'views/PorterView/styles';
import PorterView from 'views/PorterView';
import { useParams, useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetOne,
  onGetOptions,
  onGetQuestions,
  onInsertQuestions,
} from 'redux/actions/porter.actions';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from 'components/commons/Button';
import Typography from '@mui/material/Typography';
import { initialValuesSelector } from 'redux/selectors/porter.selector';

const PorterContainer = () => {
  const { porterId, id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickResultsButton = () =>
    navigate(`/projects/${id}/porter/${porterId}/results`);

  const porter = useSelector((state) => state.porter);
  const { options, questions } = porter;

  delete options.fuerza;

  const steps = Object.keys(questions);

  const [activeStep, setActiveStep] = useState(0);
  const [handleFinish, setHandleFinish] = useState(false);
  const [answers, setAnswers] = useState({});
  const [skipped, setSkipped] = useState(new Set());

  const initialValues = useSelector(initialValuesSelector);
  const loading = useSelector((state) => state?.porter?.loading);

  useEffect(() => {
    handleFinish && dispatch(onInsertQuestions(porterId, answers));
    dispatch(onGetOne(porterId));
  }, [handleFinish]);

  const isStepOptional = (step) => {
    return step === 99;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const isLastStep = () => {
    return activeStep === steps.length - 1;
  };

  const handleSubmit = (formData) => {
    if (isLastStep()) {
      setAnswers({ ...answers, ...formData });
      setHandleFinish(true);
    } else {
      setAnswers({ ...answers, ...formData });
      let newSkipped = skipped;

      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }

      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
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
                {!loading && (
                  <PorterView
                    options={options}
                    questions={questions[steps[activeStep]]}
                    initialValues={initialValues}
                    activeStep={activeStep}
                    handleBack={handleBack}
                    handleSubmit={handleSubmit}
                    steps={steps}
                    titulo={steps[activeStep]}
                    onClickResults={onClickResultsButton}
                  />
                )}
              </Typography>
            </React.Fragment>
          )}
        </Box>
      </Container>
    </LayoutContainer>
  );
};

export default PorterContainer;
