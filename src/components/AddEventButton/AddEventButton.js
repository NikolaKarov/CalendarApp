import { useDispatch } from "react-redux";

import "./AddEventButton.css";
import { toggle } from "../../actions";

/**
 * React component for the Add Event Button.
 * @param {Object} props
 * @returns JSX
 */

const AddEventButton = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={`button_container  ${props.toggle ? "blurred" : ""}`}>
      <button onClick={() => dispatch(toggle())} className="button button-circle-right">
        +
      </button>
    </div>
  );
};

export default AddEventButton;
