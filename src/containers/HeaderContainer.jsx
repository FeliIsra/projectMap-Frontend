import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { onLogout } from 'redux/actions/user.actions';

import Header from 'components/main/Header';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { to } = useNavigate();
  const user = useSelector((state) => state.user.data);

  const onLogoutClick = () => {
    dispatch(onLogout());
  };

  const menuItems = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => to('/me'),
    },
    {
      key: 'logout',
      label: 'Logout',
      onClick: onLogoutClick,
    },
  ];

  return (
    <Header user={user} onLogoutClick={onLogoutClick} menuItems={menuItems} />
  );
};

export default HeaderContainer;
