import Footer from "../components/Footer";
import Header from "../components/Header";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col text-white">
      <Header />
      <main className="max-w-6xl w-full mx-auto p-6 space-y-8 grow flex flex-col justify-start">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white">
              Welcome Bikram 👋
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
              45000
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-slate-700 transition duration-200">
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              TOTAL EXPENSE
            </span>
            <span className="text-3xl font-bold text-rose-400 mt-2">44000</span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-slate-700 transition duration-200">
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              TOTAL BALANCE
            </span>
            <span className="text-3xl font-bold text-blue-400 mt-2">+1000</span>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
            <h3 className="text-lg font-semibold text-white">
              Recent Transactions
            </h3>
            <span className="text-xs font-medium text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">
              3 entries
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
                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-red-400/10 text-red-400 border border-red-400/20 uppercase tracking-wide">
                      food
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">buy milk</td>
                  <td className="px-6 py-4 text-sm font-semibold text-rose-400">
                    -30
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">20-aug</td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-3.5 py-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
                      Edit
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 uppercase tracking-wide">
                      salary
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">
                    company salary
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-emerald-400">
                    +300000
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">2-aug</td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-3.5 py-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
                      Edit
                    </button>
                  </td>
                </tr>

                <tr className="hover:bg-slate-800/20 transition-colors">
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-red-400/10 text-red-400 border border-red-400/20 uppercase tracking-wide">
                      grocery
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">buy rice</td>
                  <td className="px-6 py-4 text-sm font-semibold text-rose-400">
                    -1500
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-400">09-aug</td>
                  <td className="px-6 py-4 text-right">
                    <button className="px-3.5 py-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
                      Edit
                    </button>
                  </td>
                </tr>
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
