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
  onDeleteProduct,
} from 'redux/actions/ansoff.actions';
import {
  situacionDelMercadoSelector,
  situacionDelProductoSelector,
  productosSelector,
} from 'redux/selectors/ansoff.selector';
import { ansoffSteps } from 'helpers/enums/ansoff';
import { Menu, MenuItem } from '@mui/material';
import Comments from 'components/comments/Comments';
import { COLORS } from 'helpers/enums/colors';
import Loading from 'components/commons/Loading';
import { onGetAll as onGetAllComments } from 'redux/actions/comments.actions';

const AnsoffContainer = () => {
  const { ansoffId, id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [anchorElement, setAnchorElement] = useState(null);

  const item = useSelector((state) => state.ansoff.data);
  const loading = useSelector((state) => state.ansoff.loading);
  const situacionDelMercadoOptions = useSelector(situacionDelMercadoSelector);
  const situacionDelProductoOptions = useSelector(situacionDelProductoSelector);
  const productosFiltered = useSelector(productosSelector);

  useEffect(() => {
    dispatch(onGetOne(ansoffId));
    dispatch(onGetOptions());
    dispatch(onGetAllComments('ANSOFF', ansoffId));
  }, []);

  const isLastStep = activeStep === 4;

  const onSubmitProducto = (formData) => {
    dispatch(onAddProducto(ansoffId, formData));
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
    dispatch(onEditProduct(ansoffId, formData._id, formData));

  const onDeleteProducto = (productId) =>
    dispatch(onDeleteProduct(ansoffId, productId));

  const onEditProducto = (productId, values) =>
    dispatch(onEditProduct(ansoffId, productId, values));

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
            openComments={(target) => setAnchorElement(target)}
            onDeleteProducto={onDeleteProducto}
            onEditProducto={onEditProducto}
          />
          <Menu
            anchorEl={anchorElement}
            onClose={() => setAnchorElement(null)}
            open={!!anchorElement}
            PaperProps={{
              style: {
                width: 500,
              },
            }}
            sx={{
              '& .MuiMenu-list': {
                background: COLORS.AthensGray,
              },
            }}
          >
            <MenuItem key={1} disableRipple>
              <Comments show tool="ANSOFF" toolId={ansoffId} projectId={id} />
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
      {loading && <Loading isModalMode message="Cargando Ansoff" />}
    </LayoutContainer>
  );
};

export default AnsoffContainer;
