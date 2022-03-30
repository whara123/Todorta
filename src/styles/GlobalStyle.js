import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 @font-face {
   font-family: Pretendard-Regular;
   src: url('./fonts/Pretendard-Regular.woff');
 }
 @font-face {
   font-family: Pretendard-Medium;
   src: url('./fonts/Pretendard-Medium.woff');
 }
 @font-face {
   font-family: Pretendard-Bold;
   src: url('./fonts/Pretendard-Bold.woff');
 }
 
 * {
    font-size: inherit;
    font-family: 'Pretendard-Regular';
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    width: 100%;
    height: 100%;
    background-color: #eee;
  }
  a {
    text-decoration : none;
    color : inherit;
  }
  button {
    border : none;
    cursor : pointer;
  }

  li{
    list-style: none;
  }
`;
