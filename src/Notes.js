import React from 'react';
import styled from 'styled-components';

const Notes = (props) => {
  const my_notes = props.notes
  const notes_title = my_notes.title;
  console.log(my_notes)
  return (
    <div>
      {notes_title.map((v, idx)=>{
        return (
          <NoteWrap key={idx}>
            <h3>{my_notes.title[idx]}</h3>
            <p>{my_notes.desc[idx]}</p>
            <p>{my_notes.use[idx]}</p>
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