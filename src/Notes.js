import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteWordFB, checkWordFB } from "./redux/modules/word";
// import { collection, doc, deleteDoc } from "firebase/firestore";

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
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
            <p className="blue" check={v.check}>{v.use}</p>
            <BtnGroup check={v.check}>
              <CheckCircleOutlineRoundedIcon className="btn" onClick={()=>{
                dispatch(checkWordFB(v.id, v.check));
                }}>확인</CheckCircleOutlineRoundedIcon>
              <BuildCircleOutlinedIcon className="btn" onClick={()=>{
                history.push("/edit/"+ idx);
                }}>수정</BuildCircleOutlinedIcon>
              <HighlightOffRoundedIcon className="btn" onClick={()=>{
                dispatch(deleteWordFB(v.id));
                history.push("/");
                }}>삭제</HighlightOffRoundedIcon>
            </BtnGroup>
          </NoteWrap>
        );
      })}
      <AddCircleRoundedIcon className="addBtnStyles"
        onClick={() => {
          history.push("/add");
        }}>
        추가하기
      </AddCircleRoundedIcon>
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
    color: #11680f; 
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
  border: 2px solid #11680f;
  border-radius: 10px;
  background-color: ${(props) => (props.check ? "#11680f" : "transparent")};
  color: ${(props) => (props.check ? "white" : "black")};
  .blue {
    color: ${(props) => (props.check ? "yellow" : "blue")};
  }
`;

const BtnGroup = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: ${(props) => (props.check ? "white" : "#11680f")};
  .btn {
    font-size: 30px;
  }
`;

export default Notes;