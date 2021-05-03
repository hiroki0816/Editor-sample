import * as React from "react";
import styled from "styled-components";
import { useStateWithStorage } from "../hooks/use_state_with_storage";
import * as ReactMarkdown from "react-markdown";
import { putMemo } from "../indexeddb/memos";
import { Button } from "../components/button";
import {SaveModal} from '../components/save_modal'

const {useState} =React

const StorageKey = "pages/editor:text";

export const Editor: React.FC = () => {
  const [text, setText] = useStateWithStorage("", StorageKey);

  const [showModal, setShowmodal] = useState(false)

  return (
    <>
      <Header>
        EditorX
        <HeaderControl>
          <Button onClick={() => setShowmodal(true)}>Save</Button>
        </HeaderControl>
      </Header>
      <Wrapper>
        <TextArea
          onChange={(event) => {
            const ChangeText = event.target.value;
            localStorage.setItem(StorageKey, ChangeText);
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
          onSave={(title: string):void => {
            putMemo(title, text)
            setShowmodal(false)
          }}
          onCancel={() => setShowmodal(false)}
        />
      )}
    </>
  );
};

const Header = styled.div`
  align-content: center;
  font-size: 60px;
  height: 100px;
  left: 0;
  padding: 10px 20px;
  position: fixed;
  right: 0;
  top: 0;
  color: #f8f8f8;
  display: flex;
  justify-content: space-between;
  background: #121212;
`;

const HeaderControl = styled.div`
  height: 100px;
  display: flex;
  margin-top: 20px;
`;

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
