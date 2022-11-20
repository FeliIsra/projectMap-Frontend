import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { onLogin } from 'redux/actions/user.actions';

import Loading from 'components/commons/Loading';
import LayoutContainer from 'containers/LayoutContainer';

import LoginView from 'views/LoginView';
import { Role } from 'helpers/enums/roles';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.user);
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => dispatch(onLogin(values));

  return (
    <LayoutContainer hasHeader={false}>
      <LoginView onSubmit={onSubmit} initialValues={initialValues} />
      {data && data.justRegistered ? (
        <Navigate to="/login" replace={true} />
      ) : data && data.role !== Role.ConsultantAdmin ? (
        <Navigate to="/dashboard" replace={true} />
      ) : data && data.role === Role.ConsultantAdmin ? (
        <Navigate to="/consultoria" replace={true} />
      ) : (
        ''
      )}
      {loading && <Loading isModalMode message="Iniciando sesión" />}
    </LayoutContainer>
  );
};

export default LoginContainer;
