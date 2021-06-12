/**
 * Reducer function for Redux. Controls wether or not the New Event Form is visible.
 * @param {boolean} state
 * @param {function} action
 * @returns boolean
 */

const toggleReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    default:
      return state;
  }
};

export default toggleReducer;
