import { deleteNote } from "../service/apiCall";

function NotesList({ notes, getNotes, setShowDisplay, setEditNote }) {
  function handleDelete(noteId) {
    deleteNote(noteId).then(() => getNotes());
  }
  function handleEdit(note) {
    setShowDisplay(true);
    setEditNote(note);
  }
  return (
    <div className="row g-4">
      {notes.map((note) => (
        <div className="col-12 col-md-6 col-lg-4" key={note._id}>
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-primary">{note.title}</h5>

              <small className="text-muted mb-3">{note.date}</small>

              <p className="card-text grow">{note.description}</p>

              <div className="d-flex gap-2 mt-3">
                <button
                  type="button"
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(note._id)}
                >
                  Delete
                </button>

                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleEdit(note)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
