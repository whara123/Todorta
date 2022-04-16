import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BsCalendar2CheckFill } from "react-icons/bs";

export default function Point({ todoPoint }) {
  return (
    <PointWrap>
      <BsCalendar2CheckFill />
      <PointInput disabled value={todoPoint} />
    </PointWrap>
  );
}

const PointWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  position: fixed;
  right: 2vw;
  top: 0;
  font-size: 1.2em;
  font-weight: bold;
`;

const PointInput = styled.input`
  display: inline;
  width: 50px;
  text-align: center;
  font-size: 1em;
  color: #000;
  border: none;
  background: none;
`;

Point.propTypes = {
  todoPoint: PropTypes.number.isRequired,
};
