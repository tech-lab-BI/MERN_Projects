import { GiPlagueDoctorProfile } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from "react-router-dom";
function Header({ currentPage }) {
  return (
    <header className="w-full bg-slate-100/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/10">
            <span className="text-white font-bold text-lg">
              <FcMoneyTransfer />
            </span>
          </div>
          <span className="text-lg font-bold tracking-wider text-slate-800">
            CashExpress
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <div className="text-slate-600 hover:text-slate-900 text-sm font-semibold transition-colors duration-200">
            {currentPage === "profile" ? (
              <Link to="/home">Return Dashboard</Link>
            ) : (
              <Link to="/profile">Go to Profile</Link>
            )}
          </div>
          <div className="text-slate-700 hover:text-slate-900 transition-colors">
            <GiPlagueDoctorProfile size={30} />
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Header;
