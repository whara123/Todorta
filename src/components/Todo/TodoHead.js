import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useTodoState } from "../../TodoContext";

export default function TodoHead({ days, month, year, dayWeekIndex, DayofTheWeek }) {
  const todos = useTodoState();
  // eslint-disable-next-line no-return-assign
  const todoShow = todos.map((todo) =>
    // eslint-disable-next-line no-param-reassign
    `${year}-${month}-${days}` === `${todo.year}-${todo.month}-${todo.days}` ? (todo.show = true) : (todo.show = false)
  );
  const undoneTasks = todos.filter((todo) => !todo.done && todo.show);

  return (
    <TodoHeadBlock>
      <h1>{`${days}일의 TodoList`}</h1>
      <p className="day">{`${DayofTheWeek[dayWeekIndex]}요일`}</p>
      <p className="tasks-left">
        {undoneTasks.length !== 0 ? `할 일 ${undoneTasks.length}개 남음` : "오늘 계획 완료!🤗"}
      </p>
    </TodoHeadBlock>
  );
}

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    margin-top: 40px;
    font-size: 18px;
    font-weight: bold;
    color: #20c997;
  }
`;
TodoHead.propTypes = {
  days: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  dayWeekIndex: PropTypes.string.isRequired,
  DayofTheWeek: PropTypes.arrayOf(PropTypes.string).isRequired,
};
