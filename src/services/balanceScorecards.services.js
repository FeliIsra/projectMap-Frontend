import { get, post, put, remove } from 'services/api';

export const create = (formData) => post('balanced-scorecard', formData);

export const deleteBalanceScorecard = (id) =>
  remove(`balanced-scorecards/${id}`);

export const getOne = (id) => get(`balanced-scorecard/${id}`);
export const getOptions = () => get(`balanced-scorecard`);

export const update = (id, formData) =>
  put(`balanced-scorecard/${id}`, formData);

export const addInitiative = (id, formData) =>
  post(`balanced-scorecard/${id}/initiatives`, formData);

export const addObjetive = (id, formData) =>
  post(`balanced-scorecard/${id}/objetives`, formData);

export const addCheckpoint = (id, objetiveId, formData) =>
  post(
    `balanced-scorecard/${id}/objetives/${objetiveId}/checkpoints`,
    formData
  );

export const deleteInitiative = (id, initiativeId) =>
  remove(`balanced-scorecard/${id}/initiatives/${initiativeId}`);

export const deleteObjetive = (id, objetiveId) =>
  remove(`balanced-scorecard/${id}/objetives/${objetiveId}`);

export const deleteCheckpoint = (id, objetiveId, checkpointId) =>
  remove(
    `balanced-scorecard/${id}/objetives/${objetiveId}/checkpoints/${checkpointId}`
  );

export const updateInitiative = (id, initiativeId, formData) =>
  put(`balanced-scorecard/${id}/initiatives/${initiativeId}`, formData);

export const updateObjetive = (id, objetiveId, formData) =>
  put(`balanced-scorecard/${id}/objetives/${objetiveId}`, formData);

export const updateCheckpoint = (id, objetiveId, checkpointId, formData) =>
  put(
    `balanced-scorecard/${id}/objetives/${objetiveId}/checkpoints/${checkpointId}`,
    formData
  );
