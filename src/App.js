import React from 'react';
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";

import Notes from './Notes'
import Add from './Add'
import Edit from './Edit'

function App() {

  const [notes, setNotes] = React.useState({
    title: ['split() 메서드', 'join() 메서드', 'map() 메서드'],
    desc: ['지정한 구분자를 이용하여 여러 개의 문자열로 나눈다', '배열의 모든 요소를 연결해 하나의 문자열로 만든다', '배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다'],
    use: ['str.split([separator[, limit]])', 'arr.join([separator])', 'arr.map(callback(currentValue[, index[, array]])[, thisArg])']
  });
  // const notes = {
  //   title: ['split() 메서드', 'join() 메서드', 'map() 메서드'],
  //   desc: ['지정한 구분자를 이용하여 여러 개의 문자열로 나눈다', '배열의 모든 요소를 연결해 하나의 문자열로 만든다', '배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다'],
  //   use: ['str.split([separator[, limit]])', 'arr.join([separator])', 'arr.map(callback(currentValue[, index[, array]])[, thisArg])']
  // };
  // const notes = [
  //   {title: 'split() 메서드', 
  //   desc: '지정한 구분자를 이용하여 여러 개의 문자열로 나눈다', 
  //   use: 'str.split([separator[, limit]])'},
  // ] 

  // const input_t = React.useRef(null); 
  // const input_d = React.useRef(null); 
  // const input_u = React.useRef(null); 

  // const addNote = () => {
  //   const new_title = input_t.current.value;
  //   const new_desc = input_d.current.value;
  //   const new_use = input_u.current.value;    
  //   setNotes({ title: [...notes.title, new_title], desc: [...notes.desc, new_desc], use: [...notes.use, new_use]});
  // };
  // const handleSubmit = (e) => {
  //   // submit을 할 때 페이지 자체가 새로고침이 되는 것을 막음
  //   e.preventDefault();
  // };

  return (
    <AppWrap className="App">
        <Header className="App-header">
          <Link style={{'text-decoration': 'none' }} to="/"><h1>나만의 단어장</h1></Link>
          <hr/>
        </Header>
        <Route path="/" exact>
          <Notes notes={notes}/>
        </Route>
        <Route path="/add">
          <Add/>
        </Route>
        <Route path="/edit/:word">
          <Edit notes={notes}/>
        </Route>

      {/* <Note>
        <h3>단어 추가하기</h3>
        
        <AddForm onSubmit={handleSubmit}>
          <label>단어</label>
          <input type="text" ref={input_t}/>
          <label>설명</label>
          <input type="text" ref={input_d}/>
          <label>구문</label>
          <input type="text" ref={input_u}/>
          <button value="Submit" onClick={addNote}>추가하기</button>
        </AddForm>
      </Note> */}
      {/* <button>추가하기</button> */}
    </AppWrap>
  );
}

const AppWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  text-align: center;
  width: 100%;
  h1 {
    color: #303030;
  }
`;


// const Container = styled.div`
//   width: 95%;
//   max-width: 500px;
//   margin-top: 25px;
// `;

// const Note = styled.div`
//   width: 95%;
//   max-width: 500px;
//   height: 500px;
//   margin-top: 25px;
//   border: 2px solid #ddd;
//   border-radius: 10px;
//   h3 {
//     text-align: center;
//   }
// `;
// const AddForm = styled.form`
//   padding: 0 20px 20px;
//   display: flex;
//   flex-direction: column;
//   button {
//     margin-top: 10px;
//   }
// `;


export default App;
