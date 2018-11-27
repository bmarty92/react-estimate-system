import { NAME } from './constants';

// Sites.js, to map Site button
export const getSites = state => state[NAME].sites;

export const getSiteById = (state, id) => {
  const sites = getSites(state);
  const siteById = sites.find(site => site.id === Number(id));
  return siteById;
};

export const getEstimatesId = (state, id) => {
  const siteById = getSiteById(state, id) || {};
  return siteById.estimates || [];
};

export const getScheduleId = (state, id) => {
  const siteById = getSiteById(state, id) || {};
  return siteById.schedule || [];
}

export const getMechanismsId = (state, id) => {
  const siteById = getSiteById(state, id) || {};
  return siteById.mechanisms || [];
}

export const getMechanismRequestsId = (state, id) => {
  const siteById = getSiteById(state, id) || {};
  return siteById.mechanismsRequest || [];
}

export const getMaterialRequestId = (state, id) => {
  const siteById = getSiteById(state, id) || {};
  return siteById.materialRequest || [];
}

export const getNotesId = (state, id) => {
  const siteById = getSiteById(state, id) || {};
  return siteById.notes || [];
}
