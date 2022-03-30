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
    <div>
      {my_notes.map((v, idx)=>{
        return (
          <NoteWrap key={idx} check={v.check}>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
            <p>{v.use}</p>
            <div>
              <CheckCircleOutlineRoundedIcon onClick={()=>{
                dispatch(checkWordFB(v.id));
                }}>확인</CheckCircleOutlineRoundedIcon>
              <BuildCircleOutlinedIcon onClick={()=>{
                // const word = my_notes.title[idx].split(" ")[0]
                history.push("/edit/"+ idx);
                }}>수정</BuildCircleOutlinedIcon>
              <HighlightOffRoundedIcon onClick={()=>{
                dispatch(deleteWordFB(v.id));
                history.push("/");
                }}>삭제</HighlightOffRoundedIcon>
            </div>
          </NoteWrap>
        );
      })}
      <AddCircleIcon style={{'color': 'green', 'font-size': '50px', 'cursor': 'pointer'}}
        onClick={() => {
          history.push("/add");
        }}>
        추가하기
      </AddCircleIcon>
    </div>
  );
}

const NoteWrap = styled.div`
  width: 95%;
  max-width: 500px;
  margin-top: 25px;
  padding: 16px;
  margin-bottom: 20px;
  border: 2px solid green;
  border-radius: 10px;
  background-color: ${(props) => (props.check ? "green" : "transparent")};
  color: ${(props) => (props.check ? "white" : "black")};
`;

export default Notes;