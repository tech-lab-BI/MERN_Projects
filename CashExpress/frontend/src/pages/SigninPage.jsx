function Signin() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const dob = formData.get("dob");
    const profession = formData.get("profession");
    const income = formData.get("income");
    const password = formData.get("password");
    console.log("name : ", name);
    console.log("Email : ", email);
    console.log("dob : ", dob);
    console.log("profession : ", profession);
    console.log("income : ", income);
    console.log("password : ", password);
  };
  return (
    <div className="min-h-screen w-full bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            CREATE ACCOUNT
          </h2>
          <p className="text-slate-400 text-sm">
            Please enter your details to sign up
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              NAME
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Bikram Samanta"
              className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              EMAIL / GMAIL
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com"
              className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              DATE OF BIRTH
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">
              PROFESSION
            </label>
            <div className="flex items-center gap-6 py-2.5 px-4 bg-slate-950/50 border border-slate-800 rounded-xl">
              <label className="flex items-center gap-2 text-slate-300 cursor-pointer hover:text-white">
                <input
                  type="radio"
                  id="profession-employee"
                  name="profession"
                  value="Employee"
                  className="w-4 h-4 text-blue-600 bg-slate-900 border-slate-800 focus:ring-blue-500 focus:ring-offset-slate-900 cursor-pointer"
                  required
                />
                <span className="text-sm">Employee</span>
              </label>
              <label className="flex items-center gap-2 text-slate-300 cursor-pointer hover:text-white">
                <input
                  type="radio"
                  id="profession-student"
                  name="profession"
                  value="Student"
                  className="w-4 h-4 text-blue-600 bg-slate-900 border-slate-800 focus:ring-blue-500 focus:ring-offset-slate-900 cursor-pointer"
                />
                <span className="text-sm">Student</span>
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="income"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              MONTHLY INCOME
            </label>
            <input
              type="number"
              name="income"
              id="income"
              placeholder="25000 INR"
              className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-300 mb-1.5"
            >
              PASSWORD
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-slate-950/50 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold rounded-xl shadow-md shadow-blue-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 mt-2 cursor-pointer"
          >
            Sign-in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
