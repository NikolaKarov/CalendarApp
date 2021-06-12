import "./ScheduleDay.css";

/**
 * React component for single day of the scheduler.
 * @param {Object} props
 * @returns JSX
 */

const ScheduleDay = (props) => {
  return (
    <section className="day">
      <div className="day-title">
        <span className="day-title-number">{props.data[0]}</span>
        <span className="day-title-weekday">{props.data[1].weekday}</span>
      </div>
      <div className="day-content">
        {props.data[1].events
          .sort((a, b) => a.eventTime.localeCompare(b.eventTime))
          .map((x) => {
            return (
              <article className="day-content-note">
                <span className="day-content-note-time">{x.eventTime}</span>
                <span className="day-content-note-name">{x.eventName}</span>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default ScheduleDay;
