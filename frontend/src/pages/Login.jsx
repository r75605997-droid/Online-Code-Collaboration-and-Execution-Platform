import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
 const [showPassword, setShowPassword] = useState(false);

 const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );

    // Token save
    localStorage.setItem("token", response.data.token);

    console.log(response.data);

navigate("/dashboard");

  } catch (error) {
    alert(
      error.response?.data?.message || "Login Failed"
    );
  }
};
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900">

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>

<div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-800/80 p-8 shadow-2xl backdrop-blur-md transition duration-300 hover:shadow-blue-500/20">

        <h1 className="mb-2 text-center text-4xl font-bold text-blue-500">
          👋 Welcome Back
        </h1>

        <p className="mb-8 text-center text-slate-400">
          Sign in to continue your coding journey with CodeCollab.
        </p>

        <form className="space-y-5" onSubmit={handleLogin}>

          <div className="relative">

  <input
  type="email"
  placeholder="Enter your email"
  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 pr-12 text-white transition duration-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
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

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white transition duration-300 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
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
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/40"
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