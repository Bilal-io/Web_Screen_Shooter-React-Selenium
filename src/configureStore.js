import { createStore, applyMiddleware, compose } from "redux";
import { fromJS } from "immutable";
import createSagaMiddleware from "redux-saga";

import createReducer from "./reducers";

import { appSaga } from "./containers/Form/sagas";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, persistedState) {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    process.env.NODE_ENV !== "production" &&
    typeof window === "object" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );

  sagaMiddleware.run(appSaga);
  return store;
}
