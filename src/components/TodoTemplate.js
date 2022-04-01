import React from "react";
import styled from "styled-components";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

export default function TodoTemplate() {
  return (
    <div>
      <TodoTemplateModal>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplateModal>
    </div>
  );
}

const TodoTemplateModal = styled.div`
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
