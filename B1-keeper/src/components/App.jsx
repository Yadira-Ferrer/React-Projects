import { useNotes } from '../hooks/useNotes';
import { Footer } from './Footer';
import { Header } from './Header';

/* import notes from '../notes'; */
import { CreateArea } from './CreateArea';
import { NoteList } from './NoteList';

function App() {
  const { notes, handleNewNote, handleDeleteNote } = useNotes();

  return (
    <div>
      <Header />
      <CreateArea onNewNote={handleNewNote} />
      <NoteList notes={notes} onDeleteNote={handleDeleteNote} />
      <Footer />
    </div>
  );
}

export default App;
