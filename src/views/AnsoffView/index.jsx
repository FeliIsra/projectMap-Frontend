import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  Fab,
  Stepper,
  Step,
  StepLabel,
  Box,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Formik, Field, ErrorMessage } from 'formik';

import Input from 'components/inputs/Input';
import SelectInput from 'components/inputs/SelectInput';

import { CustomForm, ButtonsContainer } from './styles';
import { COLORS } from 'helpers/enums/colors';
import Steps from './components';
import { ArrowBack, Check, Comment } from '@mui/icons-material';
import { TitleContainer } from 'components/commons/ProjectCard/styles';
import { ButtonContainer } from 'views/DashboardView/styles';
import { Title } from 'styles/form';
import { validateField } from 'helpers/validateField';

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
    onClickGoBackButton,
    title,
    openComments,
  } = props;
  const [showForm, setShowForm] = useState(false);

  // TO-DO: revisar el alto de los cuadrantes. Podriamos calcular dependiendo la pantalla
  return (
    <>
      <TitleContainer>
        <ButtonContainer
          sx={{ display: 'flex', flex: 1, justifyContent: 'space-between' }}
        >
          <IconButton size="small" onClick={onClickGoBackButton}>
            <ArrowBack />
          </IconButton>
          <IconButton
            size="small"
            onClick={(event) => openComments(event.currentTarget)}
          >
            <Comment />
          </IconButton>
        </ButtonContainer>
        <Title>{showResults ? `Resultados de ${title}` : title}</Title>
      </TitleContainer>
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
            {steps?.map(({ label }, index) => (
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
                      <Box sx={{ width: '100%' }}>
                        <Field
                          name="nombre"
                          placeholder="Nombre"
                          component={Input}
                          validate={validateField}
                        />
                        <ErrorMessage name={'nombre'}>
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Box sx={{ width: '100%' }}>
                        <Field
                          name="situacionDelMercado"
                          placeholder="Situacion Del Mercado"
                          component={SelectInput}
                          options={situacionDelMercadoOptions}
                          fontSize={18}
                          validate={validateField}
                        />
                      </Box>
                      <ErrorMessage name={'situacionDelMercado'}>
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
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Box sx={{ width: '100%' }}>
                        <Field
                          name="situacionDelProducto"
                          placeholder="Situacion Del Producto"
                          component={SelectInput}
                          options={situacionDelProductoOptions}
                          fontSize={18}
                          validate={validateField}
                        />
                        <ErrorMessage name={'situacionDelProducto'}>
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
      {!showResults && !showForm && activeStep === 0 && (
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
      {!showForm && (
        <>
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
      )}
    </>
  );
};

export default AnsoffView;
