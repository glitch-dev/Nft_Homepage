import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  width: 100%;
  scroll-behavior: smooth;
  font-size: 2px;
  @media screen and (min-width: 375px) {
    font-size: 4px;
  }
  @media screen and (min-width: 500px) {
    font-size: 6px;
  }
  @media screen and (min-width: 576px) {
    font-size: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
  @media screen and (min-width: 980px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
}
body {
  width: 100%;
  margin: 0;
}
@font-face {
  font-family: "SCore";
  font-weight: 100;
  font-style: normal;
  src: url("/fonts/S-Core1.woff");
}
@font-face {
  font-family: "SCore";
  font-weight: 200;
  font-style: normal;
  src: url("/fonts/S-Core2.woff");
}
@font-face {
  font-family: "SCore";
  font-weight: 300;
  font-style: normal;
  src: url("/fonts/S-Core3.woff");
}
@font-face {
  font-family: "SCore";
  font-weight: 400;
  font-style: normal;
  src: url("/fonts/S-Core4.woff");
}
@font-face {
  font-family: "SCore";
  font-weight: 500;
  font-style: normal;
  src: url("/fonts/S-Core5.woff");
}
@font-face {
  font-family: "SCore";
  font-weight: 600;
  font-style: normal;
  src: url("/fonts/S-Core6.woff");
}
@font-face {
  font-family: "SCore";
  font-weight: 700;
  font-style: normal;
  src: url("/fonts/S-Core7.woff");
}
@font-face {
  font-family: "SCore";
  font-weight: 800;
  font-style: normal;
  src: url("/fonts/S-Core8.woff");
}
@keyframes dot {
  100% {
    opacity: 1;
    transform: scale(3.5);
    opacity: 0;
  }
}
@keyframes moveSlideshow {
  100% { 
    transform: translateX(-50%);  
  }
}
`;
