import { useLocation, useNavigate } from "react-router-dom";
import { addData, deleteData, editData } from "../service/apiCall";
import Header from "./Header";
import Footer from "./Footer";
function TransectionForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const editTransection = location.state;
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const transection = {
      userId: JSON.parse(localStorage.getItem("user"))._id,
      type: formData.get("type"),
      category: formData.get("category"),
      description: formData.get("description"),
      amount: formData.get("amount"),
      date: formData.get("date"),
    };
    if (editTransection === null) {
      addData(transection).then(() => {
        alert("Added successfully.");
        event.target.reset();
      });
    } else {
      editData(transection, editTransection._id).then(() => {
        alert("Updated successfully.");
        event.target.reset();
      });
    }
  }
  function handleDelete() {
    deleteData(editTransection._id).then(() => {
      navigate("/home");
      alert("Data successfully deleted");
    });
  }

  return (
    <>
      <Header />
      <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-100 border border-slate-200 rounded-2xl p-8 shadow-xl space-y-6">
          <button
            onClick={() => navigate("/home")}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 border border-slate-200 rounded-xl transition duration-200 cursor-pointer"
          >
            &larr; Back to Home
          </button>

          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Transaction Details
            </h2>
            <p className="text-slate-500 text-sm">
              Review the transaction information below
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-semibold text-slate-700 mb-1.5"
              >
                TRANSACTION TYPE
              </label>
              <select
                name="type"
                id="type"
                defaultValue={
                  editTransection !== null ? editTransection.type : ""
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              >
                <option value="" disabled className="bg-slate-100 text-slate-900">
                  Select transaction type
                </option>
                <option value="income" className="bg-slate-100 text-slate-900">
                  Income
                </option>
                <option value="expense" className="bg-slate-100 text-slate-900">
                  Expense
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-semibold text-slate-700 mb-1.5"
              >
                CATEGORY
              </label>
              <select
                name="category"
                id="category"
                defaultValue={
                  editTransection !== null ? editTransection.category : ""
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              >
                <option value="" disabled className="bg-slate-100 text-slate-900">
                  Select category type
                </option>
                <option value="salary" className="bg-slate-100 text-slate-900">
                  Salary
                </option>
                <option value="food" className="bg-slate-100 text-slate-900">
                  Food
                </option>
                <option value="grocery" className="bg-slate-100 text-slate-900">
                  Grocery
                </option>
                <option value="misc" className="bg-slate-100 text-slate-900">
                  Misc.
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-semibold text-slate-700 mb-1.5"
              >
                DESCRIPTION
              </label>
              <input
                type="text"
                name="description"
                id="description"
                defaultValue={
                  editTransection !== null ? editTransection.description : ""
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-semibold text-slate-700 mb-1.5"
              >
                AMOUNT
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                min="0"
                defaultValue={
                  editTransection !== null ? editTransection.amount : ""
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="date"
                className="block text-sm font-semibold text-slate-700 mb-1.5"
              >
                DATE
              </label>
              <input
                type="date"
                name="date"
                id="date"
                defaultValue={
                  editTransection !== null ? editTransection.date : ""
                }
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2 cursor-pointer"
            >
              {editTransection !== null
                ? "Update my details"
                : "Add to transactions"}
            </button>
          </form>
          {editTransection !== null && (
            <button
              onClick={handleDelete}
              className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-slate-50 mt-2 cursor-pointer"
            >
              Delete this transaction
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TransectionForm;
