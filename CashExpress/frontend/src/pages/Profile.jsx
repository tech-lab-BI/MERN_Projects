import Header from "../components/Header";
import Footer from "../components/Footer";
import { GiPlagueDoctorProfile } from "react-icons/gi";

function Profile() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col text-white">
      <Header />
      <main className="max-w-3xl w-full mx-auto p-6 space-y-8 grow flex flex-col justify-start">
        {/* Profile Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-xl">
          {/* Profile Photo */}
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-linear-to-tr from-blue-600 to-indigo-600 border-4 border-slate-800 shadow-xl flex items-center justify-center text-white font-bold text-4xl shadow-blue-500/10 shrink-0">
            <GiPlagueDoctorProfile size={70}/>
          </div>
          {/* Profile Info */}
          <div className="grow text-center sm:text-left space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              BIKRAM
            </h2>
            <p className="text-slate-400 text-sm font-medium">abc@gmail.com</p>
            <div className="pt-2">
              <button className="px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-xl transition duration-200 cursor-pointer">
                Reset Password
              </button>
            </div>
          </div>
        </div>

        {/* Basic Details Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <h3 className="text-xl font-bold text-white tracking-tight border-b border-slate-800 pb-4">
            Basic Details
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-1 bg-slate-950/40 p-4 border border-slate-800/80 rounded-2xl">
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Date of Birth
              </span>
              <p className="text-base font-medium text-slate-200">
                12-sep-2000
              </p>
            </div>
            <div className="space-y-1 bg-slate-950/40 p-4 border border-slate-800/80 rounded-2xl">
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Current Age
              </span>
              <p className="text-base font-medium text-slate-200">25 years</p>
            </div>
            <div className="space-y-1 bg-slate-950/40 p-4 border border-slate-800/80 rounded-2xl">
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Profession
              </span>
              <p className="text-base font-medium text-slate-200">Student</p>
            </div>
            <div className="space-y-1 bg-slate-950/40 p-4 border border-slate-800/80 rounded-2xl">
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Income
              </span>
              <p className="text-base font-bold text-emerald-400">35000</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
