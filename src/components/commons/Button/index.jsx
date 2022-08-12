import React from 'react';
import { Link } from 'react-router-dom';

import { CustomButton } from './styles';

const Button = ({ children, href, type }) => {
  const renderButton = () => (
    <CustomButton type={type}>{children}</CustomButton>
  );

  return href ? <Link href={href}>{renderButton()}</Link> : renderButton();
};

export default Button;
