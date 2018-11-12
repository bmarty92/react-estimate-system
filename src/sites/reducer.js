import * as types from './actionTypes';

const INITIAL_STATE = {
  sites: [],
};

export default (state = INITIAL_STATE, { type, payload, id }) => {
  switch (type) {
    case types.ADD_INIT_DATA:
      return {
        ...state,
        sites: [...state.sites, { ...payload, id: state.sites.length }],
      };
    case types.ADD_ITEM_DATA: {
      const updatedSites = [...state.sites];
      const siteIndex = updatedSites.findIndex(item => {
        return item.id === Number(id);
      });
      const estimates = updatedSites[siteIndex].estimates || [];
      updatedSites[siteIndex].estimates = [...estimates, payload];
      return {
        ...state,
        sites: [...updatedSites],
      };
    }
    case types.ADD_SCHEDULE_DATA: {
      const updatedSites = [...state.sites];
      const siteIndex = updatedSites.findIndex(item => {
        return item.id === Number(id);
      });
      const schedule = updatedSites[siteIndex].schedule || [];
      updatedSites[siteIndex].schedule = [...schedule, payload];
      return {
        ...state,
        sites: [...updatedSites],
      };
    }
    default:
      return state;
  }
};
