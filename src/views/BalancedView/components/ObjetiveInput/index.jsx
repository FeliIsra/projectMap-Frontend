import React from 'react';
import { Check, Delete } from '@mui/icons-material';
import { Box, Divider, Grid, IconButton, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import Input from '../Input';

import { QuarterFieldContainer, ButtonsContainer } from './styles';
import { validateField } from 'helpers/validateField';

const ObjetiveInput = ({ onSubmit, onClickCancel, area }) => {
  const initialValues = {
    action: '',
    measure: '',
    responsible: '',
    target: 0,
    area,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        onSubmit(area, values);
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
            <Grid item md={4} sx={{ display: 'flex' }}>
              <div style={{ display: 'flex', flex: 1 }}>
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="action"
                    placeholder="Accion"
                    component={Input}
                    hiddenLabel
                    variant="standard"
                    size="small"
                    validate={validateField}
                  />
                  <ErrorMessage name={'action'}>
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
            <Grid item md={2} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="measure"
                    placeholder="Medida"
                    component={Input}
                    hiddenLabel
                    variant="standard"
                    size="small"
                    inputProps={{
                      style: { textAlign: 'center' },
                    }}
                    validate={validateField}
                  />
                  <ErrorMessage name={'measure'}>
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
              <QuarterFieldContainer>
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="responsible"
                    placeholder="Responsable"
                    component={Input}
                    inputProps={{
                      style: { textAlign: 'center' },
                    }}
                    hiddenLabel
                    variant="standard"
                    size="small"
                    validate={validateField}
                  />
                  <ErrorMessage name={'responsible'}>
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
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="target"
                    placeholder="Objectivo"
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
                  <ErrorMessage name={'target'}>
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
            <Grid item md={3} sx={{ display: 'flex' }}>
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

export default ObjetiveInput;
