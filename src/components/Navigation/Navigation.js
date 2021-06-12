import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";

import "./Navigation.css";
import { increment, decrement } from "../../actions";

/**
 * React component for the Navigation.
 * @param {Object} props
 * @returns JSX
 */

const Navigation = (props) => {
  const counter = useSelector((state) => state.counter);
  const schedule = useSelector((state) => state.schedule);
  const dispatch = useDispatch();

  return (
    <section className={`navigation  ${props.toggle ? "blurred" : ""}`}>
      <Button onClick={() => dispatch(decrement())} variant="contained" disabled={counter === 0}>
        {"< Previous"}
      </Button>
      <p>{Object.keys(schedule)[counter]}</p>
      <Button onClick={() => dispatch(increment())} variant="contained" disabled={counter === 11}>
        {"Next >"}
      </Button>
    </section>
  );
};

export default Navigation;
