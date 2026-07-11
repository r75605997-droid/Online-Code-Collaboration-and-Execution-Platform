const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">

      <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-lg">

        <h1 className="mb-2 text-center text-4xl font-bold text-blue-500">
          Create Account
        </h1>

        <p className="mb-8 text-center text-slate-400">
          Join CodeCollab today
        </p>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-slate-600 bg-slate-900 p-3 text-white outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border border-slate-600 bg-slate-900 p-3 text-white outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-slate-600 bg-slate-900 p-3 text-white outline-none focus:border-blue-500"
          />

          <button className="w-full rounded-lg bg-blue-600 p-3 font-semibold hover:bg-blue-700 transition">
            Register
          </button>

        </form>

      </div>

    </div>
  );
};

export default Register;