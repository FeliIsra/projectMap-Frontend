import React from 'react';
import { Field, Formik } from 'formik';

import Input from 'components/inputs/Input';
import Textarea from 'components/inputs/Textarea';

import { FormContainer, CustomForm, SubmitButton } from 'styles/form';

const ProjectForm = ({ onSubmit }) => (
  <FormContainer>
    <Formik onSubmit={onSubmit} initialValues={{ titulo: '', descripcion: '' }}>
      {({ handleSubmit }) => (
        <CustomForm onSubmit={handleSubmit}>
          <Field
            name="titulo"
            type="text"
            placeholder="Titulo"
            component={Input}
          />
          <Field
            name="descripcion"
            placeholder="Descripcion"
            component={Textarea}
          />
          <SubmitButton type="submit" color="primary">
            Create
          </SubmitButton>
        </CustomForm>
      )}
    </Formik>
  </FormContainer>
);

export default ProjectForm;
