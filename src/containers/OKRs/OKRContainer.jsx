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

const OKRContainer = () => {
  const { okrToolId } = useParams();
  const dispatch = useDispatch();
  const [isAddOkrModalOpen, setAddOkrModalOpen] = useState(false);
  const selectedTool = useSelector(okrToolSelector);
  console.log('tool', selectedTool);

  useEffect(() => {
    dispatch(onGetOneTool(okrToolId));
  }, []);

  const onSubmitOkr = (formData) => {
    dispatch(onAddOkr(okrToolId, formData));
    setAddOkrModalOpen(false);
  };

  const onSubmitKeyResult = (okrId, formData) =>
    dispatch(onAddKeyResult(okrToolId, okrId, formData));

  const onEditKeyResultStatus = (okrId, keyResultId, formData) => {
    dispatch(onEditKeyResult(okrToolId, okrId, keyResultId, formData));
  };

  return (
    <LayoutContainer>
      <Grid container>
        <Grid item sx={{ height: '100%', width: '100%' }}>
          <OKRView
            openAddOkrModal={() => setAddOkrModalOpen(true)}
            onSubmitKeyResult={onSubmitKeyResult}
            okrs={selectedTool?.okrs}
            titulo={selectedTool.titulo}
            onEditKeyResultStatus={onEditKeyResultStatus}
          />
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
            initialValues={{ description: '', area: '', quarter: 0 }}
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
                <Field
                  name="quarter"
                  component={({ field }) => (
                    <>
                      <InputLabel>
                        Seleccione el trimestre a utilizar
                      </InputLabel>
                      <ToggleButtonGroup
                        sx={{ color: COLORS.BlueDianne }}
                        exclusive
                        onChange={(event, value) =>
                          setFieldValue('quarter', value)
                        }
                        value={field.value}
                      >
                        {quartersOptions.map(({ value, label }) => (
                          <ToggleButton value={value}>{label}</ToggleButton>
                        ))}
                      </ToggleButtonGroup>
                    </>
                  )}
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
