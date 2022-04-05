/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import styled, { css } from "styled-components";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

export default function TodoCalender() {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  const firstWeek = today.clone().startOf("month").week();
  const lastWeek = today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf("month").week();

  const DayofTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const calenderArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week += 1) {
      result = result.concat(
        <CalenderTr key={week}>
          {Array(7)
            .fill(0)
            // eslint-disable-next-line no-loop-func
            .map((data, index) => {
              const days = today.clone().startOf("year").week(week).startOf("week").add(index, "day");

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
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
    <CalenderContainer>
      <CalenderContorol>
        <MoveButton
          type="button"
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, "month"));
          }}
        >
          <AiFillCaretLeft />
        </MoveButton>

        <DateWrap>
          <TextYear>{today.format("YYYY")}</TextYear>
          <TextMonth>{today.format("M월")}</TextMonth>
        </DateWrap>
        <MoveButton
          type="button"
          onClick={() => {
            setMoment(getMoment.clone().add(1, "month"));
          }}
        >
          <AiFillCaretRight />
        </MoveButton>
      </CalenderContorol>

      <CalenderTable>
        <DayOftheWeekBody>
          {DayofTheWeek.map((day) => (
            <CalenderTr>
              <CalenderDayoftheWeek day={day}>{day}</CalenderDayoftheWeek>
            </CalenderTr>
          ))}
        </DayOftheWeekBody>
        <CalenderBody>{calenderArr()}</CalenderBody>
      </CalenderTable>
    </CalenderContainer>
  );
}

const CalenderContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: 10px 0 10px 0;
  background-color: #fff;
  user-select: none;
`;

const CalenderContorol = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  margin: 0 100px;
  margin-bottom: 30px;
  border-radius: 20px;
  background-color: #cee2f2;
`;

const CalenderTable = styled.table`
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
  .today {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: -1px;
      right: -8px;
      width: 25px;
      height: 25px;
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

const MoveButton = styled.button`
  background: none;
  padding: 0 50px;
  font-size: 2em;
`;

const DateWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextYear = styled.strong`
  text-align: left;
  font-size: 1em;
`;

const TextMonth = styled.strong`
  text-align: left;
  font-size: 2em;
`;
