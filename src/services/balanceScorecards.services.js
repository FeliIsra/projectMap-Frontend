import { get, post, put, remove } from 'services/api';

export const create = (formData) => post('balanced-scorecards', formData);

export const deleteBalanceScorecard = (id) =>
  remove(`balanced-scorecards/${id}`);

export const getOne = (id) => get(`balanced-scorecards/${id}`);
export const getOptions = () => get(`balanced-scorecards`);

export const update = (id, formData) =>
  put(`balanced-scorecards/${id}`, formData);

export const addInitiative = (id, formData) =>
  post(`balanced-scorecards/${id}/initiatives`, formData);

export const addObjetive = (id, formData) =>
  post(`balanced-scorecards/${id}/objectives`, formData);

export const addCheckpoint = (id, objetiveId, formData) =>
  post(
    `balanced-scorecards/${id}/objectives/${objetiveId}/checkpoints`,
    formData
  );

export const deleteInitiative = (id, initiativeId) =>
  remove(`balanced-scorecards/${id}/initiatives/${initiativeId}`);

export const deleteObjetive = (id, objetiveId) =>
  remove(`balanced-scorecards/${id}/objectives/${objetiveId}`);

export const deleteCheckpoint = (id, objetiveId, checkpointId) =>
  remove(
    `balanced-scorecards/${id}/objectives/${objetiveId}/checkpoints/${checkpointId}`
  );

export const updateInitiative = (id, initiativeId, formData) =>
  put(`balanced-scorecards/${id}/initiatives/${initiativeId}`, formData);

export const updateObjetive = (id, objetiveId, formData) =>
  put(`balanced-scorecards/${id}/objectives/${objetiveId}`, formData);

export const updateCheckpoint = (id, objetiveId, checkpointId, formData) =>
  put(
    `balanced-scorecards/${id}/objectives/${objetiveId}/checkpoints/${checkpointId}`,
    formData
  );
