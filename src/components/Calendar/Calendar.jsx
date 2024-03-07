import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import s from "./Calendar.module.css";
import DatePicker from "react-datepicker";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <div className={s.header}>Календарь</div>

      <div className={s.main}>
      <DatePicker
          dateFormat="dd.MM.yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
    </div>
  );
}
export default Calendar;
