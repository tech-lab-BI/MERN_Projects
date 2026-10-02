import { Link } from "react-router-dom";

function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fname = formData.get("fname");
    const lname = formData.get("lname");
    const email = formData.get("email");
    const password = formData.get("password");
    const address = formData.get("address");
    const city = formData.get("city");
    const state = formData.get("state");
    const zipcode = formData.get("zipcode");

    console.log(fname, lname, email, password, address, city, state, zipcode);
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="row g-3">
          <div className="col">
            <input
              type="text"
              name="fname"
              className="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="lname"
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
            type="email"
            name="email"
            className="form-control"
            id="inputEmail4"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="inputPassword4"
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            type="text"
            name="city"
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select name="state" id="inputState" className="form-select">
            <option>Choose...</option>
            <option>West Bengal</option>
            <option>Maharashtra</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Gujarat</option>
            <option>Rajasthan</option>
            <option>Uttar Pradesh</option>
            <option>Bihar</option>
            <option>Odisha</option>
            <option>Assam</option>
            <option>Punjab</option>
            <option>Haryana</option>
            <option>Goa</option>
            <option>Jharkhand</option>
            <option>Chhattisgarh</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            type="text"
            name="zipcode"
            className="form-control"
            id="inputZip"
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
          Already have account
          <button type="button" className="btn btn-primary">
            <Link to="/">Login</Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default Signup;
