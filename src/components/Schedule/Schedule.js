import { useSelector } from "react-redux";

import "./Schedule.css";
import ScheduleDay from "./ScheduleDay";

/**
 * React component for the Shedule.
 * @param {Object} props
 * @returns JSX
 */

const Schedule = (props) => {
  const schedule = useSelector((state) => state.schedule);
  const counter = useSelector((state) => state.counter);

  const currentMonth = Object.values(schedule)[counter];
  const currentMonthArr = Object.entries(currentMonth);

  return (
    <section className={`body  ${props.toggle ? "blurred" : ""}`}>
      {currentMonthArr.sort().map((x) => {
        return <ScheduleDay key={x[0]} data={x}></ScheduleDay>;
      })}
    </section>
  );
};

export default Schedule;
