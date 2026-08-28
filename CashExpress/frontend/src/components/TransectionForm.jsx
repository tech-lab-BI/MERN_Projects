import { useNavigate } from "react-router-dom";
function TransectionForm() {
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(Object.fromEntries(formData.entries()));
    navigate("/home");
  }

  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Transaction Details
          </h2>
          <p className="text-slate-400 text-sm">
            Review the transaction information below
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              TRANSACTION TYPE
            </label>
            <input
              type="text"
              name="type"
              id="type"
              className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-slate-300 placeholder-slate-500 cursor-not-allowed focus:outline-none transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              CATEGORY
            </label>
            <input
              type="text"
              name="category"
              id="category"
              className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-slate-300 placeholder-slate-500 cursor-not-allowed focus:outline-none transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              DESCRIPTION
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-slate-300 placeholder-slate-500 cursor-not-allowed focus:outline-none transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              AMOUNT
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-slate-300 placeholder-slate-500 cursor-not-allowed focus:outline-none transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              DATE
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-slate-300 placeholder-slate-500 cursor-not-allowed focus:outline-none transition-all duration-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-xl shadow-md shadow-blue-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 mt-2 cursor-pointer"
          >
            Add to transactions
          </button>
        </form>
      </div>
    </div>
  );
}

export default TransectionForm;
