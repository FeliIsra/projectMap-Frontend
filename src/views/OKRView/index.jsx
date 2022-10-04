import React, { useState } from 'react';
import { Divider, Grid, IconButton, Rating, TextField } from '@mui/material';
import { COLORS } from 'helpers/enums/colors';
import { Add } from '@mui/icons-material';
import { Field, Formik, Form } from 'formik';

const OKRView = ({}) => {
  const [showInput, setShowInput] = useState(false);
  return (
    <Grid container sx={{ padding: '30px' }}>
      <Grid item xs={12}>
        <Grid container sx={{ padding: '20px 0' }}>
          <Grid item md={3} sx={{ paddingLeft: '10px' }}>
            <span>Objetivo 1</span>
          </Grid>
          <Grid item md={1} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <span>Ene</span>
            </div>
          </Grid>
          <Grid item md={1} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <span>Feb</span>
            </div>
          </Grid>
          <Grid item md={1} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <span>Mar</span>
            </div>
          </Grid>
          <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>Objetivo</span>
          </Grid>
          <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>Prioridad</span>
          </Grid>
          <Grid item md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            <span>Grado de avance</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            padding: '10px 0',
            background: COLORS.AthensGray,
            alignItems: 'center',
          }}
        >
          <Grid item md={3} sx={{ display: 'flex', paddingLeft: '10px' }}>
            <div style={{ flex: 1 }}>
              <span>OKR 1</span>
            </div>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={1} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <span>10</span>
            </div>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={1} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <span>2</span>
            </div>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={1} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <span>3</span>
            </div>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={2} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <span>1000</span>
            </div>
            <Divider orientation="vertical" flexItem />
          </Grid>
          <Grid item md={2} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <div
                style={{ display: 'flex', flex: 1, justifyContent: 'center' }}
              >
                <Rating name="read-only" value={4} readOnly />
              </div>
              <Divider orientation="vertical" flexItem />
            </div>
          </Grid>
          <Grid item md={2} sx={{ display: 'flex' }}>
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
              <div
                style={{ display: 'flex', flex: 1, justifyContent: 'center' }}
              >
                <span>25%</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
      {showInput && (
        <Grid item xs={12}>
          <Formik
            initialValues={{
              descripcion: '',
              0: '',
              1: '',
              2: '',
              prioridad: 0,
            }}
          >
            <Form>
              <Grid
                container
                sx={{
                  padding: '10px 0',
                  alignItems: 'center',
                }}
              >
                <Grid item md={3} sx={{ display: 'flex', paddingLeft: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <Field
                      name="descripcion"
                      placeholder="Descripcion"
                      component={TextField}
                      hiddenLabel
                      id="standard-basic"
                      variant="standard"
                      size="small"
                    />
                  </div>
                  <Divider orientation="vertical" flexItem />
                </Grid>
                <Grid item md={1} sx={{ display: 'flex' }}>
                  <div
                    style={{
                      display: 'flex',
                      flex: 1,
                      justifyContent: 'center',
                      padding: '0 5px',
                    }}
                  >
                    <Field
                      name="0"
                      placeholder="Valor"
                      component={(inputProps) => (
                        <TextField
                          {...inputProps}
                          inputProps={{
                            style: { textAlign: 'center' },
                          }}
                        />
                      )}
                      hiddenLabel
                      id="standard-basic"
                      variant="standard"
                      size="small"
                    />
                  </div>
                  <Divider orientation="vertical" flexItem />
                </Grid>
                <Grid item md={1} sx={{ display: 'flex' }}>
                  <div
                    style={{
                      display: 'flex',
                      flex: 1,
                      justifyContent: 'center',
                      padding: '0 5px',
                    }}
                  >
                    <Field
                      name="1"
                      placeholder="Valor"
                      component={(inputProps) => (
                        <TextField
                          {...inputProps}
                          inputProps={{
                            style: { textAlign: 'center' },
                          }}
                        />
                      )}
                      hiddenLabel
                      id="standard-basic"
                      variant="standard"
                      size="small"
                    />
                  </div>
                  <Divider orientation="vertical" flexItem />
                </Grid>
                <Grid item md={1} sx={{ display: 'flex' }}>
                  <div
                    style={{
                      display: 'flex',
                      flex: 1,
                      justifyContent: 'center',
                      padding: '0 5px',
                    }}
                  >
                    <Field
                      name="3"
                      placeholder="Valor"
                      component={(inputProps) => (
                        <TextField
                          {...inputProps}
                          inputProps={{ style: { textAlign: 'center' } }}
                        />
                      )}
                      hiddenLabel
                      id="standard-basic"
                      variant="standard"
                      size="small"
                    />
                  </div>
                  <Divider orientation="vertical" flexItem />
                </Grid>
                <Grid item md={2} sx={{ display: 'flex' }}>
                  <div
                    style={{
                      display: 'flex',
                      flex: 1,
                      justifyContent: 'center',
                      padding: '0 5px',
                    }}
                  >
                    <Field
                      name="goal"
                      placeholder="Objectivo"
                      component={(inputProps) => (
                        <TextField
                          {...inputProps}
                          inputProps={{ style: { textAlign: 'center' } }}
                        />
                      )}
                      hiddenLabel
                      id="standard-basic"
                      variant="standard"
                      size="small"
                    />
                  </div>
                  <Divider orientation="vertical" flexItem />
                </Grid>
                <Grid item md={2} sx={{ display: 'flex' }}>
                  <div
                    style={{
                      display: 'flex',
                      flex: 1,
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        flex: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <Field name="prioridad" component={Rating} />
                    </div>
                  </div>
                </Grid>
                <Grid item md={2} sx={{ display: 'flex' }} />
              </Grid>
            </Form>
          </Formik>
        </Grid>
      )}
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            padding: '10px 0',
          }}
        >
          <Grid
            item
            md={12}
            sx={{
              paddingLeft: '10px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              sx={{
                paddingLeft: '0',
                fontSize: '1rem',
                ':hover': {
                  background: 'none',
                },
              }}
              onClick={() => setShowInput(true)}
            >
              <Add fontSize="1rem" />
              <span>Add</span>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item md={6} />
          <Grid
            item
            md={2}
            sx={{
              display: 'flex',
              padding: '10px 0',
              justifyContent: 'center',
              borderRadius: '0 0 10px 10px',
              background: COLORS.AthensGray,
            }}
          >
            <span>1000</span>
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              display: 'flex',
              padding: '10px 0',
              justifyContent: 'center',
              borderRadius: '0 0 10px 10px',
              background: COLORS.AthensGray,
            }}
          >
            <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              display: 'flex',
              padding: '10px 0',
              justifyContent: 'center',
              borderRadius: '0 0 10px 10px',
              background: COLORS.AthensGray,
            }}
          >
            <span>25%</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OKRView;
