import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { onForgotPassword } from 'redux/actions/user.actions';

import Loading from 'components/commons/Loading';
import LayoutContainer from 'containers/LayoutContainer';
import ForgotPasswordView from 'views/ForgotPasswordView';

const ForgotPasswordContainer = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const onSubmit = (formData) => dispatch(onForgotPassword(formData));

  return (
    <LayoutContainer hasHeader={false}>
      <ForgotPasswordView onSubmit={onSubmit} />
      {loading && <Loading isModalMode message="Cargando" />}
    </LayoutContainer>
  );
};

export default ForgotPasswordContainer;
