import * as React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Header } from "../components/header";
import { getMemos, MemoRecord } from "../indexeddb/memos";

const { useState, useEffect } = React;

export const History: React.FC = () => {
  const [memos, setMemos] = useState<MemoRecord[]>([]);

  useEffect(() => {
    getMemos().then(setMemos);
  }, []);

  return (
    <>
      <Header title="History">
        <LinkText to="/editor">Back to Editor</LinkText>
      </Header>
      <Wrapper>
        {memos.map((memo) => (
          <Memo key={memo.datetime}>
            <MemoTitle>{memo.title}</MemoTitle>
            <MemoText>{memo.text}</MemoText>
          </Memo>
        ))}
      </Wrapper>
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
  overflow: scroll;
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

const Memo = styled.button`
  display: block;
  background: #232323;
  border: none;
  outline: none;
  border-radius: 4px;
  color: #ffffff;
  width: 100%;
  padding: 1.15rem;
  margin: 1rem 0;
  text-align: left;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #2e2e2e;
  }
`;

const MemoTitle = styled.div`
  font-size: 1.15rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const MemoText = styled.div`
  font-size: 0.85rem;
  overflow: hidden;
  text-overflow: ellipsis;
  color:#A0A0A0;
  white-space: nowrap;
`;
