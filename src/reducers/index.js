import { combineReducers } from "redux";

import scheduleReducer from "./schedule";
import counterReducer from "./counter";
import toggleReducer from "./toggle";

/**
 * Combine reducer function user in Redux.
 */

const allReducers = combineReducers({
  schedule: scheduleReducer,
  counter: counterReducer,
  toggle: toggleReducer,
});

export default allReducers;
