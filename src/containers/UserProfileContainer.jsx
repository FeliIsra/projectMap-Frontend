import Loading from 'components/commons/Loading';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser, onEdit } from 'redux/actions/user.actions';

import ProfileView from 'views/ProfileView';

import LayoutContainer from './LayoutContainer';

const UserProfileContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const onSubmit = (formData) => dispatch(onEdit(user._id, formData));

  if (!user) return null;

  return (
    <LayoutContainer>
      <ProfileView onSubmit={onSubmit} user={user} />
      {loading && <Loading isModalMode />}
    </LayoutContainer>
  );
};

export default UserProfileContainer;
