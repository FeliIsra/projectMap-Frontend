import React from 'react';

import { Container } from 'styles/form';

import LoginForm from './components/LoginForm';

const LoginView = (props) => {
  const { onSubmit } = props;
  return (
    <Container>
      <LoginForm onSubmit={onSubmit} />
    </Container>
  );
};

export default LoginView;
