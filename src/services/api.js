import axios from 'axios';

import { API_BASE_URL } from 'configs/configs';
import { getCookie } from 'helpers/cookies';

export const api = axios.create({ baseURL: API_BASE_URL });

const getOptions = () => {
  const accessToken = getCookie('accessToken');
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  };
  return options;
};

export const get = (url, headers = {}) =>
  api.get(url, { ...getOptions(), ...headers });

export const post = (url, params = {}, headers = {}) =>
  api.post(url, params, { ...getOptions(), ...headers });

export const put = (url, params = {}, headers = {}) =>
  api.put(url, params, { ...getOptions(), ...headers });

export const remove = (url, headers = {}) =>
  api.delete(url, { ...getOptions(), ...headers });

export const patch = (url, params = {}, headers = {}) =>
  api.patch(url, params, { ...getOptions(), ...headers });
