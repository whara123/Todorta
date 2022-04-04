import React from "react";
import styled from "styled-components";
import { useTodoState } from "../../TodoContext";

export default function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <p className="day">{dayName}</p>
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
