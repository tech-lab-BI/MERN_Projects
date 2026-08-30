import { Link } from "react-router-dom";
function TransectionsList({ transection }) {
  const isIncome = transection.type === "income";
  return (
    <>
      <tr className="hover:bg-slate-50/50 transition-colors border-b border-slate-100">
        <td className="px-6 py-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60 uppercase tracking-wide">
            {transection.category}
          </span>
        </td>
        <td className="px-6 py-4 text-sm text-slate-700">
          {transection.description}
        </td>
        <td
          className={`px-6 py-4 text-sm font-semibold ${isIncome ? "text-emerald-600" : "text-rose-600"}`}
        >
          {isIncome ? `+${transection.amount}` : `-${transection.amount}`}
        </td>
        <td className="px-6 py-4 text-sm text-slate-500">{transection.date}</td>
        <td className="px-6 py-4 text-right">
          <Link
            to="/transectionform"
            state={transection}
            className="inline-block px-3.5 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 hover:bg-blue-600 hover:text-white rounded-lg transition-all duration-200 cursor-pointer"
          >
            Edit
          </Link>
        </td>
      </tr>
    </>
  );
}

export default TransectionsList;
