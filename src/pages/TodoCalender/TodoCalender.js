import React, { useState } from "react";
import moment from "moment";

export default function TodoCalender() {
  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek = today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf("month").week();

  const calenderArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week += 1) {
      result = result.concat(week);
    }
    return result;
  };

  return (
    <div>
      <div className="control">
        <button
          type="button"
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, "month"));
          }}
        >
          이전달
        </button>
        <span>{today.format("YYYY 년 MM 월")}</span>
        <button
          type="button"
          onClick={() => {
            setMoment(getMoment.clone().add(1, "month"));
          }}
        >
          다음달
        </button>
      </div>
      <table>
        <tbody> {calenderArr()}</tbody>
      </table>
    </div>
  );
}
