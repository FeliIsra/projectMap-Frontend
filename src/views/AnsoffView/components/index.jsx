import React, { useState } from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { COLORS } from 'helpers/enums/colors';
import SelectMenu from 'components/inputs/SelectMenu';
import { exitoProductoList, getExitoProducto } from 'helpers/enums/ansoff';
import { Delete, Edit } from '@mui/icons-material';
import { ButtonsContainer } from '../styles';

const Steps = ({
  productos,
  activeStep,
  productosFiltered,
  onEditExito,
  onDeleteProducto,
  showText,
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
                        {/* <IconButton color="secondary">
                          <Edit />
                        </IconButton> */}
                        <IconButton
                          onClick={() => onDeleteProducto(producto._id)}
                          sx={{ color: 'grey' }}
                        >
                          <Delete />
                        </IconButton>
                      </ButtonsContainer>
                    </Grid>
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
