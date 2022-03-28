import React from 'react';
import styled from 'styled-components';

import Notes from './Notes'
import Add from './Add'

function App() {

  const notes = [
    {title: 'split() 메서드', 
    desc: '지정한 구분자를 이용하여 여러 개의 문자열로 나눈다', 
    use: 'str.split([separator[, limit]])'},
    {title: 'join() 메서드', 
    desc: '배열의 모든 요소를 연결해 하나의 문자열로 만든다', 
    use: 'arr.join([separator])'}, 
    {title: 'map() 메서드', 
    desc: '배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다', 
    use: 'arr.map(callback(currentValue[, index[, array]])[, thisArg])'}, 
  ] 

  return (
    <AppWrap className="App">
        <Header className="App-header">
          <h1>나만의 단어장</h1>
          <hr/>
        </Header>
      <Container>
        <Notes notes={notes}/>
      </Container>
      <button>추가하기</button>
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

const Container = styled.div`
  width: 95%;
  max-width: 500px;
  margin-top: 25px;
`;

export default App;
