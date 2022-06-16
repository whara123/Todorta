import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { BsPinMapFill } from "react-icons/bs";
import CalenderContorol from "../../components/Calender/CalenderControl";
import CalenderTable from "../../components/Calender/CalenderTable";
import CalenderBackGround from "../../components/Calender/CalenderBackGround";
import Point from "../../components/Point/Point";

export default function TodoCalender() {
  const [getMoment, setMoment] = useState(moment());
  const [todoPoint, setTodoPoint] = useState(0);
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    const todoPointData = localStorage.getItem("todoPoint");
    if (todoPointData) {
      setTodoPoint(parseInt(todoPointData, 10));
    }
  }, []);
  const today = getMoment;

  const firstWeek = today.clone().startOf("month").week();
  const lastWeek = today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf("month").week();

  const handlePrevMonth = () => {
    setMoment(getMoment.clone().subtract(1, "month"));
  };
  const handleNextMonth = () => {
    setMoment(getMoment.clone().add(1, "month"));
  };

  const handlePoint = (firstdone) => {
    if (!firstdone) {
      setTodoPoint(todoPoint + 1);
      localStorage.setItem("todoPoint", todoPoint + 1);
    }
  };

  const navigation = useNavigate();

  const handleMove = () => {
    navigation("/todoland");
  };

  const DayofTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const calenderContainerBackGround = useRef();
  const handleBackGroundColor = (color) => {
    calenderContainerBackGround.current.style.backgroundColor = color;
  };

  return (
    <>
      <CalenderContainer ref={calenderContainerBackGround}>
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
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          handlePoint={handlePoint}
        />
        {isReady && <Point todoPoint={todoPoint} />}
      </CalenderContainer>
      {isReady && (
        <MoveLandPageButton type="button" onClick={handleMove}>
          <BsPinMapFill />
        </MoveLandPageButton>
      )}
      {isReady && <CalenderBackGround handleBackGroundColor={handleBackGroundColor} />}
    </>
  );
}

const CalenderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 20px;
  user-select: none;
  background-color: #fff;
`;

const MoveLandPageButton = styled.button`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 100px;
  height: 100px;
  font-size: 40px;
  border-radius: 100px;
`;
