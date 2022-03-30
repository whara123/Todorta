import React from "react";
import styled from "styled-components";

export default function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>2022년 3월 30일</h1>
      <p className="day">수요일</p>
      <p className="tasks-left">할 일 N개 남음</p>
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
