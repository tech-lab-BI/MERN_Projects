import { addNote } from "../service/apiCall";

function Display({ setShowDisplay, getNotes }) {
  const handleSave = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const title = formData.get("title");
    const date = formData.get("date");
    const description = formData.get("description");

    addNote({ title, date, description }).then(() => {
      setShowDisplay(false);
      getNotes();
    });
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Add Note</h5>

          <form onSubmit={handleSave}>
            <input
              type="text"
              name="title"
              className="form-control mb-2"
              placeholder="Note title"
            />

            <input type="date" name="date" className="form-control mb-2" />

            <textarea
              name="description"
              className="form-control mb-2"
              placeholder="Note description"
            />

            <button type="submit" className="btn btn-success">
              Save my note
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Display;
