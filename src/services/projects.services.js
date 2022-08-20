import { post, get } from 'services/api';

export const save = (formData) => post('projects', formData);

export const getAll = () => get('projects');
