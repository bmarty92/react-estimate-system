import { applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

const logging = () => next => action => {
  // eslint-disable-next-line no-console
  console.log(action.type);
  return next(action);
};

export default applyMiddleware(thunk, apiMiddleware, logging);
