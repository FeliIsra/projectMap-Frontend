import React from 'react';
import { ErrorMessage, Field, Formik } from 'formik';

import Input from 'components/inputs/Input';

import { Title } from 'styles/form';
import { FormContainer, CustomForm, SubmitButton } from 'styles/form';
import { validateField } from 'helpers/validateField';
import { Box, Typography } from '@mui/material';

const RegisterForm = ({ onSubmit }) => (
  <FormContainer>
    <Title>Register</Title>
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
    >
      {({ handleSubmit }) => (
        <CustomForm onSubmit={handleSubmit}>
          <Box sx={{ width: '100%' }}>
            <Field
              name="firstName"
              type="text"
              placeholder="First Name"
              component={Input}
              validate={validateField}
            />
            <ErrorMessage name="firstName">
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
              type="text"
              placeholder="Last Name"
              component={Input}
              validate={validateField}
            />
            <ErrorMessage name="lastName">
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
              placeholder="Password"
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
          <Box sx={{ width: '100%' }}>
            <Field
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              component={Input}
              validate={validateField}
            />
            <ErrorMessage name="confirmPassword">
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
          <SubmitButton type="submit">Send</SubmitButton>
        </CustomForm>
      )}
    </Formik>
  </FormContainer>
);

export default RegisterForm;
