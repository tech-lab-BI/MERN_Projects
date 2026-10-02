import { Link } from "react-router-dom";

function PageNotFound() {
  const role = "admin";
  return (
    <>
      Page Not Found
      {role === "student" ? (
        <Link to="/home">Back to Home</Link>
      ) : (
        <Link to="/admin/home">Back to Home</Link>
      )}
    </>
  );
}

export default PageNotFound;
