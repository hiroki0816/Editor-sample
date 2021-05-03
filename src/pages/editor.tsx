import * as React from "react";
import styled from "styled-components";
import { useStateWithStorage } from "../hooks/use_state_with_storage";
import * as ReactMarkdown from "react-markdown";
import { putMemo } from "../indexeddb/memos";
import { Button } from "../components/button";
import { SaveModal } from "../components/save_modal";
import { Link } from "react-router-dom";
import { Header } from "../components/header";

const { useState } = React;

interface Props {
  text: string
  setText: (text: string) => void
}



 export const Editor: React.FC<Props> = (props) => {
    const { text, setText } = props

  const [showModal, setShowmodal] = useState(false);

  return (
    <>
      <Header title="EditorX">
        <LinkText to="/history">History</LinkText>
        <Button onClick={() => setShowmodal(true)}>Save</Button>
      </Header>
      <Wrapper>
        <TextArea
          onChange={(event) => {
            const ChangeText = event.target.value;
            localStorage.setItem(text, ChangeText);
            setText(ChangeText);
          }}
          value={text}
        />
        <Preview>
          <ReactMarkdown>{text}</ReactMarkdown>
        </Preview>
      </Wrapper>
      {showModal && (
        <SaveModal
          onSave={(title: string): void => {
            putMemo(title, text);
            setShowmodal(false);
          }}
          onCancel={() => setShowmodal(false)}
        />
      )}
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
`;

const TextArea = styled.textarea`
  border-radius: 8px;
  background: #1e1e1e;
  border: none;
  bottom: 0;
  font-size: 1.1rem;
  left: 0;
  padding: 24px;
  position: absolute;
  margin: 0 16px 16px;
  top: 0;
  width: calc(50vw - 28px);
  outline: none;
  color: #f8f8f8;
`;

const Preview = styled.div`
  border-radius: 8px;
  background: #1e1e1e;
  font-size: 1.1rem;
  border: none;
  bottom: 0;
  overflow-y: scroll;
  padding: 24px;
  position: absolute;
  margin: 0 16px 16px;
  right: 0;
  top: 0;
  width: calc(50vw - 28px);
  outline: none;
  color: #f8f8f8;
`;

const LinkText = styled(Link)`
  background-color: transparent;
  border: 1px solid #ffffff;
  outline: none;
  min-width: 100px;
  height: 50px;
  color: #ffffff;
  padding: 0 16px;
  font-size: 16px;
  font-weight: bold;
  line-height: 50px;
  border-radius: 100px;
  cursor: pointer;
  margin-right: 18px;
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
