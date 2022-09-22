import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Field } from 'formik';

import { onGetOne } from 'redux/actions/mckinsey.actions';
import { cuadrantesSelector } from 'redux/selectors/mckinsey.selector';

import LayoutContainer from 'containers/LayoutContainer';
import CustomizedTables from 'components/commons/Table';

import { Container } from 'styles/global';

import McKinseyView from 'views/McKinseyView';
import { SectionTable, Title } from 'views/McKinseyView/styles';
import { ViewContainer } from 'styles/global';
import { Grid } from '@mui/material';

const AnsoffContainerResults = () => {
  const { matrizId, id } = useParams();
  const disptch = useDispatch();
  const navigate = useNavigate();
  const onClickResultsButton = () =>
    navigate(`/projects/${id}/mckinsey/${matrizId}`);
  const cuadrantes = useSelector(cuadrantesSelector);

  useEffect(() => {
    disptch(onGetOne(matrizId));
  }, []);

  return (
    <LayoutContainer>
      <Grid container>
        <Grid item sx={{ height: '100%' }}>
          <McKinseyView
            cuadrantes={cuadrantes}
            onClickResultsButton={onClickResultsButton}
            showResults
          />
        </Grid>
        <Grid item sx={{ height: '100%' }}>
          <Grid container>
            <Grid item sx={{ padding: '30px' }}>
              <Title>Tabla de General</Title>
              <CustomizedTables
                items={cuadrantes}
                columns={[
                  {
                    label: 'Cuadrante',
                    value: 'title',
                  },
                  {
                    label: 'Que significa para la Unidad de Negocio?',
                    value: 'significado',
                  },
                  {
                    label: 'Cantidad de Unidades de Negocio',
                    value: (item) => item.unidades.length,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LayoutContainer>
  );
};

export default AnsoffContainerResults;
