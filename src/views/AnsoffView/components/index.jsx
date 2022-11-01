import React, { useState } from 'react';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { COLORS } from 'helpers/enums/colors';
import SelectMenu from 'components/inputs/SelectMenu';
import { exitoProductoList, getExitoProducto } from 'helpers/enums/ansoff';
import { Cancel, CheckCircle, Delete, Edit } from '@mui/icons-material';
import { ButtonsContainer, CustomForm } from '../styles';
import { Field, Formik, ErrorMessage } from 'formik';
import Input from 'components/inputs/Input';
import SelectInput from 'components/inputs/SelectInput';
import { validateField } from 'helpers/validateField';

const Steps = ({
  productos,
  activeStep,
  productosFiltered,
  onEditExito,
  onDeleteProducto,
  showText,
  situacionDelMercadoOptions,
  situacionDelProductoOptions,
  onEditProducto,
}) => {
  const [editProductId, setEditProductId] = useState(null);

  const renderForm = (values) => (
    <Grid
      item
      xs={12}
      sx={{
        padding: '20px',
        backgroundColor: COLORS.Geyser,
      }}
    >
      <Formik
        onSubmit={(values) => {
          onEditProducto(values._id, values);
          setEditProductId(null);
        }}
        initialValues={values}
      >
        {({ handleSubmit }) => (
          <CustomForm onSubmit={handleSubmit} sx={{ flex: 1 }}>
            <Grid
              container
              display="flex"
              spacing={3}
              alignItems="center"
              justifyContent={'space-between'}
            >
              <Grid item xs={12} md={4}>
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="nombre"
                    placeholder="Nombre"
                    component={Input}
                    validate={validateField}
                  />
                  <ErrorMessage name={'nombre'}>
                    {(msg) => (
                      <Typography
                        sx={{
                          textAlign: 'left',
                          color: 'red',
                          marginLeft: 2,
                          marginTop: '2px',
                          fontSize: '14px',
                        }}
                      >
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Box>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="situacionDelMercado"
                    placeholder="Situacion Del Mercado"
                    component={SelectInput}
                    options={situacionDelMercadoOptions}
                    fontSize={18}
                    validate={validateField}
                  />
                </Box>
                <ErrorMessage name={'situacionDelMercado'}>
                  {(msg) => (
                    <Typography
                      sx={{
                        textAlign: 'left',
                        color: 'red',
                        marginLeft: 2,
                        marginTop: '2px',
                        fontSize: '14px',
                      }}
                    >
                      {msg}
                    </Typography>
                  )}
                </ErrorMessage>
              </Grid>
              <Grid item xs={12} md={3}>
                <Box sx={{ width: '100%' }}>
                  <Field
                    name="situacionDelProducto"
                    placeholder="Situacion Del Producto"
                    component={SelectInput}
                    options={situacionDelProductoOptions}
                    fontSize={18}
                    validate={validateField}
                  />
                  <ErrorMessage name={'situacionDelProducto'}>
                    {(msg) => (
                      <Typography
                        sx={{
                          textAlign: 'left',
                          color: 'red',
                          marginLeft: 2,
                          marginTop: '2px',
                          fontSize: '14px',
                        }}
                      >
                        {msg}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Box>
              </Grid>
              <Grid item xs={12} md={1}>
                <ButtonsContainer>
                  <IconButton
                    color="secondary"
                    onClick={() => setEditProductId(null)}
                  >
                    <Cancel />
                  </IconButton>
                  <IconButton color="primary" type="submit">
                    <CheckCircle />
                  </IconButton>
                </ButtonsContainer>
              </Grid>
            </Grid>
          </CustomForm>
        )}
      </Formik>
    </Grid>
  );

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
              <Grid item xs={3} display="flex" justifyContent={'center'}>
                <span style={{ textAlign: 'center' }}>Nombre</span>
              </Grid>
              <Grid item xs={4} display="flex" justifyContent={'center'}>
                <span style={{ textAlign: 'center' }}>
                  Situacion Del Mercado
                </span>
              </Grid>
              <Grid item xs={4} display="flex" justifyContent={'center'}>
                <span style={{ textAlign: 'center' }}>
                  Situacion Del Producto
                </span>
              </Grid>
            </Grid>
          </Grid>
          {productos?.length ? (
            <Grid item xs={12}>
              <Grid container display="flex">
                {productos?.map((producto) => (
                  <>
                    {editProductId === producto._id ? (
                      renderForm(producto)
                    ) : (
                      <>
                        <Grid
                          item
                          xs={3}
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
                        <Grid item xs={1} display="flex" alignItems={'center'}>
                          <ButtonsContainer>
                            <IconButton
                              color="secondary"
                              onClick={() => setEditProductId(producto._id)}
                            >
                              <Edit />
                            </IconButton>
                            <IconButton
                              onClick={() => onDeleteProducto(producto._id)}
                              sx={{ color: 'grey' }}
                            >
                              <Delete />
                            </IconButton>
                          </ButtonsContainer>
                        </Grid>
                      </>
                    )}
                  </>
                ))}
              </Grid>
            </Grid>
          ) : (
            <>
              {showText && (
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
          {productosFiltered['Penetracion']?.length ? (
            <Grid item xs={12}>
              <Grid container display="flex">
                {productosFiltered['Penetracion']?.map((producto) => (
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
                            : { label: 'Seleccione el exito', value: '' }
                        }
                        onChange={(newValue) => {
                          onEditExito({ ...producto, exito: newValue });
                        }}
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
                {productosFiltered['Desarrollo de Producto']?.map(
                  (producto) => (
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
                              : { label: 'Seleccione el exito', value: '' }
                          }
                          onChange={(newValue) => {
                            onEditExito({ ...producto, exito: newValue });
                          }}
                        />
                      </Grid>
                    </>
                  )
                )}
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
                {productosFiltered['Diversificacion']?.map((producto) => (
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
                            : { label: 'Seleccione el exito', value: '' }
                        }
                        onChange={(newValue) => {
                          onEditExito({ ...producto, exito: newValue });
                        }}
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
                {productosFiltered['Desarrollo de Mercado']?.map((producto) => (
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
                            : { label: 'Seleccione el exito', value: '' }
                        }
                        onChange={(newValue) => {
                          onEditExito({ ...producto, exito: newValue });
                        }}
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
    </>
  );
};

export default Steps;
