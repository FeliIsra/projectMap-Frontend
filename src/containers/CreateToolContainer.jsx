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
  const porter = useSelector((state) => state.porter.data);
  const ansoff = useSelector((state) => state.ansoff.data);
  const okr = useSelector((state) => state.okr.data);
  const balanceScorecard = useSelector((state) => state.balanceScorecard.data);
  const questionnarie = useSelector((state) => state.questionnaire.data);
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
        {!!ansoff?._id && (
          <Route
            path="/"
            element={
              <Navigate to={`/projects/${id}/ansoff/${ansoff._id}`} replace />
            }
          />
        )}
        {!!porter?._id && (
          <Route
            path="/"
            element={
              <Navigate to={`/projects/${id}/porter/${porter._id}`} replace />
            }
          />
        )}
        {!!okr?._id && (
          <Route
            path="/"
            element={<Navigate to={`/projects/${id}/okr/${okr._id}`} replace />}
          />
        )}
        {!!balanceScorecard?._id && (
          <Route
            path="/"
            element={
              <Navigate
                to={`/projects/${id}/balanceScorecard/${balanceScorecard._id}`}
                replace
              />
            }
          />
        )}
        {!!questionnarie?._id && (
          <Route
            path="/"
            element={
              <Navigate
                to={`/projects/${id}/questionnaire/${questionnarie._id}`}
                replace
              />
            }
          />
        )}
      </Routes>
      {loading && <Loading isModalMode message="Cargando" />}
    </LayoutContainer>
  );
};

export default CreateToolContainer;
