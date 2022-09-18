import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';

import { toolsLoadingSelector } from 'redux/selectors/app.selector';

import Loading from 'components/commons/Loading';
import LayoutContainer from 'containers/LayoutContainer';

const CreateToolContainer = () => {
  const { id } = useParams();

  const foda = useSelector((state) => state.foda.data);
  const pestel = useSelector((state) => state.pestel.data);
  const mckinsey = useSelector((state) => state.mckinsey.data);
  const loading = useSelector(toolsLoadingSelector);

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
        {!!mckinsey?._id && (
          <Route
            path="/"
            element={
              <Navigate
                to={`/projects/${id}/mckinsey/${mckinsey._id}`}
                replace
              />
            }
          />
        )}
      </Routes>
      {loading && <Loading isModalMode message="Loading" />}
    </LayoutContainer>
  );
};

export default CreateToolContainer;
