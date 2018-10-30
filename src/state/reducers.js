import { combineReducers } from 'redux';
import sites from '../sites';

export default combineReducers({
  [sites.constants.NAME]: sites.reducer,
});
