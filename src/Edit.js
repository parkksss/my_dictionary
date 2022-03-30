import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { updateWordFB } from "./redux/modules/word";
import { useHistory } from "react-router-dom";

const Edit = (props) => {
  let history = useHistory();

  const my_notes = useSelector((state)=> state.word.list);
  const params = useParams();
  const note_idx = params.idx;
  const dispatch = useDispatch();

  console.log(my_notes)

  const input_t = React.useRef(null); 
  const input_d = React.useRef(null); 
  const input_u = React.useRef(null); 

  const editNote = () => {
    const new_title = input_t.current.value;
    const new_desc = input_d.current.value;
    const new_use = input_u.current.value;
    dispatch(updateWordFB({id: my_notes[note_idx].id, title: new_title, desc: new_desc, use: new_use, check: my_notes[note_idx].check}));
    history.push("/");
  };

  return (
    <Note>
      <h3>단어 수정하기</h3>
      
      <AddForm> 
        <label>단어</label>
        <input type="text" defaultValue={my_notes[note_idx].title} ref={input_t}/>
        <label>설명</label>
        <input type="text" defaultValue={my_notes[note_idx].desc} ref={input_d}/>
        <label>구문</label>
        <input type="text" defaultValue={my_notes[note_idx].use} ref={input_u}/>
        <button type="submit" value="Submit" onClick={editNote}>수정하기</button>
      </AddForm>
    </Note>
  );
}

const Note = styled.div`
  width: 95%;
  max-width: 500px;
  height: 500px;
  margin-top: 100px;
  border: 2px solid green;
  border-radius: 10px;
  padding: 20px 0px;
  box-sizing: border-box;
  h3 {
    color: green;
    text-align: center;
    margin-bottom: 50px;
  }
`;
const AddForm = styled.form`
  width: 80%;
  margin: auto;
  padding: 0 20px 20px;
  display: flex;
  flex-direction: column;
  button {
    margin-top: 80px;
    width: 100%;
    height: 40px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  input {
    border: none;
    outline: none;
    border-bottom: 2px solid #ddd;
    margin: 10px 0px 20px;
    &:focus {
      border-bottom: 2px solid green;
    }
  }
`;

export default Edit;