import { useState } from "react";
const Register = () => {
 const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900">

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

<div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-800/80 p-8 shadow-2xl backdrop-blur-md transition duration-300 hover:shadow-blue-500/20">

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
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white transition duration-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
          />

          <input
  type="email"
  placeholder="Email Address"
  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white transition duration-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
/>

          <div className="relative">

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"
    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-12 text-white transition duration-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
  >
    {showPassword ? "🙈" : "👁️"}
  </button>

</div>

          <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/40">
            Register
          </button>

          <p className="mt-6 text-center text-slate-400">
  Already have an account?

  <a
    href="/login"
    className="ml-2 font-semibold text-blue-400 hover:text-blue-300"
  >
    Login
  </a>
</p>

        </form>

      </div>

    </div>
  );
};

export default Register;