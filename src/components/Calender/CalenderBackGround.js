import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiOutlineUp } from "react-icons/ai";
import { BsCalendar2CheckFill } from "react-icons/bs";

export default function CalenderBackGround() {
  const [menuOn, setMenuOn] = useState(false);
  const MenuBtn = useRef();
  const Dimd = useRef();
  const backGroundMenuOn = () => {
    if (!menuOn) {
      Dimd.current.style.display = "block";
      MenuBtn.current.style.bottom = "0px";
    } else {
      Dimd.current.style.display = "none";
      MenuBtn.current.style.bottom = "-120px";
    }
  };

  const MeunOnOff = () => {
    setMenuOn(!menuOn);
    backGroundMenuOn();
  };
  return (
    <CalenderBackground>
      <BackGroundMenu type="button" onClick={MeunOnOff}>
        <AiOutlineUp />
      </BackGroundMenu>
      <BackGroundMenuList ref={MenuBtn}>
        <BackGroundMenuItem>
          <BsCalendar2CheckFill /> 1
        </BackGroundMenuItem>
        <BackGroundMenuItem>
          <BsCalendar2CheckFill /> 1
        </BackGroundMenuItem>
        <BackGroundMenuItem>
          <BsCalendar2CheckFill /> 1
        </BackGroundMenuItem>
      </BackGroundMenuList>
      <DimdScreen ref={Dimd} onClick={MeunOnOff}>
        딤드
      </DimdScreen>
    </CalenderBackground>
  );
}

const CalenderBackground = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const BackGroundMenu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: -15px;
  border-radius: 50px;
  background-color: #999;
  font-size: 1.5em;
  color: #fff;

  &:hover {
    margin-bottom: 10px;
    transition: 0.2s;
  }
`;

const BackGroundMenuList = styled.ul`
  display: flex;
  justify-content: center;

  position: absolute;
  bottom: -120px;
  width: 100%;
  gap: 20px;
  background-color: #999;
  transition: 0.2s;
  z-index: 100;
`;

const BackGroundMenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 128px;
  height: 80px;
  border-radius: 5px;
  background-color: #fff;
  margin: 20px 0 20px;
`;

const DimdScreen = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.2);
`;
