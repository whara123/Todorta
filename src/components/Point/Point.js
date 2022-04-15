import React, { useState } from "react";
import styled from "styled-components";
import { BsCalendar2CheckFill } from "react-icons/bs";

export default function Point() {
  const [todoPoint, setTodoPoint] = useState(0);
  return (
    <PointWrap>
      <BsCalendar2CheckFill />
      {todoPoint}
    </PointWrap>
  );
}

const PointWrap = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.2em;
  font-weight: bold;
  line-height: 20px;
`;
