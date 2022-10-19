import React, { useEffect } from 'react';
import LayoutContainer from 'containers/LayoutContainer';
import { useParams } from 'react-router';
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

const MejoraContinuaContainer = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isAddOkrModalOpen, setAddOkrModalOpen] = useState(false);
  const selectedTool = useSelector(okrToolSelector);

  // useEffect(() => {
  //   dispatch(onGetOneTool(okrToolId));
  // }, []);

  // const onSubmitOkr = (formData) => {
  //   dispatch(onAddOkr(okrToolId, formData));
  //   setAddOkrModalOpen(false);
  // };

  // const onSubmitKeyResult = (okrId, formData) =>
  //   dispatch(onAddKeyResult(okrToolId, okrId, formData));

  // const onEditKeyResultStatus = (okrId, keyResultId, formData) => {
  //   dispatch(onEditKeyResult(okrToolId, okrId, keyResultId, formData));
  // };

  return (
    <LayoutContainer>
      <Grid container>
        <Grid item sx={{ height: '100%', width: '100%', display: 'flex' }}>
          <MejoraContinuaView />
        </Grid>
      </Grid>
    </LayoutContainer>
  );
};

export default MejoraContinuaContainer;
