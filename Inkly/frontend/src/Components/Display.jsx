import { addNote } from "../service/apiCall";

function Display({ setShowDisplay, getNotes, editNote, setEditNote }) {
  const handleSave = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const noteData = {
      id: formData.get("id"),
      title: formData.get("title"),
      date: formData.get("date"),
      description: formData.get("description"),
    };
    
    addNote(noteData).then(() => {
      setShowDisplay(false);
      setEditNote(null);
      getNotes();
    });
  };

  return (
    <div className="card border-0">
      <div className="card-body p-0">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h5 className="card-title mb-0">
            {editNote ? "Edit Note" : "Add Note"}
          </h5>

          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => {
              setShowDisplay(false);
              setEditNote(null);
            }}
          />
        </div>

        <form onSubmit={handleSave}>
          <input type="hidden" name="id" defaultValue={editNote?._id || ""} />

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              id="title"
              type="text"
              name="title"
              defaultValue={editNote?.title || ""}
              className="form-control"
              placeholder="Enter note title"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              defaultValue={editNote?.date || ""}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              defaultValue={editNote?.description || ""}
              className="form-control"
              placeholder="Enter note description"
              rows="4"
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            {editNote ? "Update Note" : "Save Note"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Display;
