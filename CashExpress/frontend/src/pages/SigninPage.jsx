import { Link, useNavigate } from "react-router-dom";
import { signin } from "../service/apiCall";
import ErrorMsg from "../components/ErrorMsg.jsx";
import { useState } from "react";
function Signin() {
  const navigate = useNavigate();
  const [err, setErr] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const user = {
      name: formData.get("name"),
      email: formData.get("email"),
      dob: formData.get("dob"),
      profession: formData.get("profession"),
      income: formData.get("income"),
      password: formData.get("password"),
    };
    signin(user).then((res) => {
      if (!res.errors) {
        event.target.reset();
        navigate("/login");
      } else {
        setErr(res.errors);
      }
    });
  };
  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-100 border border-slate-200 rounded-2xl p-8 shadow-xl space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            CREATE ACCOUNT
          </h2>
          <p className="text-slate-500 text-sm">
            Please enter your details to sign up
          </p>
        </div>
        <div>{err && <ErrorMsg msg={err} />}</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-slate-700 mb-1.5"
            >
              NAME
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Bikram Samanta"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-slate-700 mb-1.5"
            >
              EMAIL / GMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-semibold text-slate-700 mb-1.5"
            >
              DATE OF BIRTH
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              PROFESSION
            </label>
            <div className="flex items-center gap-6 py-2.5 px-4 bg-slate-50 border border-slate-200 rounded-xl">
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-slate-900">
                <input
                  type="radio"
                  id="profession-employee"
                  name="profession"
                  value="Employee"
                  className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 focus:ring-blue-500 focus:ring-offset-slate-50 cursor-pointer"
                  required
                />
                <span className="text-sm font-medium">Employee</span>
              </label>
              <label className="flex items-center gap-2 text-slate-600 cursor-pointer hover:text-slate-900">
                <input
                  type="radio"
                  id="profession-student"
                  name="profession"
                  value="Student"
                  className="w-4 h-4 text-blue-600 bg-slate-100 border-slate-300 focus:ring-blue-500 focus:ring-offset-slate-50 cursor-pointer"
                />
                <span className="text-sm font-medium">Student</span>
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="income"
              className="block text-sm font-semibold text-slate-700 mb-1.5"
            >
              MONTHLY INCOME
            </label>
            <input
              type="number"
              name="income"
              id="income"
              placeholder="25000 INR"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-slate-700 mb-1.5"
            >
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2 cursor-pointer"
          >
            Sign-up
          </button>
        </form>

        <div className="text-sm text-slate-500 text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 font-semibold underline underline-offset-4"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
