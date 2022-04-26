import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import Point from "../../components/Point/Point";
import TestMap from "../../asset/image/testmap.png";

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
    <LandWrap>
      <MapIamage src={TestMap} alt="맵 이미지" />

      <Point todoPoint={todoPoint} />
      <button type="button" onClick={handleMove}>
        <BsFillCalendar2WeekFill />
      </button>
    </LandWrap>
  );
}

const MapIamage = styled.img`
  width: 50%;
  margin: 0 auto;
`;

const LandWrap = styled.div`
  width: 100%;
  height: 100%;
`;
