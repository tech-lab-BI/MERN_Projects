import { GiPlagueDoctorProfile } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { Link } from "react-router-dom";
function Header({ currentPage }) {
  return (
    <header className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-lg">
              <FcMoneyTransfer />
            </span>
          </div>
          <span className="text-lg font-bold tracking-wider text-white">
            CashExpress
          </span>
        </div>

        <nav className="flex items-center gap-6">
          <div className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200">
            {currentPage === "profile" ? (
              <Link to="/home">Return Dashboard</Link>
            ) : (
              <Link to="/profile">Go to Profile</Link>
            )}
          </div>
          <GiPlagueDoctorProfile size={30} />
        </nav>
      </div>
    </header>
  );
}
export default Header;
