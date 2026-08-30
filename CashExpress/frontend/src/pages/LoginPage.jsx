import { useNavigate } from "react-router-dom";
import { login } from "../service/apiCall";
import { useState } from "react";
import ErrorMsg from "../components/ErrorMsg";
function Login() {
  const [err, setErr] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    login({ email, password }).then((result) => {
      if (result.msg) {
        localStorage.setItem("user", JSON.stringify(result.msg));
        navigate("/home");
      } else {
        setErr(result.errors);
      }
    });
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-100 border border-slate-200 rounded-2xl p-8 shadow-xl space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            WELCOME BACK
          </h2>
          <p className="text-slate-500 text-sm">
            Please enter your credentials to log in
          </p>
        </div>

        <div>{err.length > 0 && <ErrorMsg msg={err} />}</div>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            Log-in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
