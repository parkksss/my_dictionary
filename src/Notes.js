import React from 'react';
import styled from 'styled-components';

const Notes = (props) => {
  const my_notes = props.notes;

  return (
    <div>
      {my_notes.map((dic, index)=>{
        console.log(dic);
        return (
          <NoteWrap key={index}>
            <h3>{dic.title}</h3>
            <p>{dic.desc}</p>
            <p>{dic.use}</p>
          </NoteWrap>
        );
      })}
    </div>
  );
}

const NoteWrap = styled.div`
  padding: 16px;
  margin-bottom: 20px;
  border: 2px solid #ddd;
  border-radius: 10px;
`;

export default Notes;