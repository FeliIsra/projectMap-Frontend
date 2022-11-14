import React, { useEffect } from 'react';
import LayoutContainer from 'containers/LayoutContainer';
import { useNavigate, useParams } from 'react-router';
import OKRView from 'views/OKRView';
import {
  Grid,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import {
  onAddKeyResult,
  onAddOkr,
  onEditKeyResult,
  onGetOneTool,
} from 'redux/actions/okr.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ButtonsContainer, CustomForm } from 'styles/form';
import { Field, Formik } from 'formik';
import { CreateContent, CreateModalTitle } from 'styles/global';
import { COLORS } from 'helpers/enums/colors';
import Modal from 'components/commons/Modal';
import Button from 'components/commons/Button';
import Input from 'components/inputs/Input';
import { quartersOptions } from 'helpers/enums/okr';
import { okrToolSelector } from 'redux/selectors/okr.selector';
import MejoraContinuaView from 'views/MejoraContinua';
import { onGetOne } from 'redux/actions/mejora.continua.actions';
import {
  radarChartSelector,
  pieChartSelector,
  polarChartSelector,
  barChartSelector,
  horizontalBarChartSelector,
  horizontalChartSelector,
  lineChartSelector,
} from 'redux/selectors/mejora.continua.selector';

const MejoraContinuaContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dataFODA = useSelector(radarChartSelector);
  const dataPESTEL = useSelector(pieChartSelector);
  const dataMckinsey = useSelector(polarChartSelector);
  const dataPorter = useSelector(barChartSelector);
  const dataAnsoff = useSelector(horizontalBarChartSelector);
  const dataOkrs = useSelector(horizontalChartSelector);
  const dataBalanced = useSelector(lineChartSelector);

  const navigate = useNavigate();
  const onClickButtonGoBack = () => navigate(`/projects/${id}`);

  useEffect(() => {
    dispatch(onGetOne(id));
  }, []);

  return (
    <LayoutContainer>
      <Grid container>
        <Grid item sx={{ height: '100%', width: '100%', display: 'flex' }}>
          <MejoraContinuaView
            projectId={id}
            dataFODA={dataFODA}
            dataPESTEL={dataPESTEL}
            dataMckinsey={dataMckinsey}
            dataPorter={dataPorter}
            dataAnsoff={dataAnsoff}
            dataOkrs={dataOkrs}
            dataBalanced={dataBalanced}
            onClickButtonGoBack={onClickButtonGoBack}
          />
        </Grid>
      </Grid>
    </LayoutContainer>
  );
};

export default MejoraContinuaContainer;
