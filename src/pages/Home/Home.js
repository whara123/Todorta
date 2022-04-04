import React from "react";
import styled from "styled-components";
import TodoHead from "../../components/Todo/TodoHead";
import TodoList from "../../components/Todo/TodoList";
import TodoCreate from "../../components/Todo/TodoCreate";

export default function Home() {
  return (
    <div>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </div>
  );
}

const TodoTemplate = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 512px;
  max-height: 650px;
  margin: 0 auto;
  padding-bottom: 155px;
  border-radius: 16px;

  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;
