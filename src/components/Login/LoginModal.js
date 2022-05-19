/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import SignUpModal from "./SignUpModal";

export default function LoginModal({ handleLogin }) {
  const navigation = useNavigate();
  const [idInpnut, setIdInpnut] = useState("");
  const [passWardInput, setPassWardInput] = useState("");
  const [IsRightAccount, setIsRightAccount] = useState(false);
  const [IsWrong, setIsWrong] = useState(false);
  const [IsSignUp, setIsSignUp] = useState(false);

  const Dimd = useRef();
  const inputFocus = useRef();
  const passFocus = useRef();

  const onChangeId = (event) => {
    setIdInpnut(event.target.value);
  };
  const onChangePassWard = (event) => {
    setPassWardInput(event.target.value);
  };
  const handleSignModal = () => {
    setIsSignUp(!IsSignUp);
    setIsWrong(false);
  };

  const checkLogin = () => {
    if (idInpnut) {
      if (passWardInput) {
        if (IsRightAccount) {
          console.log("로그인 성공");
          setIsWrong(false);
          navigation("/calender");
        } else {
          console.log("로그인 실패");
          setIdInpnut("");
          setPassWardInput("");
          setIsWrong(true);
        }
      } else {
        passFocus.current.focus();
      }
    } else {
      inputFocus.current.focus();
    }
  };

  return (
    <>
      <LoginModalWrap>
        <LoginText>로그인 또는 회원가입</LoginText>
        <LoginInputWrap>
          <IdPassWardInput type="text" placeholder="아이디" ref={inputFocus} onChange={onChangeId} value={idInpnut} />
          <IdPassWardInput
            type="password"
            placeholder="비밀번호"
            ref={passFocus}
            onChange={onChangePassWard}
            value={passWardInput}
          />
          {IsWrong && <WrongText>아이디 혹은 비밀번호가 틀렸습니다.</WrongText>}
        </LoginInputWrap>
        <LoginButton type="button" onClick={checkLogin}>
          로그인
        </LoginButton>
        <SignUpFindIdWrap>
          <button type="button" onClick={handleSignModal}>
            회원가입
          </button>
          <button type="button">아이디/비밀번호 찾기</button>
        </SignUpFindIdWrap>
      </LoginModalWrap>
      {IsSignUp && <SignUpModal handleSignModal={handleSignModal} />}
      <DimdScreen ref={Dimd} onClick={handleLogin}>
        딤드
      </DimdScreen>
    </>
  );
}

const LoginModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  width: 30em;
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
  margin: 30px 0 30px 0;
`;

const IdPassWardInput = styled.input`
  width: 80%;
  height: 30px;
  &::placeholder {
    padding-left: 5px;
  }
`;

const WrongText = styled.p`
  position: absolute;
  top: 56%;
  color: red;
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

LoginModal.propTypes = {
  handleLogin: PropTypes.func.isRequired,
};
