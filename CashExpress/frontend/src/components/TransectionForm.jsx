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
      <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl space-y-6">
          <button onClick={() => navigate("/home")}>Back to Home</button>
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
                defaultValue={
                  editTransection !== null ? editTransection.type : ""
                }
                className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-200"
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
                defaultValue={
                  editTransection !== null ? editTransection.category : ""
                }
                className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-200"
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
                defaultValue={
                  editTransection !== null ? editTransection.description : ""
                }
                className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-200"
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
                defaultValue={
                  editTransection !== null ? editTransection.amount : ""
                }
                className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-200"
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
                defaultValue={
                  editTransection !== null ? editTransection.date : ""
                }
                className="w-full px-4 py-3 bg-slate-950/40 border border-slate-800 rounded-xl text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-200"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-xl shadow-md shadow-blue-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 mt-2 cursor-pointer"
            >
              {editTransection !== null
                ? "Update my details"
                : "Add to transactions"}
            </button>
          </form>
          {editTransection !== null && (
            <button
              onClick={handleDelete}
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-xl shadow-md shadow-blue-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 mt-2 cursor-pointer"
            >
              Delete this transection
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TransectionForm;
