import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import Point from "../../components/Point/Point";

export default function TodoLand() {
  const [todoPoint, setTodoPoint] = useState(0);
  useEffect(() => {
    const todoPointData = localStorage.getItem("todoPoint");
    if (todoPointData) {
      setTodoPoint(parseInt(todoPointData, 10));
    }
  }, []);

  const navigation = useNavigate();

  const handleMove = () => {
    navigation("/calender");
  };

  return (
    <>
      <div>준비중입니다.</div>
      <Point todoPoint={todoPoint} />
      <button type="button" onClick={handleMove}>
        <BsFillCalendar2WeekFill />
      </button>
    </>
  );
}
