/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import styled, { css } from "styled-components";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

export default function TodoCalender() {
  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  const firstWeek = today.clone().startOf("month").week();
  const lastWeek = today.clone().endOf("month").week() === 1 ? 53 : today.clone().endOf("month").week();

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
                  <CalenderTd key={uuidv4()} other="toDay">
                    <span>{days.format("D")}</span>
                  </CalenderTd>
                );
              }
              if (days.format("MM") !== today.format("MM")) {
                return (
                  <CalenderTd key={uuidv4()} other="otherMonth">
                    <span>{days.format("D")}</span>
                  </CalenderTd>
                );
              }
              return (
                <CalenderTd key={uuidv4()} other="thisMonth">
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
        <button
          type="button"
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, "month"));
          }}
        >
          이전달
        </button>
        <span>{today.format("YYYY-MM")}</span>
        <button
          type="button"
          onClick={() => {
            setMoment(getMoment.clone().add(1, "month"));
          }}
        >
          다음달
        </button>
      </CalenderContorol>
      <CalenderTable>
        <CalenderBody>{calenderArr()}</CalenderBody>
      </CalenderTable>
    </CalenderContainer>
  );
}

const CalenderContainer = styled.div`
  height: 100vh;
  width: 100vw;
  font-size: 1.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CalenderContorol = styled.div`
  display: flex;
  flex-direction: row;
`;

const CalenderTable = styled.table`
  display: flex;
  width: 50vw;
  height: 50vh;
`;

const CalenderBody = styled.tbody`
  display: flex;
  flex-direction: column;
`;

const CalenderTr = styled.tr`
  display: flex;
  flex-direction: row;
`;

const CalenderTd = styled.td`
  display: flex;
  border: 1px solid gray;
  width: 5vw;
  height: 5vh;
  // eslint-disable-next-line no-nested-ternary
  background-color: ${(props) => (props.other === "toDay" ? "red" : props.other === "otherMonth" ? "#333" : "#fff")};
  color: ${(props) => (props.other === "otherMonth" ? "#fff" : "#000")};
  span {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;
