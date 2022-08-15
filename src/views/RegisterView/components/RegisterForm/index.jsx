import React from 'react';
import { Field, Formik } from 'formik';

import Input from 'components/inputs/Input';

import { Title } from 'styles/form';
import { FormContainer, CustomForm, SubmitButton } from 'styles/form';

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
          <Field
            name="firstName"
            type="text"
            placeholder="First Name"
            component={Input}
          />
          <Field
            name="lastName"
            type="text"
            placeholder="Last Name"
            component={Input}
          />
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
          <Field
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            component={Input}
          />
          <SubmitButton type="submit">Send</SubmitButton>
        </CustomForm>
      )}
    </Formik>
  </FormContainer>
);

export default RegisterForm;
