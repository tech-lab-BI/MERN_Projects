function NotesList({ notes }) {
  return (
    <>
      {notes.map((note) => (
        <div className="card mb-3" style={{ width: "18rem" }} key={note._id}>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="text-muted">{note.date}</p>
            <p className="card-text">{note.description}</p>
            <div className="d-flex gap-3">
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => console.log("Delete:", note._id)}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-link p-0"
                onClick={() => console.log("Edit:", note._id)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default NotesList;
