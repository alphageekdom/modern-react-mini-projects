import Note from './Note';

const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes Yet</p>;
  }

  // Color mapping for priorities
  const priorityColors = {
    High: { border: 'border-l-4 border-red-500', pill: 'bg-red-100 text-red-700' },
    Medium: { border: 'border-l-4 border-orange-500', pill: 'bg-orange-100 text-orange-700' },
    Low: { border: 'border-l-4 border-green-500', pill: 'bg-green-100 text-green-700' },
  };

  return (
    <div className="space-y-4">
      {notes.map((note) => {
        const { border, pill } = priorityColors[note.priority] || {
          border: 'border-l-4 border-gray-500',
          pill: 'bg-gray-100 text-gray-700',
        };

        return (
          <Note
            key={note.tile ?? note.title}
            note={note}
            deleteNote={deleteNote}
            border={border}
            pill={pill}
          />
        );
      })}
    </div>
  );
};

export default NoteList;
