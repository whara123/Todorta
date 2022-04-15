import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BsCalendar2CheckFill } from "react-icons/bs";

export default function Point({ todoPoint }) {
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

  position: absolute;
  right: 20%;
  top: 10%;
  font-size: 1.2em;
  font-weight: bold;
  line-height: 20px;
`;

Point.propTypes = {
  todoPoint: PropTypes.number.isRequired,
};
