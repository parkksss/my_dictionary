// word.js

// Actions
const LOAD   = 'word/LOAD';
const CREATE = 'word/CREATE';
const UPDATE = 'word/UPDATE';
const CHECK = 'word/CHECK';
const DELETE = 'word/DELETE';


const initialState = {
  title: ['split() 메서드', 'join() 메서드', 'map() 메서드'],
  desc: ['지정한 구분자를 이용하여 여러 개의 문자열로 나눈다', '배열의 모든 요소를 연결해 하나의 문자열로 만든다', '배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다'],
  use: ['str.split([separator[, limit]])', 'arr.join([separator])', 'arr.map(callback(currentValue[, index[, array]])[, thisArg])'],
  check: [false, false, false]
};

// Action Creators
export function loadWord() {
  return { type: LOAD };
}

export function createWord(notes) {
  return { type: CREATE, notes };
}

export function updateWord(notes) {
  return { type: UPDATE, notes };
}

export function checkWord(notes_index) {
  return { type: CHECK, notes_index }
}

export function deleteWord(notes_index) {
  return { type: DELETE, notes_index };
}



// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD":
      return state;

    case "word/CREATE":
      const new_title = [...state.title, action.notes.title];
      const new_desc = [...state.desc, action.notes.desc];
      const new_use = [...state.use, action.notes.use];
      return { title: new_title, desc: new_desc, use: new_use };

    case "word/CHECK":
      const new_check = state.check.map((l, idx) => {
        if (action.notes_index === idx) {
          return l === true ? false : true;
        } else {
          return l;
        }
      });
      return { title: state.title, desc: state.desc, use: state.use, check: new_check };
    
    case "word/DELETE": {
      const new_title = state.title.filter((l, idx) => {
        return parseInt(action.notes_index) !== idx;
      })
      const new_desc = state.desc.filter((l, idx) => {
        return parseInt(action.notes_index) !== idx;
      })
      const new_use = state.use.filter((l, idx) => {
        return parseInt(action.notes_index) !== idx;
      })
      return { title: new_title, desc: new_desc, use: new_use };
    }

    default: return state;
  }
}