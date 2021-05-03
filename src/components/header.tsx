import * as React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  children: React.ReactNode;
}

export const Header: React.FC<Props> = (props) => (
  <HeaderWrapper>
    <HeaderTitle>{props.title}</HeaderTitle>
    <HeaderControl>{props.children}</HeaderControl>
  </HeaderWrapper>
);

const HeaderWrapper = styled.header`
  align-content: center;
  height: 100px;
  left: 0;
  padding: 10px 20px;
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  background: #121212;
`;

const HeaderTitle = styled.div`
  font-size: 60px;
  color: #f8f8f8;
`;

const HeaderControl = styled.div`
  height: 100px;
  display: flex;
  margin-top: 20px;
`;
