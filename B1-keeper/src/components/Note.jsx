import DeleteIcon from '@mui/icons-material/Delete';

export const Note = ({ note, onDeleteNote }) => {
  return (
    <div className={`note note_${note.size}`}>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button onClick={() => onDeleteNote(note.id)}>
        <DeleteIcon />
      </button>
    </div>
  );
};
