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
import { ArrowBack, Comment } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { ButtonContainer } from 'views/FodaView/styles';

const PorterView = ({
  options,
  questions,
  activeStep,
  handleBack,
  handleSubmit,
  steps,
  initialValues,
  titulo,
  onClickResults,
  onClickButtonGoBack,
  openComments,
}) => {
  return (
    <CreateContent>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          justifyContent: 'space-between',
        }}
      >
        <IconButton size="small" onClick={onClickButtonGoBack}>
          <ArrowBack />
        </IconButton>
        <CardTitle>{titulo}</CardTitle>
        <ButtonContainer sx={{ gap: '10px' }}>
          <IconButton
            size="small"
            onClick={(event) => openComments(event.currentTarget)}
          >
            <Comment />
          </IconButton>
        </ButtonContainer>
      </Box>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ handleSubmit }) => (
          <CustomForm onSubmit={handleSubmit} sx={{ gap: '0px' }}>
            {questions?.map(({ id, pregunta }) => (
              <Grid
                container
                columnSpacing={3}
                direction="row"
                alignItems="center"
                sx={{
                  backgroundColor: id % 2 === 0 ? '#A0DBC0' : '#94BFBE',
                  width: '100%',
                  marginLeft: '0px',
                  padding: '20px',
                  borderTopLeftRadius: id === 1 ? '15px' : '0px',
                  borderBottomLeftRadius:
                    id === questions?.length ? '15px' : '0px',
                  borderTopRightRadius: id === 1 ? '15px' : '0px',
                  borderBottomRightRadius:
                    id === questions?.length ? '15px' : '0px',
                  borderTop: id === 1 ? '3px solid #264653' : '0',
                  borderRight: '3px solid #264653',
                  borderLeft: '3px solid #264653',
                  borderBottom: '3px solid #264653',
                }}
              >
                <Grid item xs={4}>
                  <Typography key={id}>{pregunta}</Typography>
                </Grid>
                {Object.entries(options)?.map(([key, value]) => (
                  <Grid item xs={4}>
                    <Field
                      name={`${steps[activeStep]}.${id}.${key}`}
                      component={SelectInput}
                      options={value}
                      placeholder={
                        key === 'nivelDeConcordancia'
                          ? 'nivel de concordancia'
                          : key
                      }
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
              <ButtonsContainer width={activeStep === 0 ? '25%' : null}>
                {activeStep !== 0 && (
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                    type="button"
                  >
                    Atras
                  </Button>
                )}
                <Button
                  color="primary"
                  type="submit"
                  onClick={
                    activeStep === steps?.length - 1 ? onClickResults : () => {}
                  }
                >
                  {activeStep === steps?.length - 1 ? 'Finalizar' : 'Siguiente'}
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
