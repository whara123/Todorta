import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigation = useNavigate();

  const handleMove = () => {
    navigation("/calender");
  };

  return (
    <div>
      <HomeHead>
        <h1>TODORTA</h1>
        <p>당신의 진짜 ToDoList</p>
      </HomeHead>
      <HomeMain>
        <MoveButton type="button" onClick={handleMove}>
          시작하기
        </MoveButton>
      </HomeMain>
    </div>
  );
}

const HomeMain = styled.div`
  display: flex;
  justify-content: center;
`;

const MoveButton = styled.button`
  width: 200px;
  padding: 20px;
  border: 1px solid #c5e2e8;
  border-radius: 5px;
  font-size: 1.5em;
  background: none;
`;

const HomeHead = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 50vh;
  margin-bottom: 150px;
  background-color: #999;
  color: #fff;
  h1 {
    font-size: 3em;
  }
`;
