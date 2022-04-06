import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

export default function TodoTemplate({ handleClick, days, dayOfWeek, DayofTheWeek }) {
  return (
    <TodoWrap>
      <TodoTemplateModal>
        <TodoHead days={days} dayOfWeek={dayOfWeek} DayofTheWeek={DayofTheWeek} />
        <TodoList />
        <TodoCreate />
      </TodoTemplateModal>
      <Dimmed onClick={handleClick}>dimmed</Dimmed>
    </TodoWrap>
  );
}

const TodoWrap = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const TodoTemplateModal = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 90%;

  width: 512px;
  max-height: 650px;
  margin: 0 auto;
  padding-bottom: 155px;
  border-radius: 16px;

  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

const Dimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  font-size: 0;
  background: rgba(0, 0, 0, 0.2);
`;

TodoTemplate.propTypes = {
  handleClick: PropTypes.func.isRequired,
  days: PropTypes.string.isRequired,
  dayOfWeek: PropTypes.string.isRequired,
  DayofTheWeek: PropTypes.arrayOf(PropTypes.string).isRequired,
};
