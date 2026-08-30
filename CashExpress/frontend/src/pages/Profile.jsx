import Header from "../components/Header";
import Footer from "../components/Footer";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  function handleSignout() {
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800">
      <Header currentPage="profile" />
      <main className="max-w-3xl w-full mx-auto p-6 space-y-8 grow flex flex-col justify-start">
        {/* Profile Card */}
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-md">
          {/* Profile Photo */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-4xl shadow-blue-500/10 shrink-0">
            <GiPlagueDoctorProfile size={70} />
          </div>
          {/* Profile Info */}
          <div className="grow text-center sm:text-left space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">
              {user.name}
            </h2>
            <p className="text-slate-500 text-sm font-semibold">{user.email}</p>
            <div className="pt-2">
              <button className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 border border-slate-200 rounded-xl transition duration-200 cursor-pointer">
                Reset Password
              </button>
            </div>
            <div className="pt-2">
              <button
                onClick={handleSignout}
                className="px-4 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 border border-slate-200 rounded-xl transition duration-200 cursor-pointer"
              >
                Sign-out
              </button>
            </div>
          </div>
        </div>

        {/* Basic Details Section */}
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md space-y-6">
          <h3 className="text-xl font-bold text-slate-900 tracking-tight border-b border-slate-100 pb-4">
            Basic Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1 bg-slate-50 p-4 border border-slate-100 rounded-2xl">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Date of Birth
              </span>
              <p className="text-base font-semibold text-slate-700">
                {user.dob}
              </p>
            </div>
            <div className="space-y-1 bg-slate-50 p-4 border border-slate-100 rounded-2xl">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Current Age
              </span>
              <p className="text-base font-semibold text-slate-700">
                [ calculating... ]
              </p>
            </div>
            <div className="space-y-1 bg-slate-50 p-4 border border-slate-100 rounded-2xl">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Profession
              </span>
              <p className="text-base font-semibold text-slate-700">
                {user.profession}
              </p>
            </div>
            <div className="space-y-1 bg-slate-50 p-4 border border-slate-100 rounded-2xl">
              <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                Monthly Income
              </span>
              <p className="text-base font-bold text-emerald-600">
                ₹{user.income}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
