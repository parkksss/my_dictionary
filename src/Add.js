import React from 'react';
import styled from 'styled-components';
import { useDispatch } from "react-redux";
import { createWord, createWordFB } from "./redux/modules/word";
import { useHistory } from "react-router-dom";


const Add = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  // const [notes, setNotes] = React.useState({
  //   title: ['split() 메서드', 'join() 메서드', 'map() 메서드'],
  //   desc: ['지정한 구분자를 이용하여 여러 개의 문자열로 나눈다', '배열의 모든 요소를 연결해 하나의 문자열로 만든다', '배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다'],
  //   use: ['str.split([separator[, limit]])', 'arr.join([separator])', 'arr.map(callback(currentValue[, index[, array]])[, thisArg])']
  // });

  const input_t = React.useRef(null); 
  const input_d = React.useRef(null); 
  const input_u = React.useRef(null); 

  const addNote = () => {
    const new_title = input_t.current.value;
    const new_desc = input_d.current.value;
    const new_use = input_u.current.value;
    dispatch(createWordFB({title: new_title, desc: new_desc, use: new_use, check: false}));
    history.push("/");
  };
  // const handleSubmit = (e) => {
  //   // submit을 할 때 페이지 자체가 새로고침이 되는 것을 막음
  //   e.preventDefault();

  // };

  
  return (
    <Note>
      <h3>단어 추가하기</h3>
      
      <AddForm> 
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

export default Add;