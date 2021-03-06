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
  list: []
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
      word_list.push({ id: w.id,...w.data()});
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

export const updateWordFB = (notes) => {
	return async function (dispatch, getState) {
    const word_id = notes.id
    const docRef = doc(db, "dictionary", word_id);
    const newword = await updateDoc(docRef, { ...notes });
    const new_data = await getDocs(collection(db, "dictionary"));
    let word_list  = [];
    new_data.forEach((w) => {
      word_list.push({ id: w.id,...w.data()});
    });
    dispatch(updateWord(word_list));
	} 
};

export const checkWordFB = (word_id, word_check) => {
	return async function (dispatch, getState) {
    const docRef = doc(db, "dictionary", word_id);
    const state = word_check ? false : true;
    await updateDoc(docRef, { check: state });
    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((w) => {
      return w.id === word_id
    })

    dispatch(checkWord(word_index));
	} 
};

export const deleteWordFB = (word_id) => {
	return async function (dispatch, getState) {
    if(!word_id){
      window.alert("???????????? ?????????!");
      return;
    }
		const docRef = doc(db, "dictionary", word_id);
		await deleteDoc(docRef);

    const _word_list = getState().word.list;
    const word_index = _word_list.findIndex((w) => {
       return w.id === word_id;
     });

     dispatch(deleteWord(word_index));
	}
}



// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "word/LOAD":
      return { list: action.notes};

    case "word/CREATE":
      return { list: [...state.list, action.notes] };

    case "word/UPDATE":
      return { list: action.notes};

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