import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import sessionStorage from 'redux-persist/lib/storage/session';
import persistReducer from 'redux-persist/es/persistReducer';
import { Note, NotesType } from 'constants/types';
import { ACTIVE_DATA, ARCHIVED_DATA } from 'constants/consts';

interface notesState {
  activeNotes: Note[] | [];
  archivedNotes: Note[] | [];
}

interface addNotePayload {
  type: NotesType;
  note: Note;
}

interface deleteNotePayload {
  type: NotesType;
  id: string;
}
interface editNotePayload {
  type: NotesType;
  id: string;
  note: Note;
}

const initialState: notesState = {
  activeNotes: ACTIVE_DATA,
  archivedNotes: ARCHIVED_DATA,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<addNotePayload>) {
      state[action.payload.type] = [
        action.payload.note,
        ...state[action.payload.type],
      ];
    },

    deleteNote(state, action: PayloadAction<deleteNotePayload>) {
      state[action.payload.type] = [...state[action.payload.type]].filter(
        note => note.id !== action.payload.id
      );
    },

    editNote(state, action: PayloadAction<editNotePayload>) {
      const index = [...state[action.payload.type]].findIndex(
        note => note.id === action.payload.id
      );
      if (index !== -1) {
        state[action.payload.type][index] = {
          ...state[action.payload.type][index],
          name: action.payload.note.name,
          category: action.payload.note.category,
          content: action.payload.note.content,
          dates: action.payload.note.dates,
        };
      }
    },
  },
});

const persistConfig = {
  key: 'notes',
  storage: sessionStorage,
  whitelist: ['activeNotes', 'archivedNotes'],
};

export const notesReducer = persistReducer(persistConfig, notesSlice.reducer);
export const { addNote, deleteNote, editNote } = notesSlice.actions;
