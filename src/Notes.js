import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Notes = (props) => {
  let history = useHistory();

  const my_notes = useSelector((state)=> state.word);
  const notes_title = my_notes.title;

  return (
    <div>
      {notes_title.map((v, idx)=>{
        return (
          <NoteWrap key={idx}>
            <h3>{my_notes.title[idx]}</h3>
            <p>{my_notes.desc[idx]}</p>
            <p>{my_notes.use[idx]}</p>
            <button onClick={()=>{
              // const word = my_notes.title[idx].split(" ")[0]
              history.push("/edit/"+ idx);
            }}>수정</button>
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
  border: 2px solid #ddd;
  border-radius: 10px;
`;

export default Notes;