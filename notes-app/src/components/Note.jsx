const Note = ({ note, deleteNote, border, pill }) => {
  return (
    <div className={`${border} rounded-lg border-l-4 bg-white p-4 shadow-md`}>
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>Category: </strong> {note.category}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Priority: </strong>{' '}
        <span className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${pill}`}>
          {note.priority}
        </span>
      </p>
      <p className="mt-2">{note.description}</p>

      <button
        onClick={() => deleteNote(note.id)}
        className="mt-3 cursor-pointer text-red-500 transition hover:text-red-700"
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default Note;
