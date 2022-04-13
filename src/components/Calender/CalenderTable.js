/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import TodoTemplate from "../Todo/TodoTemplate";
import { useTodoState } from "../../TodoContext";

export default function CalenderTable({
  firstWeek,
  lastWeek,
  today,
  moment,
  DayofTheWeek,
  handlePrevMonth,
  handleNextMonth,
}) {
  const [todoOpen, setTodoOpen] = useState(false);
  const [selectDay, setSelectDay] = useState(0);
  const [selectMonth, setSelectMonth] = useState(0);
  const [selectYear, setSelectYear] = useState(0);
  const [dayWeekIndex, setDayWeekIndex] = useState(0);

  const todos = useTodoState();

  const handleOpenTodoTemplate = (e) => {
    if (e.target.classList.contains("otherMonth")) {
      if (e.target.id >= 25) {
        handlePrevMonth();
      } else {
        handleNextMonth();
      }
    } else {
      setDayWeekIndex(e.target.classList[e.target.classList.length - 1]);
      setSelectYear(today.format("YYYY"));
      setSelectMonth(today.format("MM"));
      setSelectDay(e.target.id);
      setTodoOpen(!todoOpen);
    }
  };

  const handleClick = () => {
    setTodoOpen(!todoOpen);
  };

  const hasTodo = (days) => {
    let dayTodo = "";
    dayTodo = todos.filter(
      (todo) =>
        `${days.format("YYYY")}-${days.format("MM")}-${days.format("D")}` === `${todo.year}-${todo.month}-${todo.days}`
    );
    return dayTodo.length;
  };

  const remainTodo = (days) => {
    let lengTodo = "";
    lengTodo = todos.filter(
      (todo) =>
        `${days.format("YYYY")}-${days.format("MM")}-${days.format("D")}` ===
          `${todo.year}-${todo.month}-${todo.days}` && !todo.done
    );
    return lengTodo.length;
  };

  const calenderArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week += 1) {
      result = result.concat(
        <CalenderTr key={uuidv4()}>
          {Array(7)
            .fill(0)
            // eslint-disable-next-line no-loop-func
            .map((data, index) => {
              const days = today.clone().startOf("year").week(week).startOf("week").add(index, "day");

              if (moment.format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <CalenderTd
                    key={uuidv4()}
                    other="toDay"
                    index={index}
                    onClick={handleOpenTodoTemplate}
                    id={days.format("D")}
                    className={`toDay ${index}`}
                  >
                    <span id={days.format("D")} className={`toDay ${index}`}>
                      {days.format("D")}
                    </span>
                    <TodoIcon>
                      {hasTodo(days) > 0 && (
                        <TodoLeft done={remainTodo(days)}>{remainTodo(days) > 0 ? "Todo" : "Done"}</TodoLeft>
                      )}
                    </TodoIcon>
                  </CalenderTd>
                );
              }
              if (days.format("MM") !== today.format("MM")) {
                return (
                  <CalenderTd
                    key={uuidv4()}
                    other="otherMonth"
                    index={index}
                    style={{ color: "#eee" }}
                    onClick={handleOpenTodoTemplate}
                    id={days.format("D")}
                    className={`otherMonth ${index}`}
                  >
                    <span id={days.format("D")} className={`otherMonth ${index}`}>
                      {days.format("D")}
                    </span>
                  </CalenderTd>
                );
              }
              return (
                <CalenderTd
                  key={uuidv4()}
                  other="thisMonth"
                  index={index}
                  onClick={handleOpenTodoTemplate}
                  id={days.format("D")}
                  className={`thisMonth ${index}`}
                >
                  <span id={days.format("D")} className={`thisMonth ${index}`}>
                    {days.format("D")}
                  </span>
                  <TodoIcon>
                    {hasTodo(days) > 0 && (
                      <TodoLeft done={remainTodo(days)}>{remainTodo(days) > 0 ? "Todo" : "Done"}</TodoLeft>
                    )}
                  </TodoIcon>
                </CalenderTd>
              );
            })}
        </CalenderTr>
      );
    }
    return result;
  };

  return (
    <>
      <CalenderDateTable>
        <DayOftheWeekBody>
          {DayofTheWeek.map((day) => (
            <CalenderTr key={uuidv4()}>
              <CalenderDayoftheWeek day={day}>{day}</CalenderDayoftheWeek>
            </CalenderTr>
          ))}
        </DayOftheWeekBody>
        <CalenderBody>{calenderArr()}</CalenderBody>
      </CalenderDateTable>
      {todoOpen && (
        <TodoTemplate
          handleClick={handleClick}
          year={selectYear}
          month={selectMonth}
          days={selectDay}
          dayWeekIndex={dayWeekIndex}
          DayofTheWeek={DayofTheWeek}
        />
      )}
    </>
  );
}

const CalenderDateTable = styled.table`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const CalenderBody = styled.tbody`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DayOftheWeekBody = styled.tbody`
  display: flex;
  justify-content: center;
`;
const CalenderTr = styled.tr`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const CalenderTd = styled.td`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100px;
  padding-top: 10px;
  border-bottom: 1px solid #888;
  color: ${(props) => (props.index === 0 ? "#DB4A4B" : props.index === 6 ? "#676EDB" : "#000")};
  span {
    width: 18px;
  }
  .toDay {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: -3px;
      left: -6px;
      width: 30px;
      height: 30px;
      border-radius: 25px;
      background-color: rgba(103, 110, 219, 0.2);
    }
  }
  &:hover {
    outline: 2px solid #cee2f2;
  }
  &:active {
    outline: 1px solid #cee2f2;
  }
`;

const CalenderDayoftheWeek = styled.td`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-bottom: 1px solid #888;
  color: ${(props) => (props.day === "일" ? "#DB4A4B" : props.day === "토" ? "#676EDB" : "#000")};
`;

const TodoIcon = styled.div`
  margin-top: 15px;
  pointer-events: none;
`;

const TodoLeft = styled.div`
  background-color: ${(props) => (props.done !== 0 ? "#e08684" : "#676EDB")};
  padding: 0 5px;
  border-radius: 10px;
  font-weight: bold;
  color: #fff;
`;

CalenderTable.propTypes = {
  firstWeek: PropTypes.number.isRequired,
  lastWeek: PropTypes.number.isRequired,
  today: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  moment: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  DayofTheWeek: PropTypes.arrayOf(PropTypes.string).isRequired,
  handlePrevMonth: PropTypes.func.isRequired,
  handleNextMonth: PropTypes.func.isRequired,
};
