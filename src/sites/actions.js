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
