import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';

import Input from 'components/inputs/Input';

import { Title } from 'styles/form';
import {
  FormContainer,
  CustomForm,
  SubmitButton,
  LinkContainer,
  CustomLink,
} from 'styles/form';
import { validateField } from 'helpers/validateField';
import { Box, Typography } from '@mui/material';

const LoginForm = ({ onSubmit }) => (
  <FormContainer>
    <Title>Ingresar</Title>
    <Formik onSubmit={onSubmit} initialValues={{ email: '', password: '' }}>
      {({ handleSubmit }) => (
        <CustomForm onSubmit={handleSubmit}>
          <Box sx={{ width: '100%' }}>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              component={Input}
              validate={validateField}
            />
            <ErrorMessage name="email">
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
              type="password"
              placeholder="Contraseña"
              component={Input}
              validate={validateField}
            />
            <ErrorMessage name="password">
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
          <SubmitButton type="submit">Login</SubmitButton>
        </CustomForm>
      )}
    </Formik>
    <LinkContainer>
      <CustomLink to="/forgot-password">Olvide mi contraseña</CustomLink>
      <CustomLink to="/register">Crear una cuenta</CustomLink>
    </LinkContainer>
  </FormContainer>
);

export default LoginForm;
