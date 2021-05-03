import * as React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Header } from "../components/header";

export const History: React.FC = () => {
  return (
    <>
      <Header title="History">
        <LinkText to="/editor">Back to Editor</LinkText>
      </Header>
      <Wrapper>TODO: 履歴表示</Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 100px;
  background: #121212;
  padding: 10px 20px;
  color: #ffffff;
`;



const LinkText = styled(Link)`
  background-color: transparent;
  border: 1px solid #ffffff;
  outline: none;
  min-width: 100px;
  height: 50px;
  color: #ffffff;
  padding: 0 20px;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 100px;
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    background-color: #ffffff;
    color: #121212;
    transform: translateY(-2px);
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;