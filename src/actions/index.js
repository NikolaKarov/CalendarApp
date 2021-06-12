/**
 *
 * The actions for Redux.
 */

export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const toggle = () => {
  return {
    type: "TOGGLE",
  };
};

export const createEvent = (payload) => {
  return {
    type: "CREATE_EVENT",
    payload,
  };
};
