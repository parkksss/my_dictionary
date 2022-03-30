import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteWordFB, checkWordFB } from "./redux/modules/word";
// import { collection, doc, deleteDoc } from "firebase/firestore";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';

const Notes = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();

  const my_notes = useSelector((state)=> state.word.list);

  return (
    <Container>
      {my_notes.map((v, idx)=>{
        return (
          <NoteWrap key={idx} check={v.check}>
            <h3>{v.title}</h3>

            <p>{v.desc}</p>
            <p>{v.use}</p>
            <BtnGroup>
              <CheckCircleOutlineRoundedIcon check={v.check} className="btn" onClick={()=>{
                dispatch(checkWordFB(v.id));
                }}>확인</CheckCircleOutlineRoundedIcon>
              <BuildCircleOutlinedIcon check={v.check} className="btn" onClick={()=>{
                history.push("/edit/"+ idx);
                }}>수정</BuildCircleOutlinedIcon>
              <HighlightOffRoundedIcon check={v.check} className="btn" onClick={()=>{
                dispatch(deleteWordFB(v.id));
                history.push("/");
                }}>삭제</HighlightOffRoundedIcon>
            </BtnGroup>
          </NoteWrap>
        );
      })}
      <AddCircleIcon className="addBtnStyles"
        onClick={() => {
          history.push("/add");
        }}>
        추가하기
      </AddCircleIcon>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1500px;
  margin-top: 55px;
  padding: 25px;
  .addBtnStyles {
    color: green; 
    font-size: 65px; 
    cursor: pointer; 
    position: fixed; 
    bottom: 30px;
    right: 30px;
  }
`;

const NoteWrap = styled.div`
  position: relative;
  width: 95%;
  max-width: 600px;
  padding: 15px 25px;
  margin: 10px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: ${(props) => (props.check ? "green" : "transparent")};
  color: ${(props) => (props.check ? "white" : "black")};
`;

const BtnGroup = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  .btn {
    // color: ${(props) => (props.check ? "white" : "black")};
    font-size: 30px;
  }
`;

export default Notes;