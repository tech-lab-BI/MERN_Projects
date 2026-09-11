import { Link, useNavigate } from "react-router-dom";
import { signup } from "../service/apiCall";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { fname, lname, email, password, profession } = event.target;

    signup({
      fname: fname.value,
      lname: lname.value,
      email: email.value,
      password: password.value,
      profession: profession.value,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Signup successful") {
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center py-4">
      <div
        className="card shadow-sm p-4"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <h1 className="text-center mb-4">Sign Up</h1>

        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <label htmlFor="fname" className="form-label">
              First Name
            </label>
            <input
              name="fname"
              type="text"
              className="form-control"
              id="fname"
              placeholder="Enter first name"
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="lname" className="form-label">
              Last Name
            </label>
            <input
              name="lname"
              type="text"
              className="form-control"
              id="lname"
              placeholder="Enter last name"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="profession" className="form-label">
              Profession
            </label>
            <select
              name="profession"
              id="profession"
              className="form-select"
              defaultValue="student"
            >
              <option value="student">Student</option>
              <option value="employee">Employee</option>
            </select>
          </div>

          <div className="col-12 d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              Register
            </button>

            <Link to="/" className="btn btn-outline-secondary">
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
