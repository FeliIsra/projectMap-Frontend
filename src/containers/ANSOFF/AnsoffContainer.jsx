import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Formik, Field } from 'formik';

import LayoutContainer from 'containers/LayoutContainer';
import Modal from 'components/commons/Modal';
import Input from 'components/inputs/Input';
import Button from 'components/commons/Button';

import AnsoffView from 'views/AnsoffView';
import { Grid } from '@mui/material';
import {
  onAddProducto,
  onGetOne,
  onGetOptions,
} from 'redux/actions/ansoff.actions';
import {
  exitoSelector,
  situacionDelMercadoSelector,
  situacionDelProductoSelector,
  productosSelector,
} from 'redux/selectors/ansoff.selector';
import { ansoffSteps } from 'helpers/enums/ansoff';

const AnsoffContainer = () => {
  const { ansoffId, id } = useParams();
  const disptch = useDispatch();
  const navigate = useNavigate();
  const onClickResultsButton = () =>
    navigate(`/projects/${id}/mckinsey/${ansoffId}/results`);

  const [activeStep, setActiveStep] = useState(0);

  const item = useSelector((state) => state.ansoff.data);
  const situacionDelMercadoOptions = useSelector(situacionDelMercadoSelector);
  const situacionDelProductoOptions = useSelector(situacionDelProductoSelector);
  const exitoOptions = useSelector(exitoSelector);
  const productosFiltered = useSelector(productosSelector);

  useEffect(() => {
    disptch(onGetOne(ansoffId));
    disptch(onGetOptions(ansoffId));
  }, []);

  const onSubmitProducto = (formData) => {
    disptch(onAddProducto(ansoffId, formData));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const initialValuesProducto = {
    nombre: '',
    situacionDelMercado: '',
    situacionDelProducto: '',
  };

  return (
    <LayoutContainer>
      <Grid container sx={{ height: '100%', width: '100%' }}>
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
          <AnsoffView
            onSubmitProducto={onSubmitProducto}
            initialValuesProducto={initialValuesProducto}
            onClickResultsButton={onClickResultsButton}
            situacionDelMercadoOptions={situacionDelMercadoOptions}
            situacionDelProductoOptions={situacionDelProductoOptions}
            productos={item?.productos}
            steps={ansoffSteps}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            productosFiltered={productosFiltered}
          />
        </Grid>
      </Grid>
    </LayoutContainer>
  );
};

export default AnsoffContainer;
