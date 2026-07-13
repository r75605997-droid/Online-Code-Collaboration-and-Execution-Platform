import codingImage from "../assets/coding.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-10 py-5 backdrop-blur">

        <div className="flex items-center gap-2">
        <span className="text-3xl">💻</span>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            CodeCollab
          </h1>
        </div>

        <div className="flex items-center gap-8">

          <div className="flex gap-6 text-slate-300">
  <a href="#" className="transition duration-300 hover:text-blue-400">
    Home
  </a>

  <a href="#features" className="transition duration-300 hover:text-blue-400">
    Features
  </a>

  <a href="#about" className="transition duration-300 hover:text-blue-400">
    About
  </a>

  <a href="#contact" className="transition duration-300 hover:text-blue-400">
    Contact
  </a>
</div>

          <Link
            to="/login"
            className="rounded-xl border border-blue-500 px-5 py-2 text-blue-400 transition duration-300 hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/40"
          >
            Login
          </Link>

          <Link
            to="/register"
          className="rounded-xl bg-blue-600 px-5 py-2 font-semibold transition duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/50" 
          >
            Register
          </Link>

        </div>

      </nav>

      {/* Hero Section */}

      <section className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row">

        <div className="lg:w-1/2 text-center lg:text-left">

          <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
            🚀 Real-Time Coding Platform
          </span>

          <p className="mt-6 text-yellow-400 font-medium">
  ⭐ Trusted by 50,000+ Developers Worldwide
</p>

         <h1 className="mt-6 text-7xl font-extrabold leading-tight">
  Code{" "}
  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
    Together.
  </span>

  <br />

  Build{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    Faster.
  </span>
</h1>

         <p className="mt-8 text-xl leading-8 text-slate-300">
  Collaborate with developers in real-time, write code together,
  execute programs instantly, and build amazing projects from
  anywhere in the world.
</p>


          <div className="mt-10 flex gap-4 justify-center lg:justify-start">

            <Link
              to="/register"
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50"
            >
              Get Started
            </Link>

            <a
              href="#features"
             className="rounded-xl border border-slate-600 px-8 py-3 transition duration-300 hover:scale-105 hover:bg-slate-800"
            >
              Live Demo
            </a>

          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4 animate-fadeIn">

            <div>
            <h2 className="text-5xl font-extrabold text-blue-500">  50K+</h2>
              <p className="text-slate-400">Developers</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-500">10K+</h2>
              <p className="text-slate-400">Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-500">100+</h2>
              <p className="text-slate-400">Rooms</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-500">20+</h2>
              <p className="text-slate-400">Languages</p>
            </div>

          </div>

        </div>

   <div className="lg:w-1/2 flex justify-center items-center relative">  
   
   <div className="absolute -z-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"></div>
  
  <img
  
    src={codingImage}
    alt="Coding Illustration"
 className="w-[90%] max-w-xl animate-float drop-shadow-[0_0_60px_rgba(59,130,246,0.55)]"
  />

</div>  

      </section>
       {/* Features */}

      <section id="features" className="bg-slate-950 px-8 py-16">

        <h2 className="text-center text-4xl font-bold">
          Platform Features
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Everything you need for seamless coding collaboration.
        </p>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
  [
    "💻",
    "Real-Time Editor",
    "Collaborate with teammates instantly using a shared live editor."
  ],
  [
    "⚡",
    "Instant Execution",
    "Run code in multiple programming languages directly from your browser."
  ],
  [
    "🔒",
    "Secure Rooms",
    "Create private coding rooms with secure authentication."
  ],
  [
    "💬",
    "Team Chat",
    "Chat with your teammates while writing code together."
  ],
  [
    "📂",
    "Project Sharing",
    "Share projects instantly using secure links."
  ],
  [
    "☁",
    "Cloud Workspace",
    "Access your coding workspace anytime from any device."
  ],
].map((item, index) => (
          <div
  key={index}
  className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]"
>  
           <h3 className="flex items-center gap-4 text-2xl font-bold text-white">
  <span className="text-4xl">{item[0]}</span>
  <span className="text-blue-500">{item[1]}</span>
</h3>

              <p className="mt-4 text-lg leading-8 text-slate-300">
                {item[2]}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* About */}

      <section id="about" className="bg-slate-900 py-20 px-8">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-4xl font-bold">
            About CodeCollab
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
  CodeCollab is a modern real-time coding platform that empowers developers,
  students, and teams to collaborate seamlessly, write code together, execute
  programs instantly, and boost productivity from anywhere in the world.
</p>

<div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">

  <div className="rounded-xl bg-slate-800 p-4 text-center">
    <h3 className="text-blue-400 text-2xl">⚡</h3>
    <p className="mt-2">Real-Time</p>
  </div>

  <div className="rounded-xl bg-slate-800 p-4 text-center">
    <h3 className="text-blue-400 text-2xl">🔒</h3>
    <p className="mt-2">Secure</p>
  </div>

  <div className="rounded-xl bg-slate-800 p-4 text-center">
    <h3 className="text-blue-400 text-2xl">💻</h3>
    <p className="mt-2">Multi Language</p>
  </div>

  <div className="rounded-xl bg-slate-800 p-4 text-center">
    <h3 className="text-blue-400 text-2xl">☁</h3>
    <p className="mt-2">Cloud Ready</p>
  </div>

</div>

<div className="mt-10 grid grid-cols-2 gap-6 text-left md:grid-cols-4">

  <div>✅ Real-Time Collaboration</div>

  <div>✅ Secure Authentication</div>

  <div>✅ Multiple Languages</div>

  <div>✅ Cloud Workspace</div>

</div>

        </div>

      </section>

      {/* Contact */}

      <section id="contact" className="bg-slate-950 py-20 px-8">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold">
            Contact Us
          </h2>

          <p className="mt-6 text-slate-400">
            Have questions? We'd love to hear from you.
          </p>

          <div className="mt-10 space-y-3">

            <p>📧 support@codecollab.com</p>
            <p>📍 Jaipur, Rajasthan</p>

          </div>

          <Link
  to="/register"
  className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-3 font-semibold transition duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/40" 
>
  Get In Touch
</Link>

        </div>

      </section>

      {/* Footer */}

      <footer className="border-t border-slate-800 bg-slate-900 py-10">

        <div className="mx-auto max-w-7xl px-8 text-center">

          <h2 className="text-3xl font-bold text-blue-500">
            CodeCollab
          </h2>

          <p className="mt-4 text-slate-400">
            Build together. Learn together. Grow together.
          </p>

          <p className="mt-3 text-slate-500">
  Made with ❤️ using React, Node.js, Express, MongoDB & Tailwind CSS
</p>

          <a
            href="https://github.com/r75605997-droid/Online-Code-Collaboration-and-Execution-Platform"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-blue-400 hover:text-blue-500"
          >
            🔗 View Project on GitHub
          </a>

          <p className="mt-8 text-slate-500">
            © 2026 CodeCollab | Developed by Rashi
          </p>

        </div>

      </footer>

    </div>
  );
};

export default Home;     