import React from 'react';
import { Check, Delete } from '@mui/icons-material';
import { Divider, Grid, IconButton, Rating } from '@mui/material';
import { Field, Form, Formik } from 'formik';

import Input from '../Input';

import { QuarterFieldContainer, ButtonsContainer } from './styles';
import { getKeyResultInitialValues } from 'helpers/enums/okr';

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
                <Field
                  name="description"
                  placeholder="Descripcion"
                  component={Input}
                  hiddenLabel
                  variant="standard"
                  size="small"
                />
              </div>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={1} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
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
                />
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
                />
              </QuarterFieldContainer>
              <Divider orientation="vertical" flexItem />
            </Grid>
            <Grid item md={2} sx={{ display: 'flex' }}>
              <QuarterFieldContainer>
                <Field
                  name="priority"
                  component={({ field, ...props }) => (
                    <Rating
                      {...field}
                      {...props}
                      value={parseInt(field.value, 10)}
                      onChange={(e, value) => setFieldValue('priority', value)}
                    />
                  )}
                />
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
