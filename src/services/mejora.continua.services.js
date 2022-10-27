import { get } from 'services/api';

export const getOne = (id) => get(`continuous-improvements/${id}`);
