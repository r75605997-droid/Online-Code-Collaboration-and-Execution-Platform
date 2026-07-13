import { useNavigate } from "react-router-dom";
const Dashboard = () => {
    const navigate = useNavigate();

const handleCreateRoom = () => {
  const roomId = crypto.randomUUID();
  navigate(`/room/${roomId}`);
};
  return (
    <div className="min-h-screen bg-slate-900 text-white">
    
    <nav className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-10 py-5">

  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
    CodeCollab
  </h1>

  <button className="rounded-xl bg-red-500 px-5 py-2 font-semibold transition duration-300 hover:bg-red-600">
    Logout
  </button>

</nav>

      <div className="mx-auto mt-16 max-w-6xl px-8">

  <h2 className="text-5xl font-bold">
    Welcome Back, <span className="text-blue-500">Rashi 👋</span>
  </h2>

  <p className="mt-4 text-lg text-slate-400">
    Ready to collaborate? Create a room or join an existing coding session.
  </p>

</div>

<div className="mx-auto mt-10 flex max-w-6xl gap-6 px-8">

  <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/40">
    ➕ Create Room
  </button>

  <button className="rounded-xl border border-blue-500 px-8 py-4 font-semibold text-blue-400 transition duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white">
    🔗 Join Room
  </button>

</div>

<div className="mx-auto mt-16 max-w-6xl px-8">

  <h3 className="mb-6 text-3xl font-bold">
    Recent Rooms
  </h3>

  <div className="grid gap-6 md:grid-cols-3">

    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 transition duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
      <h4 className="text-xl font-semibold text-blue-400">
        💻 React Project
      </h4>
      <p className="mt-2 text-slate-400">
        Last opened 2 hours ago
      </p>
    </div>

    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 transition duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
      <h4 className="text-xl font-semibold text-blue-400">
        🚀 Interview Prep
      </h4>
      <p className="mt-2 text-slate-400">
        Last opened Yesterday
      </p>
    </div>

    <div className="rounded-2xl border border-slate-700 bg-slate-800 p-6 transition duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
      <h4 className="text-xl font-semibold text-blue-400">
        📚 DSA Practice
      </h4>
      <p className="mt-2 text-slate-400">
        Last opened Today
      </p>
    </div>

  </div>

</div>

    </div>
  );
};

export default Dashboard;