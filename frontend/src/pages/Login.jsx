const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900">

      <div className="w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-lg">

        <h1 className="mb-2 text-center text-4xl font-bold text-blue-500">
          Welcome Back
        </h1>

        <p className="mb-8 text-center text-slate-400">
          Login to continue to CodeCollab
        </p>

        <form className="space-y-5">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-slate-600 bg-slate-900 p-3 text-white outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full rounded-lg border border-slate-600 bg-slate-900 p-3 text-white outline-none focus:border-blue-500"
          />

<div className="flex items-center justify-between text-sm">

  <label className="flex items-center gap-2 text-slate-400">

    <input type="checkbox" />

    Remember Me

  </label>

  <a
    href="#"
    className="text-blue-400 hover:text-blue-300"
  >
    Forgot Password?
  </a>

</div>

          <button
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold transition hover:bg-blue-700"
          >
            Login
          </button>

          <p className="mt-6 text-center text-slate-400">

  Don't have an account?

  <a
    href="/register"
    className="ml-2 font-semibold text-blue-400 hover:text-blue-300"
  >
    Register
  </a>

</p>

        </form>

      </div>

    </div>
  );
};

export default Login;