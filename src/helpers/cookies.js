import cookie from 'react-cookies';

const baseOptions = { path: '/' };

export const getCookie = (key) => {
  return cookie.load(key);
};

export const setCookie = (key, value, options = {}) => {
  cookie.save(key, value, { ...baseOptions, ...options });
};

export const removeCookie = (key, options = {}) => {
  cookie.remove(key, { ...baseOptions, ...options });
};

export const saveUserCookies = (token) => {
  const { accessToken, expiresIn, refreshToken } = token;
  setCookie('accessToken', accessToken, { maxAge: expiresIn });
  setCookie('refreshToken', refreshToken);
};

export const removeUserCookies = () => {
  removeCookie('accessToken');
  removeCookie('refreshToken');
};
