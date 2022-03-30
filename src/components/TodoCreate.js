import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

export default function TodoCreate() {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertFrom>
            <Input autoFocus placeholder="할 일을 입력 후, Enter를 누르세요." />
          </InsertFrom>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={handleToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

const CircleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);

  width: 80px;
  height: 80px;

  border-radius: 50%;
  border: none;
  outline: none;

  font-size: 60px;
  color: white;
  z-index: 5;

  background-color: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background-color: #20c997;
  }

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}

  cursor: pointer;
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const InsertFrom = styled.form`
  padding: 32px 32px 72px 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;

  background: #f8f9fa;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;
