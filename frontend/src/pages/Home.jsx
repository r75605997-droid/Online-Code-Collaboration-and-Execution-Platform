const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <nav className="flex items-center justify-between px-10 py-6">
        <h1 className="text-2xl font-bold text-blue-500">
          CodeCollab
        </h1>

        <div className="flex gap-8 text-slate-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">About</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <div className="flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl font-bold leading-tight">
            Code Together.
            <br />
            Collaborate in Real Time.
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            A MERN Stack based collaborative coding platform where developers,
            students, and teams can write, edit, execute, and share code together
            in real time.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>

            <button className="rounded-lg border border-slate-500 px-6 py-3 font-semibold hover:bg-slate-800 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;