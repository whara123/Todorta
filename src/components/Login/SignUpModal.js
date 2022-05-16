/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import styled from "styled-components";

export default function SignUpModal() {
  return (
    <SignUpWrap>
      <p>이메일로 회원가입</p>
      <label htmlFor="email">이메일</label>
      <SignUpAccountInput type="text" id="email" />
      <label htmlFor="passward">비밀번호</label>
      <SignUpAccountInput type="text" id="passward" />
      <button type="button">시작하기</button>
    </SignUpWrap>
  );
}

const SignUpWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  width: 20em;
  padding: 10px 0 20px 10px;
  z-index: 200;
  background-color: #eee;
`;

const SignUpAccountInput = styled.input`
  width: 80%;
`;
