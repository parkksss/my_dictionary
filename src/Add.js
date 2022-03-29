import React from 'react';
import styled from 'styled-components';

const Add = (props) => {
  return (
    <Note>
      <h3>단어 추가하기</h3>
      
      <AddForm>
        <label>단어</label>
        <input type="text"/>
        <label>설명</label>
        <input type="text"/>
        <label>구문</label>
        <input type="text"/>
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