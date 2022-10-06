import React, { useEffect } from 'react';
import LayoutContainer from 'containers/LayoutContainer';
import { useParams } from 'react-router';
import OKRView from 'views/OKRView';
import { Grid } from '@mui/material';
import { onAddOkr, onGetOneTool } from 'redux/actions/okr.actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ButtonsContainer, CustomForm } from 'styles/form';
import { Field, Formik } from 'formik';
import { CreateContent, CreateModalTitle } from 'styles/global';
import { COLORS } from 'helpers/enums/colors';
import Modal from 'components/commons/Modal';
import Button from 'components/commons/Button';
import Input from 'components/inputs/Input';

const OKRContainer = () => {
  const { okrId, id } = useParams();
  const dispatch = useDispatch();
  const [isAddOkrModalOpen, setAddOkrModalOpen] = useState(false);

  useEffect(() => {
    dispatch(onGetOneTool(okrId));
  }, []);

  const onSubmitOkr = (formData) => dispatch(onAddOkr(id, formData));

  return (
    <LayoutContainer>
      <Grid container>
        <Grid item sx={{ height: '100%', width: '100%' }}>
          <OKRView openAddOkrModal={() => setAddOkrModalOpen(true)} />
        </Grid>
      </Grid>
      <Modal
        isOpen={isAddOkrModalOpen}
        backgroundColor={COLORS.WildSand}
        disabled
      >
        <CreateContent>
          <CreateModalTitle>Agregar nuevo OKR</CreateModalTitle>
          <Formik
            onSubmit={onSubmitOkr}
            initialValues={{ description: '', area: '', keyResults: 0 }}
          >
            {({ handleSubmit, setFieldValue }) => (
              <CustomForm onSubmit={handleSubmit}>
                <Field
                  name="description"
                  placeholder="Descripcion"
                  type="text"
                  component={Input}
                />
                <Field
                  name="area"
                  placeholder="Area"
                  type="text"
                  component={Input}
                />
                <ButtonsContainer>
                  <Button
                    color="secondary"
                    onClick={() => setAddOkrModalOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button color="primary" type="submit">
                    Agregar
                  </Button>
                </ButtonsContainer>
              </CustomForm>
            )}
          </Formik>
        </CreateContent>
      </Modal>
    </LayoutContainer>
  );
};

export default OKRContainer;
