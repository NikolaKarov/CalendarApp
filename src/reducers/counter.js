/**
 * Reducer function for the counter used to keep track of the current month.
 * @param {number} state
 * @param {function} action
 * @returns number
 */

const counterReducer = (state = 6, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
