import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Role } from 'helpers/enums/roles';
import Loading from 'components/commons/Loading';

const DashboardRouteContainer = () => {
  const { loading, data } = useSelector((state) => state.user);

  if (loading && !data) return <Loading isModalMode />;

  if (!loading && !data) return <Navigate to={'/login'} replace />;

  return !loading && data?.role === Role.ConsultantAdmin ? (
    <Navigate to={'/consultoria'} replace />
  ) : (
    <Outlet />
  );
};

export default DashboardRouteContainer;
