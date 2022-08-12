import { Field, Formik } from 'formik';
import React from 'react';

import Button from 'components/commons/Button';
import Input from 'components/inputs/Input';

import {
  Container,
  Title,
  FormContainer,
  CustomForm,
  LinkContainer,
  CustomLink,
} from './styles';

const LoginView = (props) => {
  const { onSubmit, initialValues } = props;
  return (
    <Container>
      <FormContainer>
        <Title>Login</Title>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
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
              <Button type="submit">Login</Button>
            </CustomForm>
          )}
        </Formik>
        <LinkContainer>
          <CustomLink to="/">Forgot password?</CustomLink>
          <CustomLink to="about">Create an account</CustomLink>
        </LinkContainer>
      </FormContainer>
    </Container>
  );
};

export default LoginView;
