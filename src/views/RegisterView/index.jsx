import React from 'react';

import { Container } from 'styles/form';

import RegisterForm from './components/RegisterForm';

const RegisterView = ({ onSubmit }) => {
  return (
    <Container>
      <RegisterForm onSubmit={onSubmit} />
    </Container>
  );
};

export default RegisterView;
