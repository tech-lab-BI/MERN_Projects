const student = {
  fname: "Rahul",
  lname: "Sharma",
  email: "rahul.sharma@example.com",
  password: "Test@12345",
  address: "42 Park Street",
  city: "Kolkata",
  state: "West Bengal",
  zipcode: "700016",
};

function Profile() {
  const handleSignout = () => {
    console.log("sign out");
  };
  const resetPassword = () => {
    console.log("Reset Password");
  };

  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <main className="max-w-3xl w-full mx-auto p-5 sm:p-8 space-y-6">
          {/* Profile Card */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Avatar */}
              <div className="h-24 w-24 shrink-0 rounded-full bg-slate-900 text-white flex items-center justify-center text-3xl font-bold shadow-md">
                {student.fname.charAt(0)}
                {student.lname.charAt(0)}
              </div>

              {/* Profile Info */}
              <div className="grow text-center sm:text-left">
                <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">
                  {student.fname} {student.lname}
                </h2>

                <p className="mt-1 text-sm font-medium text-slate-500">
                  {student.email}
                </p>

                <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-5">
                  <button
                    onClick={resetPassword}
                    className="px-4 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition cursor-pointer"
                  >
                    Reset Password
                  </button>

                  <button
                    onClick={handleSignout}
                    className="px-4 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition cursor-pointer"
                  >
                    Sign-out
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Basic Details */}
          <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
            <div className="px-6 sm:px-8 py-5 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">
                Basic Details
              </h3>
            </div>

            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center px-6 sm:px-8 py-5">
                <span className="text-sm font-medium text-slate-500">
                  Address
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-800 text-right">
                  {student.address}
                </span>
              </div>

              <div className="flex justify-between items-center px-6 sm:px-8 py-5">
                <span className="text-sm font-medium text-slate-500">City</span>
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  {student.city}
                </span>
              </div>

              <div className="flex justify-between items-center px-6 sm:px-8 py-5">
                <span className="text-sm font-medium text-slate-500">
                  State
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-800">
                  {student.state}
                </span>
              </div>

              <div className="flex justify-between items-center px-6 sm:px-8 py-5">
                <span className="text-sm font-medium text-slate-500">
                  Zipcode
                </span>
                <span className="text-sm sm:text-base font-bold text-emerald-600">
                  {student.zipcode}
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Profile;
