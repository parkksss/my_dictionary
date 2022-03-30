import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteWord, checkWord } from "./redux/modules/word";

const Notes = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const my_notes = useSelector((state)=> state.word.list);

  return (
    <div>
      {my_notes.map((v, idx)=>{
        return (
          <NoteWrap key={idx} check={v.check}>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
            <p>{v.use}</p>
            <div>
              <button onClick={()=>{
                dispatch(checkWord(idx));
                }}>확인</button>
              <button onClick={()=>{
                // const word = my_notes.title[idx].split(" ")[0]
                history.push("/edit/"+ idx);
                }}>수정</button>
              <button onClick={()=>{
                dispatch(deleteWord(idx));
                history.push("/");
                }}>삭제</button>
            </div>
          </NoteWrap>
        );
      })}
      <button
        onClick={() => {
          history.push("/add");
        }}>
        추가하기
      </button>
    </div>
  );
}

const NoteWrap = styled.div`
  width: 95%;
  max-width: 500px;
  margin-top: 25px;
  padding: 16px;
  margin-bottom: 20px;
  border: 2px solid green;
  border-radius: 10px;
  background-color: ${(props) => (props.check ? "green" : "transparent")};
  color: ${(props) => (props.check ? "white" : "black")};
`;

export default Notes;