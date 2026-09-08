import Display from "../Components/Display";
function Dashboard() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Inkly
            </a>
            <div className="collapse navbar-collapse" id="navbarText">
              <span className="navbar-text">
                Log out
              </span>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div>Add note</div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">My note 1</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
            <a href="#" className="card-link">
              Delete
            </a>
            <a href="#" className="card-link">
              Edit
            </a>
          </div>
        </div>
        
        <section>
          <Display /> right side
        </section>
      </main>
      <footer>all right reserved. - Bikram</footer>
    </>
  );
}

export default Dashboard;
