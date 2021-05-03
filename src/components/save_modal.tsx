import * as React from "react";
import styled from "styled-components";
import { Button } from "./button";

const { useState } = React;

interface Props {
  onSave: (title: string) => void;
  onCancel: () => void;
}

export const SaveModal: React.FC<Props> = (props) => {
  const { onCancel, onSave } = props;
  const [title, setTitle] = useState(new Date().toISOString());

  return (
    <Wrapper>
      <Modal>
        <ModalTitle>Save your Idea</ModalTitle>
        <ModalContent>
          Enter a title and click the Save button 🚀
          <p>
            <TitleInput
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </p>
          <Control>
            <Button onClick={onCancel} cancel>
              Cancel
            </Button>
            <Button onClick={() => onSave(title)}>Save</Button>
          </Control>
        </ModalContent>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const Modal = styled.div`
  background: #232323;
  width: 34rem;
  border-radius: 6px;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  min-height: 44px;
  outline: none;
  border-radius: 4px;
  background: #1e1e1e;
  border: 1px solid #363636;
  color: #ffffff;
  font-size: 1rem;
  margin-top: 10px;

  &:focus {
    border: 1px solid #55c341;
  }
`;

const Control = styled.div`
  display: flex;
  margin: 40px auto 24px;
  justify-content: space-between;
  width: 224px;
`;

const ModalContent = styled.div`
  color: #cfcfcf;
  padding: 1.5rem;
`;

const ModalTitle = styled.div`
  color: #ffffff;
  font-weight: bold;
  font-size: 1.3rem;
  height: 60px;
  line-height: 60px;
  padding: 0 1.5rem;
  border-bottom: 1px solid #ffffff1f;
`;
