import React from 'react';

import { CustomInput, InputContainer } from './styles';

const Textarea = (props) => {
  const { placeholder, field, rows = 3 } = props;

  return (
    <InputContainer>
      <CustomInput
        {...field}
        placeholder={placeholder}
        type="textarea"
        rows={rows}
      />
    </InputContainer>
  );
};

export default Textarea;
