import React from 'react';
import { Link } from 'react-router-dom';

import { CustomButton } from './styles';

const Button = ({ children, href, type, onClick }) => {
  const renderButton = () => (
    <CustomButton type={type} onClick={onClick}>
      {children}
    </CustomButton>
  );

  return href ? <Link href={href}>{renderButton()}</Link> : renderButton();
};

export default Button;
