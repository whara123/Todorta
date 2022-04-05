/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

export default function CalenderTable({ firstWeek, lastWeek, today, moment, DayofTheWeek }) {
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
                  <CalenderTd key={uuidv4()} other="toDay" id={index}>
                    <span className="today">{days.format("D")}</span>
                  </CalenderTd>
                );
              }
              if (days.format("MM") !== today.format("MM")) {
                return (
                  <CalenderTd key={uuidv4()} other="otherMonth" id={index} style={{ color: "#eee" }}>
                    <span>{days.format("D")}</span>
                  </CalenderTd>
                );
              }
              return (
                <CalenderTd key={uuidv4()} other="thisMonth" id={index}>
                  <span>{days.format("D")}</span>
                </CalenderTd>
              );
            })}
        </CalenderTr>
      );
    }
    return result;
  };

  return (
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
  justify-content: center;
  width: 100px;
  height: 100px;
  padding-top: 10px;
  border-bottom: 1px solid #888;
  color: ${(props) => (props.id === 0 ? "#DB4A4B" : props.id === 6 ? "#676EDB" : "#000")};
  span {
    width: 18px;
    text-align: center;
  }
  .today {
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
`;

const CalenderDayoftheWeek = styled.td`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 40px;
  border-bottom: 1px solid #888;
  color: ${(props) => (props.day === "일" ? "#DB4A4B" : props.day === "토" ? "#676EDB" : "#000")};
`;

CalenderTable.propTypes = {
  firstWeek: PropTypes.number.isRequired,
  lastWeek: PropTypes.number.isRequired,
  today: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  moment: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  DayofTheWeek: PropTypes.arrayOf(PropTypes.string).isRequired,
};
