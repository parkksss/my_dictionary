// word.js
import {db} from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";


// Actions
const LOAD   = 'word/LOAD';
const CREATE = 'word/CREATE';
const UPDATE = 'word/UPDATE';
const CHECK = 'word/CHECK';
const DELETE = 'word/DELETE';

const initialState = {
  list: [
    { title: 'split() 메서드', desc: '지정한 구분자를 이용하여 여러 개의 문자열로 나눈다', use: 'str.split([separator[, limit]])', check: false },
    { title: 'join() 메서드', desc: '배열의 모든 요소를 연결해 하나의 문자열로 만든다', use: 'arr.join([separator])', check: false },
    { title: 'map() 메서드', desc: '배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다', use: 'arr.map(callback(currentValue[, index[, array]])[, thisArg])', check: false },
  ]
};

// Action Creators
export function loadWord(notes) {
  return { type: LOAD, notes };
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

// middlewares
export const loadWordFB = () => {
  return async function (dispatch) {
    const note_data = await getDocs(collection(db, "dictionary"));
    let word_list  = [];
    note_data.forEach((w) => {
      word_list.push({...w.data()});
    });
    dispatch(loadWord(word_list));
  }
}

export const createWordFB = (notes) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "dictionary"), notes);
    const notes_data = { id: docRef.id, ...notes};

    dispatch(createWord(notes_data));
  }
}


// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD":
      return { list: action.notes};

    case "word/CREATE":
      return { list: [...state.list, action.notes] };

    case "word/CHECK":
      
      const new_list = state.list.map((l, idx) => {
        if (action.notes_index === idx) {
          return l.check === true ? { ...l, check: false } : { ...l, check: true };
        } else {
          return l;
        }
      });
      return { list: new_list };
    
    case "word/DELETE": {
      const new_list = state.list.filter((l, idx) => {
        return action.notes_index !== idx;
      })
      return { list: new_list };
    }

    default: return state;
  }
}