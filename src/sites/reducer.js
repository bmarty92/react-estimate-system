import * as types from './actionTypes';

const INITIAL_STATE = {
  sample: 0,
};

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case types.SAMPLE:
      return { ...state, sample: state.sample + 1 };
    default:
      return state;
  }
};
