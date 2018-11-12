import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import getMiddlewares from './getMiddlewares';
import reducers from './reducers';

const middlewares =
  process.env.NODE_ENV === 'production'
    ? getMiddlewares
    : composeWithDevTools(getMiddlewares);

const store = createStore(reducers, middlewares);

export default store;
