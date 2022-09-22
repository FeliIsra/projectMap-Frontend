import React, { useState } from 'react';
import {
  Grid,
  IconButton,
  Fab,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Formik, Field } from 'formik';

import Input from 'components/inputs/Input';
import SelectInput from 'components/inputs/SelectInput';

import { COLORS } from 'helpers/enums/colors';
import SelectMenu from 'components/inputs/SelectMenu';
import { exitoProductoList, getExitoProducto } from 'helpers/enums/ansoff';

const Steps = ({
  onSubmitProducto,
  onClickResultsButton,
  showResults = false,
  situacionDelMercadoOptions,
  situacionDelProductoOptions,
  initialValuesProducto,
  productos,
  steps,
  handleNext,
  handleBack,
  activeStep,
  productosFiltered,
}) => {
  return (
    <>
      {activeStep === 0 && (
        <>
          <Grid item xs={12}>
            <Grid
              container
              display="flex"
              sx={{
                padding: '30px 0',
                backgroundColor: COLORS.GreenBayLeaf,
                color: COLORS.white,
                borderRadius: '15px 15px 0 0',
                fontSize: '20px',
                fontWeight: 800,
              }}
            >
              <Grid item xs={4} display="flex" justifyContent={'center'}>
                <span>Nombre</span>
              </Grid>
              <Grid item xs={4} display="flex" justifyContent={'center'}>
                <span>Situacion Del Mercado</span>
              </Grid>
              <Grid item xs={4} display="flex" justifyContent={'center'}>
                <span>Situacion Del Producto</span>
              </Grid>
            </Grid>
          </Grid>
          {productos ? (
            <Grid item xs={12}>
              <Grid container display="flex">
                {productos.map((producto) => (
                  <>
                    <Grid
                      item
                      xs={4}
                      display="flex"
                      justifyContent={'center'}
                      sx={{ padding: '20px 0' }}
                    >
                      {producto.nombre}
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      display="flex"
                      justifyContent={'center'}
                      sx={{ padding: '20px 0' }}
                    >
                      {producto.situacionDelMercado}
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      display="flex"
                      justifyContent={'center'}
                      sx={{ padding: '20px 0' }}
                    >
                      {producto.situacionDelProducto}
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
          ) : (
            <Typography
              sx={{
                padding: '50px 0',
                fontSize: '20px',
                fontWeight: 800,
                margin: '0 auto',
              }}
            >
              Agregue productos usando el boton <AddIcon />
            </Typography>
          )}
        </>
      )}
      {activeStep === 1 && (
        <>
          <Grid item xs={12}>
            <Grid
              container
              display="flex"
              sx={{
                padding: '30px 0',
                backgroundColor: COLORS.GreenBayLeaf,
                color: COLORS.white,
                borderRadius: '15px 15px 0 0',
                fontSize: '20px',
                fontWeight: 800,
              }}
            >
              <Grid item xs={6} display="flex" justifyContent={'center'}>
                <span>Clasificado como penetracion de mercado</span>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent={'center'}>
                <span>Exito del producto actual</span>
              </Grid>
            </Grid>
          </Grid>
          {productosFiltered['Penetracion'].length ? (
            <Grid item xs={12}>
              <Grid container display="flex">
                {productosFiltered['Penetracion'].map((producto) => (
                  <>
                    <Grid
                      item
                      xs={6}
                      display="flex"
                      justifyContent={'center'}
                      sx={{ padding: '20px 0' }}
                    >
                      {producto.nombre}
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      display="flex"
                      justifyContent={'center'}
                      sx={{ padding: '20px 0' }}
                    >
                      <SelectMenu
                        items={exitoProductoList}
                        selectedValue={
                          producto?.exito
                            ? getExitoProducto(producto.exito)
                            : { label: 'Selecione el exito', value: '' }
                        }
                        // onChange={(newValue: number) => {
                        //   dispatch(
                        //     onSave(
                        //       { firstName, lastName, email, roleId: newValue },
                        //       id
                        //     )
                        //   );
                        // }}
                      />
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
          ) : (
            <Typography
              sx={{
                padding: '50px 0',
                fontSize: '20px',
                fontWeight: 800,
                margin: '0 auto',
              }}
            >
              No hay productos clasificados en esta area
            </Typography>
          )}
        </>
      )}
      {activeStep === 2 && (
        <>
          <Grid item xs={12}>
            <Grid
              container
              display="flex"
              sx={{
                padding: '30px 0',
                backgroundColor: COLORS.GreenBayLeaf,
                color: COLORS.white,
                borderRadius: '15px 15px 0 0',
                fontSize: '20px',
                fontWeight: 800,
              }}
            >
              <Grid item xs={6} display="flex" justifyContent={'center'}>
                <span>Clasificado como desarrollo de prducto</span>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent={'center'}>
                <span>Exito del producto actual</span>
              </Grid>
            </Grid>
          </Grid>
          {productosFiltered['Desarrollo de Producto'] ? (
            <Grid item xs={12}>
              <Grid container display="flex">
                {productosFiltered['Desarrollo de Producto'].map((producto) => (
                  <>
                    <Grid
                      item
                      xs={6}
                      display="flex"
                      justifyContent={'center'}
                      sx={{ padding: '20px 0' }}
                    >
                      {producto.nombre}
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      display="flex"
                      justifyContent={'center'}
                      sx={{ padding: '20px 0' }}
                    >
                      {producto.situacionDelMercado}
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
          ) : (
            <Typography
              sx={{
                padding: '50px 0',
                fontSize: '20px',
                fontWeight: 800,
                margin: '0 auto',
              }}
            >
              No hay productos clasificados en esta area
            </Typography>
          )}
        </>
      )}
      {activeStep === 3 && (
        <>
          <Grid item xs={12}>
            <Grid
              container
              display="flex"
              sx={{
                padding: '30px 0',
                backgroundColor: COLORS.GreenBayLeaf,
                color: COLORS.white,
                borderRadius: '15px 15px 0 0',
                fontSize: '20px',
                fontWeight: 800,
              }}
            >
              <Grid item xs={6} display="flex" justifyContent={'center'}>
                <span>Clasificado como diversificacion en el mercado</span>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent={'center'}>
                <span>Exito del producto actual</span>
              </Grid>
            </Grid>
          </Grid>
          {productosFiltered['Diversificacion'] ? (
            <Grid item xs={12}>
              <Grid container display="flex">
                {productosFiltered['Diversificacion'].map((producto) => (
                  <>
                    <Grid
                      item
                      xs={6}
                      display="flex"
                      justifyContent={'center'}
                      sx={{ padding: '20px 0' }}
                    >
                      {producto.nombre}
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      display="flex"
                      justifyContent={'center'}
                      sx={{ padding: '20px 0' }}
                    >
                      {producto.situacionDelMercado}
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
          ) : (
            <Typography
              sx={{
                padding: '50px 0',
                fontSize: '20px',
                fontWeight: 800,
                margin: '0 auto',
              }}
            >
              No hay productos clasificados en esta area
            </Typography>
          )}
        </>
      )}
      {activeStep === 4 && (
        <>
          <Grid item xs={12}>
            <Grid
              container
              display="flex"
              sx={{
                padding: '30px 0',
                backgroundColor: COLORS.GreenBayLeaf,
                color: COLORS.white,
                borderRadius: '15px 15px 0 0',
                fontSize: '20px',
                fontWeight: 800,
              }}
            >
              <Grid item xs={6} display="flex" justifyContent={'center'}>
                <span>Clasificado como desarrollo de mercado</span>
              </Grid>
              <Grid item xs={6} display="flex" justifyContent={'center'}>
                <span>Exito del producto actual</span>
              </Grid>
            </Grid>
          </Grid>
          {productosFiltered['Desarrollo de Mercado'] ? (
            <Grid item xs={12}>
              <Grid container display="flex">
                {productosFiltered['Desarrollo de Mercado'].map((producto) => (
                  <>
                    <Grid
                      item
                      xs={6}
                      display="flex"
                      justifyContent={'center'}
                      sx={{ padding: '20px 0' }}
                    >
                      {producto.nombre}
                    </Grid>
                    <Grid
                      item
                      xs={6}
                      display="flex"
                      justifyContent={'center'}
                      sx={{ padding: '20px 0' }}
                    >
                      {producto.situacionDelMercado}
                    </Grid>
                  </>
                ))}
              </Grid>
            </Grid>
          ) : (
            <Typography
              sx={{
                padding: '50px 0',
                fontSize: '20px',
                fontWeight: 800,
                margin: '0 auto',
              }}
            >
              No hay productos clasificados en esta area
            </Typography>
          )}
        </>
      )}
    </>
  );
};

export default Steps;
