import * as React from "react";
import styled from "styled-components";

interface Props {
  cancel?: boolean;
  children: string;
  onClick: () => void;
}

export const Button: React.FC<Props> = (props) => (
  <StyledButton
    onClick={props.onClick}
    className={props.cancel ? "cancel" : ""}
  >
    {props.children}
  </StyledButton>
);

const StyledButton = styled.button`
  background: #55c341;
  border: none;
  outline: none;
  box-shadow: none;
  width: 100px;
  height: 50px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0px 0px 16px #55c341;
    transform: translateY(-2px);
  }

  &.cancel {
    background-color: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;

    &:hover {
      background-color: #ffffff;
      color: #121212;
      box-shadow: none;
    }
  }
`;
