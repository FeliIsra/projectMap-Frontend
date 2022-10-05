import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import LayoutContainer from 'containers/LayoutContainer';

import AnsoffView from 'views/AnsoffView';
import { Grid } from '@mui/material';
import {
  onAddProducto,
  onGetOne,
  onGetOptions,
  onEditProduct,
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

  const [activeStep, setActiveStep] = useState(0);

  const item = useSelector((state) => state.ansoff.data);
  const situacionDelMercadoOptions = useSelector(situacionDelMercadoSelector);
  const situacionDelProductoOptions = useSelector(situacionDelProductoSelector);
  const productosFiltered = useSelector(productosSelector);

  useEffect(() => {
    disptch(onGetOne(ansoffId));
    disptch(onGetOptions(ansoffId));
  }, []);

  const isLastStep = activeStep === 4;

  const onSubmitProducto = (formData) => {
    disptch(onAddProducto(ansoffId, formData));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleNext = () => {
    if (!isLastStep) setActiveStep((prevActiveStep) => prevActiveStep + 1);
    else navigate(`/projects/${id}/ansoff/${ansoffId}/results`);
  };

  const onClickGoBackButton = () => navigate(`/projects/${id}`);

  const onEditExito = (formData) =>
    disptch(onEditProduct(ansoffId, formData._id, formData));

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
            situacionDelMercadoOptions={situacionDelMercadoOptions}
            situacionDelProductoOptions={situacionDelProductoOptions}
            productos={item?.productos}
            steps={ansoffSteps}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            productosFiltered={productosFiltered}
            onEditExito={onEditExito}
            isLastStep={isLastStep}
            onClickGoBackButton={onClickGoBackButton}
            title={item?.title}
          />
        </Grid>
      </Grid>
    </LayoutContainer>
  );
};

export default AnsoffContainer;
