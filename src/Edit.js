import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Edit = (props) => {
  const my_notes = useSelector((state)=> state.word);
  const params = useParams();
  const note_idx = params.idx;

  // const notes_title = my_notes.title;
  return (
    <Note>
      <h3>단어 수정하기</h3>
      
      <AddForm> 
        <label>단어</label>
        <input type="text" defaultValue={my_notes.title[note_idx]}/>
        <label>설명</label>
        <input type="text" defaultValue={my_notes.desc[note_idx]}/>
        <label>구문</label>
        <input type="text" defaultValue={my_notes.use[note_idx]}/>
        <button type="submit" value="Submit">수정하기</button>
      </AddForm>
    </Note>
  );
}

const Note = styled.div`
  width: 95%;
  max-width: 500px;
  height: 500px;
  margin-top: 25px;
  border: 2px solid #ddd;
  border-radius: 10px;
  h3 {
    text-align: center;
  }
`;
const AddForm = styled.form`
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  button {
    margin-top: 10px;
  }
`;

export default Edit;