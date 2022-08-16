import React from 'react';
import { Field, Formik } from 'formik';

import Input from 'components/inputs/Input';

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
            type="text"
            placeholder="Descripcion"
            component={Input}
          />
          <SubmitButton type="submit">Create</SubmitButton>
        </CustomForm>
      )}
    </Formik>
  </FormContainer>
);

export default ProjectForm;
