import React, { useState } from "react";
import styled from "styled-components";
import LoginModal from "../../components/Login/LoginModal";

export default function Home() {
  const [loginModal, setLoginModal] = useState();

  const handleLogin = () => {
    setLoginModal(!loginModal);
  };

  return (
    <HomeBody>
      <HomeHead>
        <h1>TODORTA</h1>
        <p>당신의 진짜 ToDoList</p>
      </HomeHead>
      <HomeMain>
        <MoveButton type="button" onClick={handleLogin}>
          로그인
        </MoveButton>
        {loginModal && <LoginModal handleLogin={handleLogin} />}
      </HomeMain>
    </HomeBody>
  );
}

const HomeBody = styled.div`
  position: relative;
`;

const HomeMain = styled.div`
  display: flex;
  justify-content: center;
`;

const MoveButton = styled.button`
  width: 200px;
  height: 100px;
  border: 1px solid #c5e2e8;
  border-radius: 5px;
  font-size: 1.5em;
  background: none;
  transition: 0.2s;
  &:active {
    background-color: #6963e0;
    color: #fff;
  }
  &:hover {
    background-color: #6963e0;
    color: #fff;
  }
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
