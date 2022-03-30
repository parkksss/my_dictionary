import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { createWord, createWordFB } from "./redux/modules/word";
import { useHistory } from "react-router-dom";


const Add = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const input_t = React.useRef(null); 
  const input_d = React.useRef(null); 
  const input_u = React.useRef(null); 

  const addNote = () => {
    const new_title = input_t.current.value;
    const new_desc = input_d.current.value;
    const new_use = input_u.current.value;
    if (new_title === '' || new_desc === '' || new_use === ''){
      alert('빈 항목을 채워주세요!');
      return
    }
    dispatch(createWordFB({title: new_title, desc: new_desc, use: new_use, check: false}));
    history.push("/");
  };
  
  const handleSubmit = (e) => {
    // submit을 할 때 페이지 자체가 새로고침이 되는 것을 막음
    e.preventDefault();
  };

  return (
    <Note>
      <h3>단어 추가하기</h3>
      
      <AddForm onSubmit={handleSubmit}> 
        <label>단어</label>
        <input type="text" ref={input_t}/>
        <label>설명</label>
        <input type="text" ref={input_d}/>
        <label>구문</label>
        <input type="text" ref={input_u}/>
        <button type="submit" value="Submit" onClick={addNote}>추가하기</button>
      </AddForm>
    </Note>
  );
}

const Note = styled.div`
  width: 95%;
  max-width: 500px;
  height: 500px;
  margin-top: 100px;
  border: 2px solid #11680f;
  border-radius: 10px;
  padding: 20px 0px;
  box-sizing: border-box;
  h3 {
    color: #11680f;
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
    background-color: #11680f;
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
      border-bottom: 2px solid #11680f;
    }
  }
`;

export default Add;