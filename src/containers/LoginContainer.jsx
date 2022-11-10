import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { onLogin } from 'redux/actions/user.actions';

import Loading from 'components/commons/Loading';
import LayoutContainer from 'containers/LayoutContainer';

import LoginView from 'views/LoginView';

const LoginContainer = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector((state) => state.user);
  const initialValues = {
    email: '',
    password: '',
  };

  const onSubmit = (values) => dispatch(onLogin(values));

  console.log({ data });
  return (
    <LayoutContainer hasHeader={false}>
      <LoginView onSubmit={onSubmit} initialValues={initialValues} />
      {loading && <Loading isModalMode message="Loading" />}
      {data && data.justRegistered ? (
        <Navigate to="/login" replace={true} />
      ) : data.role !== 'ConsultantAdmin' ? (
        <Navigate to="/dashboard" replace={true} />
      ) : data.role === 'ConsultantAdmin' ? (
        <Navigate to="/consultoria" replace={true} />
      ) : (
        ''
      )}
    </LayoutContainer>
  );
};

export default LoginContainer;
