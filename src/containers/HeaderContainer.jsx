import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from 'components/main/Header';
import { removeUserCookies } from 'helpers/cookies';
import { onLogout } from 'redux/actions/user.actions';

const HeaderContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.data);

  const onLogoutClick = () => {
    removeUserCookies();
    dispatch(onLogout(() => navigate('/login')));
  };

  const menuItems = [
    {
      key: 'profile',
      label: 'Profile',
      onClick: () => navigate('/profile'),
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
