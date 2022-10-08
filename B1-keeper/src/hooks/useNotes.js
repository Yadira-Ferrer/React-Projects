import { useEffect, useReducer } from 'react';
import { noteReducer } from '../components/noteReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('notes')) || [];
};

export const useNotes = () => {
  const [notes, dispatch] = useReducer(noteReducer, [], init);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleNewNote = (note) => {
    const action = {
      type: 'Note-Add',
      payload: note,
    };
    dispatch(action);
  };

  const handleDeleteNote = (id) => {
    dispatch({
      type: 'Note-Delete',
      payload: id,
    });
  };

  return {
    notes,
    handleNewNote,
    handleDeleteNote,
  };
};
