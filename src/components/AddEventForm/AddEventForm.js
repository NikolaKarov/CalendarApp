import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";

import { createEvent, toggle } from "../../actions";
import "./AddEventForm.css";

/**
 * React component for the Add Event Form.
 * @param {Object} props
 * @returns JSX
 */

const AddEventForm = (props) => {
  const dispatch = useDispatch();

  const useStyles = makeStyles((theme) => ({
    textField: {
      marginRight: theme.spacing(1),
      width: "100%",
      paddingBottom: 10,
    },
  }));

  const classes = useStyles();

  /**
   * Submit function for the form. Creates new event in the scheduler.
   * @param {Object} e
   */

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const eventName = formData.get("event-name");
    const timeDate = formData.get("time-date");

    if (eventName.length > 0) {
      dispatch(createEvent({ eventName, timeDate }));
      dispatch(toggle());
      e.target.reset();
    }
  };

  return (
    <div className={`form-wrapper  ${props.toggle ? "" : "hidden"}`}>
      <form className="form" onSubmit={onSubmitForm}>
        <label htmlFor="name">Event name:</label>
        <input type="text" placeholder="Event name" name="event-name" />
        <TextField
          name="time-date"
          id="datetime-local"
          label="New event"
          type="datetime-local"
          defaultValue="2021-06-11T10:30"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <button className="save-button">Save</button>
      </form>
    </div>
  );
};

export default AddEventForm;
