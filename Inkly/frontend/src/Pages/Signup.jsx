import { Link, useNavigate } from "react-router-dom";
import { signup } from "../service/apiCall";

function Signup() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const fname = event.target.fname.value;
    const lname = event.target.lname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const profession = event.target.profession.value;

    signup({
      fname,
      lname,
      email,
      password,
      profession,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.msg === "Signup successful") {
          navigate("/");
        }
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <h1>Sign up</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col">
            <input
              name="fname"
              type="text"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              name="lname"
              type="text"
              className="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Profession
          </label>
          <select
            name="profession"
            id="inputState"
            className="form-select"
            defaultValue="student"
          >
            <option value="student">Student</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <button className="btn btn-primary">
            <Link to="/" className="btn">Back to Login</Link>
          </button>
        </div>
      </form>
    </>
  );
}
export default Signup;
