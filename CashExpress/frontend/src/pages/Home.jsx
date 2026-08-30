import Footer from "../components/Footer";
import Header from "../components/Header";
import TransectionsList from "../components/TransectionsList";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllData } from "../service/apiCall";

function Home() {
  const [transectionsData, setTransectionsData] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    getAllData(user._id).then((data) => {
      setTransectionsData(data);
    });
  }, []);

  let totalInc = 0;
  let totalExp = 0;

  transectionsData.forEach((tran) => {
    if (tran.type === "income") {
      totalInc += tran.amount;
    } else {
      totalExp += tran.amount;
    }
  });
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col text-white">
      <Header currentPage="Home" />
      <main className="max-w-6xl w-full mx-auto p-6 space-y-8 grow flex flex-col justify-start">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Welcome back {user.name} 👋
            </h2>
            <p className="text-slate-400 mt-1 text-sm">
              Here is your Expense Dashboard overview
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-slate-700 transition duration-200">
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              TOTAL INCOME
            </span>
            <span className="text-3xl font-bold text-emerald-400 mt-2">
              {totalInc}
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-slate-700 transition duration-200">
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              TOTAL EXPENSE
            </span>
            <span className="text-3xl font-bold text-rose-400 mt-2">
              {totalExp}
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-slate-700 transition duration-200">
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              TOTAL BALANCE
            </span>
            <span className="text-3xl font-bold text-blue-400 mt-2">
              {totalInc - totalExp}
            </span>
          </div>
        </div>
        <Link
          to="/transectionform"
          className="group block rounded-xl border border-gray-200 p-6 hover:bg-sky-500 min-w-40"
        >
          <div>
            <svg
              className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <h3 className="mt-3 text-gray-900 group-hover:text-white">
              New Transection
            </h3>
          </div>
          <p className="mt-2 text-gray-500 group-hover:text-white">
            Create a transection and add to list.
          </p>
        </Link>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
            <h3 className="text-lg font-semibold text-white">
              Recent Transactions
            </h3>
            <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
              {transectionsData.length} entries
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950/40 border-b border-slate-800 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Description</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {transectionsData.map((item) => (
                  <TransectionsList key={item._id} transection={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
