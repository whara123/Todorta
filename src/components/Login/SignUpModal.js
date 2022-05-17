/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";

export default function SignUpModal({ handleSignModal }) {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassward, setSignUpPassward] = useState("");
  const [checkSignUpPassward, setCheckSignUpPassward] = useState("");

  const reg = /^[a-zA-Z0-9+-\\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;

  const onChangeEmail = (e) => {
    setSignUpEmail(e.target.value);
  };

  const onChangePassWard = (e) => {
    setSignUpPassward(e.target.value);
  };

  const onChangeCheckPassWard = (e) => {
    setCheckSignUpPassward(e.target.value);
  };

  const handleSignUp = () => {
    if (signUpPassward.length >= 6) {
      if (signUpEmail.match(reg) !== null) {
        console.log("이메일 통과");
        if (signUpPassward === checkSignUpPassward) {
          console.log("비번 동일 가입가자~!");
        } else {
          console.log("비번 안돼");
        }
      } else {
        console.log("이메일 안돼");
      }
    } else {
      console.log("비번 6자이상쳐");
    }

    console.log(signUpEmail, signUpPassward, checkSignUpPassward);
  };

  return (
    <>
      <SignUpWrap>
        <SignUpText>이메일로 회원가입</SignUpText>
        <InputWarp>
          <label htmlFor="email">이메일</label>
          <SignUpAccountInput type="text" id="email" onChange={onChangeEmail} value={signUpEmail} />
          <label htmlFor="passward">비밀번호 입력</label>
          <SignUpAccountInput type="password" id="passward" onChange={onChangePassWard} value={signUpPassward} />
          <label htmlFor="passward">비밀번호 확인</label>
          <SignUpAccountInput
            type="password"
            id="passward"
            onChange={onChangeCheckPassWard}
            value={checkSignUpPassward}
          />
        </InputWarp>
        <SignUpButton type="button" onClick={handleSignUp}>
          시작하기
        </SignUpButton>
        <SignUpCloseButton type="button" onClick={handleSignModal}>
          <AiOutlineClose />
        </SignUpCloseButton>
      </SignUpWrap>
      <DimdScreen>딤드</DimdScreen>
    </>
  );
}

const SignUpModalAnim = keyframes`
  0% {
  }
  100% {
    width: 40em;
    padding: 20px 80px 40px 80px;
  }
`;

const SignUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  width: 20em;
  height: 30em;
  border-radius: 5px;
  padding: 10px 10px 20px 10px;
  z-index: 200;
  background-color: #fff;
  animation: ${SignUpModalAnim} 0.1s forwards;
`;

const InputWarp = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const SignUpText = styled.p`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  font-size: 1.5em;
`;

const SignUpAccountInput = styled.input`
  height: 30px;
  margin-bottom: 20px;
  border: 0;
  border-bottom: 1px solid #eee;

  &:focus {
    outline: none;
  }
`;

const SignUpButton = styled.button`
  height: 30px;
  margin-bottom: 10px;
  color: #fff;
  border-radius: 5px;
  background-color: #2f80ed;
`;
const SignUpCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 30px;
  font-size: 1.5em;
  background: none;
`;

const DimdScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 80;
  font-size: 0;
  background: rgba(0, 0, 0, 0.2);
`;

SignUpModal.propTypes = {
  handleSignModal: PropTypes.func.isRequired,
};
