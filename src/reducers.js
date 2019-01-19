import { combineReducers } from "redux-immutable";

import globalReducer from "./containers/App/reducer";
import formReducer from "./containers/Form/reducer";

export default function reducer() {
  const rootReducer = combineReducers({
    global: globalReducer,
    form: formReducer
  });
  return rootReducer;
}
