/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import CalenderContorol from "../../components/Calender/CalenderControl";
import CalenderTable from "../../components/Calender/CalenderTable";

export default function TodoCalender() {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  const firstWeek = today.clone().startOf("month").week();
  const lastWeek = today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf("month").week();

  const handlePrevMonth = () => {
    setMoment(getMoment.clone().subtract(1, "month"));
  };
  const handleNextMonth = () => {
    setMoment(getMoment.clone().add(1, "month"));
  };

  const DayofTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <CalenderContainer>
      <CalenderContorol
        year={today.format("YYYY")}
        month={today.format("M월")}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <CalenderTable
        firstWeek={firstWeek}
        lastWeek={lastWeek}
        today={today}
        moment={moment()}
        DayofTheWeek={DayofTheWeek}
      />
    </CalenderContainer>
  );
}

const CalenderContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 10px 0 10px 0;
  background-color: #fff;
  user-select: none;
`;
