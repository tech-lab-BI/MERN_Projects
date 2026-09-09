import { Link, useNavigate } from "react-router-dom";
import { login } from "../service/apiCall";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    login({ email, password })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.msg);
        if (data.msg === "Login successful") {
          localStorage.setItem("login", {status : true});
          navigate("/dashboard");
        }
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <button className="btn btn-primary">
          <Link to="/signup" className="btn">Sign Up</Link>
        </button>
      </form>
    </>
  );
}
export default Login;
