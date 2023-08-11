import { RootState } from 'redux/store';

export const getActiveNotes = (state: RootState) => state.notes.activeNotes;
export const getArchivedNotes = (state: RootState) => state.notes.archivedNotes;
