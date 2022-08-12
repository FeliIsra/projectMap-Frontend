import React from 'react';

import { CustomInput, InputContainer } from './styles';

const Input = (props) => {
  const { placeholder, field } = props;
  return (
    <InputContainer>
      <CustomInput {...field} placeholder={placeholder} />
    </InputContainer>
  );
};

export default Input;
