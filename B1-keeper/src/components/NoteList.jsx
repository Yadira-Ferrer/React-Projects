import { Note } from './Note';

export const NoteList = ({ notes = [], onDeleteNote }) => {
  return (
    <div className="note-container">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDeleteNote={onDeleteNote} />
      ))}
    </div>
  );
};
