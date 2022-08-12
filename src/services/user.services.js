import { get, post, put } from 'services/api';

export const forgotPassword = (formData) => post('auth/password', formData);

export const initialize = () => get('auth/profile');

export const login = (formData) => post('auth/login', formData);

export const logout = () => post('auth/logout');

export const resetPassword = async (formData) => put('auth/password', formData);
