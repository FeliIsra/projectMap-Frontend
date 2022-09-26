import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  Fab,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Formik, Field } from 'formik';

import Input from 'components/inputs/Input';
import SelectInput from 'components/inputs/SelectInput';

import { CustomForm, ButtonsContainer } from './styles';
import { COLORS } from 'helpers/enums/colors';
import Steps from './components';
import { Check } from '@mui/icons-material';

const AnsoffView = (props) => {
  const {
    onSubmitProducto,
    showResults = false,
    situacionDelMercadoOptions,
    situacionDelProductoOptions,
    initialValuesProducto,
    steps,
    handleNext,
    handleBack,
    activeStep,
    isLastStep,
  } = props;
  const [showForm, setShowForm] = useState(false);

  // TO-DO: revisar el alto de los cuadrantes. Podriamos calcular dependiendo la pantalla
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            padding: '30px 0',
            marginBottom: '50px',
            borderRadius: '15px',
            background: COLORS.Geyser,
          }}
        >
          <Stepper activeStep={activeStep}>
            {steps.map(({ label }, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Steps {...props} />
        {showForm && activeStep === 0 && (
          <Grid
            item
            xs={12}
            sx={{
              padding: '20px',
              borderRadius: '0 0 15px 15px',
              backgroundColor: COLORS.GreenCuttySark,
            }}
          >
            <Formik
              onSubmit={(values) => {
                onSubmitProducto(values);
                setShowForm(false);
              }}
              initialValues={initialValuesProducto}
            >
              {({ handleSubmit }) => (
                <CustomForm onSubmit={handleSubmit}>
                  <Grid
                    container
                    display="flex"
                    spacing={3}
                    alignItems="center"
                    justifyContent={'space-between'}
                  >
                    <Grid item xs={12} md={4}>
                      <Field
                        name="nombre"
                        placeholder="Nombre"
                        component={Input}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Field
                        name="situacionDelMercado"
                        placeholder="Situacion Del Mercado"
                        component={SelectInput}
                        options={situacionDelMercadoOptions}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Field
                        name="situacionDelProducto"
                        placeholder="Situacion Del Producto"
                        component={SelectInput}
                        options={situacionDelProductoOptions}
                      />
                    </Grid>
                    <Grid item xs={12} md={1}>
                      <ButtonsContainer>
                        <IconButton
                          color="secondary"
                          onClick={() => setShowForm(false)}
                        >
                          <CancelIcon />
                        </IconButton>
                        <IconButton color="primary" type="submit">
                          <CheckCircleIcon />
                        </IconButton>
                      </ButtonsContainer>
                    </Grid>
                  </Grid>
                </CustomForm>
              )}
            </Formik>
          </Grid>
        )}
      </Grid>
      {!showResults && (
        <Fab
          color="primary"
          aria-label="add"
          style={{
            position: 'fixed',
            top: 'auto',
            bottom: 80,
            right: 20,
            left: 'auto',
          }}
          onClick={() => setShowForm(true)}
        >
          <AddIcon />
        </Fab>
      )}
      <Fab
        color="secondary"
        aria-label="back"
        style={{
          position: 'fixed',
          top: 'auto',
          bottom: 20,
          left: 20,
          right: 'auto',
        }}
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        <NavigateBeforeIcon />
      </Fab>
      <Fab
        color="secondary"
        aria-label="next"
        style={{
          position: 'fixed',
          top: 'auto',
          bottom: 20,
          right: 20,
          left: 'auto',
        }}
        onClick={handleNext}
      >
        {isLastStep ? <Check /> : <NavigateNextIcon />}
      </Fab>
    </>
  );
};

export default AnsoffView;
