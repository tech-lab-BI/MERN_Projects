import { useEffect, useState } from "react";
import Display from "../Components/Display";
import NotesList from "../Components/NotesList";
import { fetchNotes } from "../service/apiCall";
function Dashboard() {
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    const result = await fetchNotes();
    setNotes(result.data);
  };
  useEffect(() => {
    getNotes();
  }, []);
  const [showDisplay, setShowDisplay] = useState(false);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Inkly
            </a>
            <div className="collapse navbar-collapse" id="navbarText">
              <span className="navbar-text">Log out</span>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div>
          <button
            onClick={() => {
              setShowDisplay(true);
            }}
            className="btn btn-primary"
          >
            + Add note
          </button>
        </div>
        <div>
          -------------
          {notes.length > 0 ? <NotesList notes={notes} /> : "All clear"}
          ----------------
        </div>

        <section>
          {showDisplay && (
            <Display setShowDisplay={setShowDisplay} getNotes={getNotes} />
          )}{" "}
          right side
        </section>
      </main>
      <footer>all right reserved. - Bikram</footer>
    </>
  );
}

export default Dashboard;
