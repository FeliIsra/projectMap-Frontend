import React from 'react';
import { Check, Delete } from '@mui/icons-material';
import { Divider, Grid, IconButton } from '@mui/material';
import { Field, Form, Formik } from 'formik';

import Input from '../Input';

import { QuarterFieldContainer, ButtonsContainer } from './styles';

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
                <Field
                  name="action"
                  placeholder="Accion"
                  component={Input}
                  hiddenLabel
                  variant="standard"
                  size="small"
                />
              </div>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={2} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
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
                />
              </QuarterFieldContainer>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={2} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
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
                />
              </QuarterFieldContainer>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
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
                />
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
