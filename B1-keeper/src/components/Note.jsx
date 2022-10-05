export const Note = ({ title, content, notesize }) => {
  return (
    <div className={`note note_${notesize}`}>
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};
