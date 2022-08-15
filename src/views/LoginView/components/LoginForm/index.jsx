import React from 'react';
import { Field, Formik } from 'formik';

import Input from 'components/inputs/Input';

import { Title } from 'styles/form';
import {
  FormContainer,
  CustomForm,
  SubmitButton,
  LinkContainer,
  CustomLink,
} from 'styles/form';

const LoginForm = ({ onSubmit }) => (
  <FormContainer>
    <Title>Login</Title>
    <Formik onSubmit={onSubmit} initialValues={{ email: '', password: '' }}>
      {({ handleSubmit }) => (
        <CustomForm onSubmit={handleSubmit}>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            component={Input}
          />
          <Field
            name="password"
            type="password"
            placeholder="Password"
            component={Input}
          />
          <SubmitButton type="submit">Login</SubmitButton>
        </CustomForm>
      )}
    </Formik>
    <LinkContainer>
      <CustomLink to="/forgot-password">Forgot password?</CustomLink>
      <CustomLink to="/register">Create an account</CustomLink>
    </LinkContainer>
  </FormContainer>
);

export default LoginForm;
