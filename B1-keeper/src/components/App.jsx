import { Footer } from './Footer';
import { Header } from './Header';
import { Note } from './Note';

import notes from '../notes';

function App() {
  return (
    <div>
      <Header />
      <div className="note-container">
        {notes.map((note) => (
          <Note
            key={note.key}
            title={note.title}
            content={note.content}
            notesize={note.size}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
