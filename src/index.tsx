import * as React from "react";
import { render } from "react-dom";
import { createGlobalStyle } from "styled-components";
import { Editor } from "./pages/editor";

const GlobalStyle = createGlobalStyle`
body * {
  box-sizing: border-box;
  background: #121212;
}
`;

const Main = (
  <>
    <GlobalStyle />
    <Editor />
  </>
);

render(Main, document.getElementById("app"));
