import { post, get } from 'services/api';

export const save = (formData) => post('project', formData);

export const getAll = () => get('project');
