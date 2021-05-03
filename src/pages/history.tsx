import * as React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { Header } from "../components/header";
import { getMemoPageCount, getMemos, MemoRecord } from "../indexeddb/memos";

const { useState, useEffect } = React;

interface Props {
  setText: (text: string) => void;
}

export const History: React.FC<Props> = (props) => {
  const { setText } = props;
  const [memos, setMemos] = useState<MemoRecord[]>([]);
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const history = useHistory();

  useEffect(() => {
    getMemos(1).then(setMemos)
    getMemoPageCount().then(setMaxPage)
  }, []);

  const canNextPage: boolean = page < maxPage
  const canPrevPage: boolean = page > 1
  const movePage = (targetPage: number) => {
    if (targetPage < 1 || maxPage < targetPage) {
        return
    }
    setPage(targetPage)
    getMemos(targetPage).then(setMemos)
  }

  return (
    <>
      <Header title="History">
        <LinkText to="/editor">Back to Editor</LinkText>
      </Header>
      <Wrapper>
        {memos.map((memo) => (
          <Memo 
            key={memo.datetime}
            onClick={() => {
                setText(memo.text)
                history.push('/editor')
            }}
          >
            <MemoTitle>{memo.title}</MemoTitle>
            <MemoText>{memo.text}</MemoText>
          </Memo>
        ))}
      </Wrapper>
    <Paging>
     <PagingButton
        onClick={() => movePage(page - 1)}
        disabled={!canPrevPage}
     >
        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.12581 1.7925L5.83331 0.5L0.333313 6L5.83331 11.5L7.12581 10.2075L2.92748 6L7.12581 1.7925Z" fill="white" fill-opacity="0.6"/>
</svg>

     </PagingButton>
     {page} / {maxPage}
     <PagingButton
        onClick={() => movePage(page + 1)}
        disabled={!canNextPage}
     >
         <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.16665 0.5L0.874146 1.7925L5.07248 6L0.874146 10.2075L2.16665 11.5L7.66665 6L2.16665 0.5Z" fill="white" fill-opacity="0.6"/>
</svg>

     </PagingButton>
    </Paging>
    </>
  );
};

const Wrapper = styled.div`
  bottom: 3rem;
  left: 0;
  position: fixed;
  right: 0;
  top: 100px;
  background: #121212;
  padding: 10px 20px;
  color: #ffffff;
  overflow-y: scroll;
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
  color: #a0a0a0;
  white-space: nowrap;
`;

const Paging = styled.div`
bottom: 0;
height: 4rem;
left: 0;
line-height: 2rem;
padding: 0.5rem;
position: fixed;
color: rgba(255, 255, 255, 0.6);
right: 0;
text-align: center;
background: #121212;
font-weight: bold;
`

const PagingButton = styled.button`
background: none;
border: none;
display: inline-block;
height: 40px;
width: 40px;
border-radius: 100px;
padding: 0.5rem 1rem;
background: #232323;
margin : 0 12px;
transition: 0.2s;
cursor: pointer;

&:hover {
    background: #55C341;
    box-shadow: 0px 0px 16px #55c341;
    transform: translateY(-2px);
}

&:disabled {
    opacity: 0.4;

    &:hover {
    background: #232323;
    box-shadow: none;
    }
}
`

