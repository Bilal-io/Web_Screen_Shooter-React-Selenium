import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";

// Import store configuration
import configureStore from "./configureStore";

import { saveState } from "./utils/localStorage";

const initialState = {};

const store = configureStore(initialState);

store.subscribe(() => {
  saveState(store.getState().getIn(["global", "screenshots"]));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
