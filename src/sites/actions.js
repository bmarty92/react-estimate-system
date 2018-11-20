import * as types from './actionTypes';

export const addInitialData = payload => {
  return { type: types.ADD_INIT_DATA, payload };
};
export const addItemData = (payload, id) => {
  return { type: types.ADD_ITEM_DATA, payload, id };
};
export const addSchedule = (payload, id) => {
  return { type: types.ADD_SCHEDULE_DATA, payload, id };
};
export const addMechanismData = (payload, id) => {
  return { type: types.ADD_MECHANISM_DATA, payload, id };
};
export const addMaterialRequests = (payload, id) => {
  return { type: types.ADD_MATERIAL_REQUEST, payload, id };
};
export const addMechanismRequests = (payload, id) => {
  return { type: types.ADD_MECHANISM_REQUEST, payload, id };
};
export const addNotes = (payload, id) => {
  return { type: types.ADD_NOTES, payload, id };
};
