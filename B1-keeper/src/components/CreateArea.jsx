import { useForm } from '../hooks/useForm';
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from '@mui/material';
import { useState } from 'react';

export const CreateArea = ({ onNewNote }) => {
  const [isExpanded, setExpanded] = useState(false);

  const { title, content, onInputChange, onResetForm } = useForm({
    title: '',
    content: '',
    size: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (title.length < 1 && content.length < 1) return;

    const newNote = {
      id: new Date().getTime(),
      title,
      content,
      size:
        content.length < 135
          ? 'small'
          : content.length < 250
          ? 'medium'
          : 'large',
    };

    onNewNote && onNewNote(newNote);
    onResetForm();
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <form className="create-note" onSubmit={onFormSubmit}>
      {isExpanded && (
        <input
          className="input-title"
          name="title"
          placeholder="Title"
          type="text"
          value={title}
          onChange={onInputChange}
        />
      )}
      <textarea
        name="content"
        onClick={expand}
        value={content}
        onChange={onInputChange}
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
      ></textarea>
      {isExpanded && (
        <Fab type="submit">
          <AddIcon />
        </Fab>
      )}
    </form>
  );
};
