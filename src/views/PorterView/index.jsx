import React from 'react';
import {
  ButtonsContainer,
  CardTitle,
  CreateContent,
} from 'views/PorterView/styles';
import Button from 'components/commons/Button';
import { Formik, Field } from 'formik';
import { CustomForm } from 'styles/form';
import SelectInput from 'components/inputs/SelectInput';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const PorterView = ({
  options,
  questions,
  activeStep,
  handleBack,
  handleSubmit,
  steps,
}) => {
  return (
    <CreateContent>
      <CardTitle>Titulo</CardTitle>
      <Formik onSubmit={handleSubmit} initialValues={{}}>
        {({ handleSubmit }) => (
          <CustomForm onSubmit={handleSubmit}>
            {questions.map(({ id, pregunta }) => (
              <Grid container direction="row" alignItems="center">
                <Grid item xs={6}>
                  <Typography key={id}>{pregunta}</Typography>
                </Grid>
                {Object.entries(options).map(([key, value]) => (
                  <Grid item xs={3}>
                    <Field
                      name={`${id}.${key}`}
                      component={SelectInput}
                      options={value}
                      placeholder={key}
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                pt: 2,
                width: '100%',
                justifyContent: 'flex-end',
              }}
            >
              <ButtonsContainer>
                {activeStep !== 0 && (
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    type="button"
                  >
                    Back
                  </Button>
                )}
                <Button color="primary" type="submit">
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </ButtonsContainer>
            </Box>
          </CustomForm>
        )}
      </Formik>
    </CreateContent>
  );
};

export default PorterView;
