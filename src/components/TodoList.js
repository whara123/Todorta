import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const isDone = true;
  return (
    <TodoListBlock>
      <TodoItem text="프로젝트 생성하기" done={isDone} />
      <TodoItem text="컴포넌트 스타일링 하기" done={false} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    border: 4px solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
    border-radius: 20px;
    background-color: #aaaaaa;
  }
`;
