import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Display from "../Components/Display";
import NotesList from "../Components/NotesList";
import { fetchNotes } from "../service/apiCall";

function Dashboard() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState();
  const [showDisplay, setShowDisplay] = useState(false);

  const getNotes = async () => {
    const result = await fetchNotes();
    setNotes(result.data);
  };

  useEffect(() => {
    getNotes();
  }, []);

  function handleLogout() {
    localStorage.removeItem("user");
    alert("Logout successful");
    navigate("/");
  }

  return (
    <div className="min-vh-100 d-flex flex-column bg-light">
      <header>
        <nav className="navbar navbar-dark bg-primary shadow-sm">
          <div className="container">
            <span className="navbar-brand fw-bold fs-3">Inkly</span>

            <button
              onClick={handleLogout}
              className="btn btn-outline-light btn-sm"
            >
              Log out
            </button>
          </div>
        </nav>
      </header>

      <main className="container grow py-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="h3 mb-1">My Notes</h1>
            <p className="text-muted mb-0">Create and manage your notes</p>
          </div>

          <button
            onClick={() => setShowDisplay(true)}
            className="btn btn-primary"
          >
            <span className="me-1">+</span> Add Note
          </button>
        </div>

        {(showDisplay || editNote) && (
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <Display
                setShowDisplay={setShowDisplay}
                getNotes={getNotes}
                editNote={editNote}
                setEditNote={setEditNote}
              />
            </div>
          </div>
        )}

        <section className="card shadow-sm">
          <div className="card-header bg-white">
            <h2 className="h5 mb-0">Your Notes</h2>
          </div>

          <div className="card-body">
            {notes.length > 0 ? (
              <NotesList
                notes={notes}
                getNotes={getNotes}
                setShowDisplay={setShowDisplay}
                setEditNote={setEditNote}
              />
            ) : (
              <div className="text-center text-muted py-5">
                <p className="mb-0">All clear. No notes available.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-white border-top text-center text-muted py-3">
        All rights reserved. - Bikram
      </footer>
    </div>
  );
}

export default Dashboard;
