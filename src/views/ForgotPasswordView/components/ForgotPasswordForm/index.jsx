import React from 'react';
import { Field, Formik } from 'formik';

import Input from 'components/inputs/Input';

import { Title } from 'styles/form';
import { FormContainer, CustomForm, SubmitButton } from 'styles/form';

const ForgotPasswordForm = ({ onSubmit }) => (
  <FormContainer>
    <Title>Forgot Password</Title>
    <Formik onSubmit={onSubmit} initialValues={{ email: '' }}>
      {({ handleSubmit }) => (
        <CustomForm onSubmit={handleSubmit}>
          <Field
            name="email"
            type="email"
            placeholder="Email"
            component={Input}
          />
          <SubmitButton type="submit">Send</SubmitButton>
        </CustomForm>
      )}
    </Formik>
  </FormContainer>
);

export default ForgotPasswordForm;
