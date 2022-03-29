import React from 'react';
import styled from 'styled-components';

const Add = (props) => {
  const input_t = React.useRef(null); 
  const input_d = React.useRef(null); 
  const input_u = React.useRef(null); 
  // console.log(input_t.current.value, input_d.current.value, input_u.current.value);

  

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
        <button type="submit" value="Submit">추가하기</button>
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