import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Modal from 'components/commons/Modal';
import Input from 'components/inputs/Input';
import { ErrorMessage, Field, Formik } from 'formik';
import { COLORS } from 'helpers/enums/colors';
import { validateField } from 'helpers/validateField';
import React from 'react';
import { CustomForm } from 'styles/form';

const NewConsultantModal = ({ isOpen, onClose, onSubmit }) => {
  const initialValues = {};
  return (
    <Modal isOpen={isOpen} backgroundColor={COLORS.WildSand} disabled>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <span
          style={{
            fontFamily: "'Fira Sans'",
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '24px',
            color: COLORS.BlueDianne,
          }}
        >
          Consultores
        </span>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
          {({ handleSubmit, setFieldValue }) => (
            <CustomForm onSubmit={handleSubmit}>
              <Box sx={{ width: '100%' }}>
                <Field
                  name="firstName"
                  component={Input}
                  placeholder="First Name"
                  validate={validateField}
                />
                <ErrorMessage name={'firstName'}>
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
              <Box sx={{ width: '100%' }}>
                <Field
                  name="lastName"
                  component={Input}
                  placeholder="Last Name"
                  validate={validateField}
                />
                <ErrorMessage name={'lastName'}>
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
              <Box sx={{ width: '100%' }}>
                <Field
                  name="email"
                  component={Input}
                  placeholder="Email"
                  validate={validateField}
                />
                <ErrorMessage name={'email'}>
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
              <Box sx={{ width: '100%' }}>
                <Field
                  name="password"
                  component={Input}
                  placeholder="Password"
                  validate={validateField}
                />
                <ErrorMessage name={'password'}>
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
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <Button color="secondary" onClick={() => onClose()}>
                  Cancelar
                </Button>
                <Button color="primary" type="submit">
                  Agregar
                </Button>
              </Box>
            </CustomForm>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default NewConsultantModal;
