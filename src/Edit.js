import React from 'react';
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Edit = (props) => {

  const my_notes = useSelector((state)=> state.word.list);
  const params = useParams();
  const note_idx = params.idx;

  return (
    <Note>
      <h3>단어 수정하기</h3>
      
      <AddForm> 
        <label>단어</label>
        <input type="text" defaultValue={my_notes[note_idx].title}/>
        <label>설명</label>
        <input type="text" defaultValue={my_notes[note_idx].desc}/>
        <label>구문</label>
        <input type="text" defaultValue={my_notes[note_idx].use}/>
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