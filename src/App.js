import React from 'react';
import styled from 'styled-components';
import { Route, Link } from "react-router-dom";
import {db} from "./firebase";
import {loadWordFB} from "./redux/modules/word";
import { useDispatch, useSelector } from "react-redux";

import Notes from './Notes'
import Add from './Add'
import Edit from './Edit'

function App() {

  const [notes, setNotes] = React.useState({
    title: ['split() 메서드', 'join() 메서드', 'map() 메서드'],
    desc: ['지정한 구분자를 이용하여 여러 개의 문자열로 나눈다', '배열의 모든 요소를 연결해 하나의 문자열로 만든다', '배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다'],
    use: ['str.split([separator[, limit]])', 'arr.join([separator])', 'arr.map(callback(currentValue[, index[, array]])[, thisArg])']
  });

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadWordFB());
  }, []);


  return (
    <AppWrap className="App">
        <Header className="App-header">
          <Link style={{'text-decoration': 'none' }} to="/"><h1>나만의 단어장</h1></Link>
          {/* <hr/> */}
        </Header>
        <Route path="/" exact>
          <Notes notes={notes}/>
        </Route>
        <Route path="/add">
          <Add/>
        </Route>
        <Route path="/edit/:idx">
          <Edit notes={notes}/>
        </Route>
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
  position: fixed;
  background-color: white;
  text-align: center;
  width: 100%;
  z-index: 1;
  h1 {
    color: #303030;
  }
`;

export default App;
