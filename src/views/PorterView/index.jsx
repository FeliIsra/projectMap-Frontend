import React from 'react';
import {
  ButtonsContainer,
  CardTitle,
  CreateContent,
  QuestionContainer,
} from 'views/PorterView/styles';
import Button from 'components/commons/Button';
import { Formik, Field } from 'formik';
import { CustomForm } from 'styles/form';
import SelectInput from 'components/inputs/SelectInput';
import Input from 'components/inputs/Input';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const PorterView = ({ options, questions }) => {
  return (
    <CreateContent>
      <CardTitle>Titulo</CardTitle>
      <Formik onSubmit={() => {}} initialValues={{}}>
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
                      name={key}
                      component={SelectInput}
                      options={value}
                      placeholder={key}
                    />
                  </Grid>
                ))}
              </Grid>
            ))}
            <ButtonsContainer>
              <Button color="secondary" onClick={() => ''}>
                Cancelar
              </Button>
              <Button color="primary" type="submit">
                Siguiente
              </Button>
            </ButtonsContainer>
          </CustomForm>
        )}
      </Formik>
    </CreateContent>
  );
};

export default PorterView;
