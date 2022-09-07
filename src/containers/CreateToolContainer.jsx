import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';

import Loading from 'components/commons/Loading';
import LayoutContainer from 'containers/LayoutContainer';

const CreateToolContainer = () => {
  const { id } = useParams();

  const foda = useSelector((state) => state.foda.data);
  const pestel = useSelector((state) => state.pestel.data);
  const loading = useSelector('');

  return (
    <LayoutContainer hasHeader={false}>
      <Routes>
        {!!foda?._id && (
          <Route
            path="/"
            element={
              <Navigate to={`/projects/${id}/foda/${foda._id}`} replace />
            }
          />
        )}
        {!!pestel?._id && (
          <Route
            path="/"
            element={
              <Navigate to={`/projects/${id}/pestel/${pestel._id}`} replace />
            }
          />
        )}
      </Routes>
      <Loading isModalMode message="Loading" />
    </LayoutContainer>
  );
};

export default CreateToolContainer;
