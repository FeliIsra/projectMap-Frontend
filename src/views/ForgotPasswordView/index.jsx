import React from 'react';

import { Container } from 'styles/form';

import ForgotPasswordForm from 'views/ForgotPasswordView/components/ForgotPasswordForm';

const ForgotPasswordView = ({ onSubmit }) => {
  return (
    <Container>
      <ForgotPasswordForm onSubmit={onSubmit} />
    </Container>
  );
};

export default ForgotPasswordView;
