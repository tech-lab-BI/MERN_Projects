import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-slate-100 border border-slate-200 rounded-2xl p-8 shadow-xl space-y-4">
        <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">
          404
        </h1>
        <h2 className="text-2xl font-bold text-slate-800">Page not found</h2>
        <p className="text-slate-500 text-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="pt-4">
          <Link
            to="/home"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition duration-200 shadow-md hover:shadow-lg"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
