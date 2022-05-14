import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigation = useNavigate();
  const [loginModal, setLoginModal] = useState();
  const Dimd = useRef();

  const handleLogin = () => {
    setLoginModal(!loginModal);
    // navigation("/calender");
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
        {loginModal && (
          <>
            <LoginModal>
              <LoginText>로그인 또는 회원가입</LoginText>
              <LoginInputWrap>
                <IdPassWardInput type="text" placeholder="아이디" />
                <IdPassWardInput type="password" placeholder="비밀번호" />
              </LoginInputWrap>
              <LoginButton type="button">로그인</LoginButton>
              <SignUpFindIdWrap>
                <button type="button">회원가입</button>
                <button type="button">아이디/비밀번호 찾기</button>
              </SignUpFindIdWrap>
            </LoginModal>
            <DimdScreen ref={Dimd} onClick={handleLogin}>
              딤드
            </DimdScreen>
          </>
        )}
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

const LoginModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 10%);
  width: 20em;
  border-radius: 5px;
  background-color: #fff;
  padding-bottom: 30px;
`;

const LoginText = styled.p`
  width: 100%;
  text-align: center;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid #767676;
`;

const LoginInputWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0 30px 0;
`;

const IdPassWardInput = styled.input`
  width: 80%;
  height: 30px;
  &::placeholder {
    padding-left: 10px;
  }
`;

const LoginButton = styled.button`
  width: 80%;
  height: 30px;
  margin-bottom: 10px;
  color: #fff;
  border-radius: 5px;
  background-color: #2f80ed;
`;

const SignUpFindIdWrap = styled.div`
  display: flex;
  gap: 10px;
  button {
    background: none;
    color: #767676;
    font-size: 0.8em;
  }
`;

const DimdScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  font-size: 0;
  background: rgba(0, 0, 0, 0.2);
`;
