import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { AiOutlineUp } from "react-icons/ai";
import { BsPinMapFill } from "react-icons/bs";
import CalenderContorol from "../../components/Calender/CalenderControl";
import CalenderTable from "../../components/Calender/CalenderTable";
import Point from "../../components/Point/Point";

export default function TodoCalender() {
  const [getMoment, setMoment] = useState(moment());
  const [todoPoint, setTodoPoint] = useState(0);
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

  const MenuBtn = useRef();
  const backGroundMenuOn = () => {
    MenuBtn.current.style.bottom = "0px";
  };

  const DayofTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <>
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
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          handlePoint={handlePoint}
        />
        <Point todoPoint={todoPoint} />
      </CalenderContainer>
      <MoveLandPageButton type="button" onClick={handleMove}>
        <BsPinMapFill />
      </MoveLandPageButton>

      <CalenderBackground>
        <BackGroundMenu type="button" onClick={backGroundMenuOn}>
          <AiOutlineUp />
        </BackGroundMenu>
        <BackGroundMenuList ref={MenuBtn}>
          <BackGroundMenuItem>컨텐츠</BackGroundMenuItem>
          <BackGroundMenuItem>컨텐츠</BackGroundMenuItem>
          <BackGroundMenuItem>컨텐츠</BackGroundMenuItem>
        </BackGroundMenuList>
      </CalenderBackground>
    </>
  );
}

const CalenderContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
`;

const CalenderBackground = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
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

const BackGroundMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #999;
  font-size: 1.5em;
  color: #fff;
  &:hover {
    margin-bottom: 10px;
    transition: 0.2s;
  }
`;

const BackGroundMenuList = styled.ul`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: -120px;
  width: 100%;
  gap: 20px;
  background-color: #999;
  transition: 0.2s;
`;

const BackGroundMenuItem = styled.li`
  width: 8em;
  height: 5em;
  border-radius: 5px;
  background-color: #fff;
  margin: 20px 0 20px;
`;
