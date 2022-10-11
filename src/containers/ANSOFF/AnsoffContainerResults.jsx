import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Field } from 'formik';

import {
  onAddProducto,
  onGetOne,
  onEditProduct,
} from 'redux/actions/ansoff.actions';
import { cuadrantesSelector } from 'redux/selectors/mckinsey.selector';

import LayoutContainer from 'containers/LayoutContainer';
import CustomizedTables from 'components/commons/Table';
import { Grid } from '@mui/material';

import {
  productosSelector,
  porcentajesSelector,
} from 'redux/selectors/ansoff.selector';
import AnsoffViewResults from 'views/AnsoffViewResults';

const AnsoffContainerResults = () => {
  const { ansoffId, id } = useParams();
  const disptch = useDispatch();

  const productosFiltered = useSelector(productosSelector);
  const porcentajes = useSelector(porcentajesSelector);

  const navigate = useNavigate();
  const onClickGoBackButton = () =>
    navigate(`/projects/${id}/ansoff/${ansoffId}`);

  useEffect(() => {
    disptch(onGetOne(ansoffId));
  }, []);

  return (
    <LayoutContainer>
      <Grid container>
        <Grid
          item
          sx={{
            height: '100%',
            width: '100%',
            padding: '30px',
            maxWidth: '1300px',
            margin: '0 auto',
          }}
        >
          <AnsoffViewResults
            productosFiltered={productosFiltered}
            porcentajes={porcentajes}
            onClickGoBackButton={onClickGoBackButton}
          />
        </Grid>
      </Grid>
    </LayoutContainer>
  );
};

export default AnsoffContainerResults;
