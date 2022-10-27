import React from 'react';
import { Check, Delete } from '@mui/icons-material';
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Rating,
  Typography,
} from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import Input from '../Input';

import { QuarterFieldContainer, ButtonsContainer } from './styles';
import { getKeyResultInitialValues } from 'helpers/enums/okr';
import { validateField } from 'helpers/validateField';

const KeyResultInput = ({ okr, onSubmit, onClickCancel }) => {
  const initialValues = {
    description: '',
    goal: 0,
    keyStatus: getKeyResultInitialValues(okr.quarter),
    priority: 0,
    responsible: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSubmit(okr._id, values);
        onClickCancel();
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <Grid
            container
            sx={{
              padding: '10px 0',
              alignItems: 'center',
            }}
          >
            <Grid item md={3} sx={{ display: 'flex', paddingLeft: '10px' }}>
              <div style={{ display: 'flex', flex: 1 }}>
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="description"
                    placeholder="Descripcion"
                    component={Input}
                    hiddenLabel
                    variant="standard"
                    size="small"
                    validate={validateField}
                  />
                  <ErrorMessage name="description">
                    {(msg) => (
                      <Typography
                        sx={{
                          textAlign: 'left',
                          color: 'red',
                          marginLeft: 2,
                          marginTop: '2px',
                          fontSize: '14px',
                        }}
                      >
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Box>
              </div>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="responsible"
                    placeholder="Responsable"
                    component={Input}
                    hiddenLabel
                    variant="standard"
                    size="small"
                    inputProps={{
                      style: { textAlign: 'center' },
                    }}
                    validate={validateField}
                  />
                  <ErrorMessage name="responsible">
                    {(msg) => (
                      <Typography
                        sx={{
                          textAlign: 'left',
                          color: 'red',
                          marginLeft: 2,
                          marginTop: '2px',
                          fontSize: '14px',
                        }}
                      >
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Box>
              </QuarterFieldContainer>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
                <Field
                  name="keyStatus[0].value"
                  placeholder="Valor"
                  component={Input}
                  inputProps={{
                    style: { textAlign: 'center' },
                  }}
                  hiddenLabel
                  variant="standard"
                  size="small"
                  type="number"
                  validate={validateField}
                />
              </QuarterFieldContainer>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
                <Field
                  name="keyStatus[1].value"
                  placeholder="Valor"
                  component={Input}
                  inputProps={{
                    style: { textAlign: 'center' },
                  }}
                  hiddenLabel
                  variant="standard"
                  size="small"
                  type="number"
                  validate={validateField}
                />
              </QuarterFieldContainer>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
                <Field
                  name="keyStatus[2].value"
                  placeholder="Valor"
                  component={Input}
                  inputProps={{
                    style: { textAlign: 'center' },
                  }}
                  hiddenLabel
                  variant="standard"
                  size="small"
                  type="number"
                  validate={validateField}
                />
              </QuarterFieldContainer>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
                <Field
                  name="goal"
                  placeholder="Objectivo"
                  component={Input}
                  inputProps={{
                    style: { textAlign: 'center' },
                  }}
                  hiddenLabel
                  variant="standard"
                  size="small"
                  type="number"
                  validate={(value) => {
                    // TODO: mostrar el erro al usuario
                    if (value <= 0) return 'El objetivo debe ser distinto a 0';
                    return undefined;
                  }}
                />
              </QuarterFieldContainer>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={2} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="priority"
                    component={({ field, ...props }) => (
                      <Rating
                        {...field}
                        {...props}
                        value={parseInt(field.value, 10)}
                        onChange={(e, value) =>
                          setFieldValue('priority', value)
                        }
                      />
                    )}
                    validate={validateField}
                  />
                  <ErrorMessage name="priority">
                    {(msg) => (
                      <Typography
                        sx={{
                          textAlign: 'left',
                          color: 'red',
                          marginLeft: 2,
                          marginTop: '2px',
                          fontSize: '14px',
                        }}
                      >
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Box>
              </QuarterFieldContainer>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={2} sx={{ display: 'flex' }}>
              <ButtonsContainer>
                <IconButton onClick={onClickCancel}>
                  <Delete color="secondary" />
                </IconButton>
                <IconButton type="submit">
                  <Check color="primary" />
                </IconButton>
              </ButtonsContainer>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default KeyResultInput;
