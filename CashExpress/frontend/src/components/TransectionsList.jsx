import { Link } from "react-router-dom";
function TransectionsList({ transection }) {
  return (
    <>
      <tr className="hover:bg-slate-800/20 transition-colors">
        <td className="px-6 py-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-red-400/10 text-red-400 border border-red-400/20 uppercase tracking-wide">
            {transection.category}
          </span>
        </td>
        <td className="px-6 py-4 text-sm text-slate-300">
          {transection.description}
        </td>
        <td className="px-6 py-4 text-sm font-semibold text-rose-400">
          {transection.amount}
        </td>
        <td className="px-6 py-4 text-sm text-slate-400">{transection.date}</td>
        <td className="px-6 py-4 text-right">
          <button className="px-3.5 py-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-200 cursor-pointer">
            <Link to="/transectionform" state={transection}>
              Edit
            </Link>
          </button>
        </td>
      </tr>
    </>
  );
}

export default TransectionsList;
