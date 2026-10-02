function CourseDetails() {
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">Course title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">teacher</li>
          <li className="list-group-item">duration</li>
          <li className="list-group-item">post by</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Back to main page
          </a>
          <a href="#" className="card-link">
            Enroll
          </a>
        </div>
        {/* no need add favourite for now */}
      </div>
    </>
  );
}

export default CourseDetails;
