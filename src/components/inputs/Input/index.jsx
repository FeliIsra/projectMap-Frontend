import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material';

import { CustomInput, InputContainer, IconContainer } from './styles';

const Input = (props) => {
  const { placeholder, field, type, disable } = props;
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordInput = type === 'password';

  const getInputType = () => {
    let inputType = type;
    if (isPasswordInput) {
      inputType = showPassword ? 'text' : type;
    }
    return inputType;
  };

  return (
    <InputContainer>
      <CustomInput
        {...field}
        placeholder={placeholder}
        type={getInputType()}
        showIcon={isPasswordInput}
        disabled={disable}
      />
      {isPasswordInput && (
        <IconContainer className="icon">
          <IconButton
            aria-label="toggle password visibility"
            data-testid="toggle-password-button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
          </IconButton>
        </IconContainer>
      )}
    </InputContainer>
  );
};

export default Input;
