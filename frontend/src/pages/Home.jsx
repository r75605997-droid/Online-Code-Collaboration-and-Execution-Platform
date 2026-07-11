import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-10 py-5 backdrop-blur">

  <h1 className="text-3xl font-bold text-blue-500">
    CodeCollab
  </h1>

  <div className="flex items-center gap-8">

    <div className="flex gap-6 text-slate-300">
      <a href="#" className="transition hover:text-blue-400">Home</a>
      <a href="#features" className="transition hover:text-blue-400">
  Features
</a>
      <a href="#about" className="transition hover:text-blue-400">
  About
</a>
      <a href="#contact" className="transition hover:text-blue-400">
  Contact
</a>
    </div>

    <Link
  to="/login"
  className="rounded-lg border border-blue-500 px-4 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white"
>
  Login
</Link>

 <Link
  to="/register"
  className="rounded-lg bg-blue-600 px-4 py-2 font-semibold transition hover:bg-blue-700"
>
  Register
</Link>  

  </div>

</nav>  

 <div className="flex flex-col items-center justify-center px-6 py-24 text-center">

  <span className="rounded-full bg-blue-600/20 px-4 py-2 text-sm text-blue-400">
    🚀 Real-Time Coding Platform
  </span>

  <h1 className="mt-6 text-6xl font-extrabold leading-tight">
    Code <span className="text-blue-500">Together.</span>
    <br />
    Build <span className="text-blue-500">Faster.</span>
  </h1>

  <p className="mt-8 max-w-3xl text-lg text-slate-300">
    Collaborate with your team in real time, execute code instantly,
    communicate seamlessly, and build amazing software projects from
    anywhere in the world.
  </p>

  <div className="mt-10 flex flex-wrap justify-center gap-4">
   <Link
  to="/register"
  className="rounded-xl bg-blue-600 px-8 py-3 font-semibold transition hover:bg-blue-700"
>
  Get Started
</Link> 

    <a
  href="#features"
  className="rounded-xl border border-slate-600 px-8 py-3 font-semibold transition hover:bg-slate-800"
>
  Live Demo
</a>
  </div>

  <div className="mt-16 flex flex-wrap justify-center gap-12">

    <div>
      <h2 className="text-3xl font-bold text-blue-500">50K+</h2>
      <p className="text-slate-400">Developers</p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-blue-500">10K+</h2>
      <p className="text-slate-400">Projects</p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-blue-500">100+</h2>
      <p className="text-slate-400">Collaboration Rooms</p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-blue-500">20+</h2>
      <p className="text-slate-400">Programming Languages</p>
    </div>

  </div>
<section id="features" className="bg-slate-950 px-8 py-20">

  <h2 className="text-center text-4xl font-bold text-white">
    Platform Features
  </h2>

  <p className="mt-4 text-center text-slate-400">
    Everything you need for seamless coding collaboration.
  </p>
<div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">

  <div className="rounded-2xl bg-slate-900 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-blue-500/20">
    <h3 className="text-2xl font-bold text-blue-500">
      💻 Real-Time Editor
    </h3>
    <p className="mt-4 text-slate-400">
      Collaborate with teammates instantly using a shared live code editor.
    </p>
  </div>

  <div className="rounded-2xl bg-slate-900 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-blue-500/20">
    <h3 className="text-2xl font-bold text-blue-500">
      ⚡ Instant Code Execution
    </h3>
    <p className="mt-4 text-slate-400">
      Run code in multiple programming languages directly from your browser.
    </p>
  </div>

  <div className="rounded-2xl bg-slate-900 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-blue-500/20">
    <h3 className="text-2xl font-bold text-blue-500">
      🔒 Secure Rooms
    </h3>
    <p className="mt-4 text-slate-400">
      Create private collaboration rooms with secure access for your team.
    </p>
  </div>

  <div className="rounded-2xl bg-slate-900 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-blue-500/20">
    <h3 className="text-2xl font-bold text-blue-500">
      💬 Team Chat
    </h3>
    <p className="mt-4 text-slate-400">
      Communicate seamlessly while coding together in real time.
    </p>
  </div>

  <div className="rounded-2xl bg-slate-900 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-blue-500/20">
    <h3 className="text-2xl font-bold text-blue-500">
      📂 Project Sharing
    </h3>
    <p className="mt-4 text-slate-400">
      Share projects instantly with teammates using secure links.
    </p>
  </div>

  <div className="rounded-2xl bg-slate-900 p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-blue-500/20">
    <h3 className="text-2xl font-bold text-blue-500">
      ☁ Cloud Workspace
    </h3>
    <p className="mt-4 text-slate-400">
      Access your coding workspace anytime from any device.
    </p>
  </div>

</div>
</section>
<section className="bg-slate-900 py-20">

  <h2 className="text-center text-4xl font-bold text-white">
    Supported Languages
  </h2>

  <p className="mt-4 text-center text-slate-400">
    Execute code in your favorite programming language.
  </p>

  <div className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-6">

    <div className="rounded-xl bg-slate-800 px-8 py-5 text-xl font-semibold hover:bg-blue-600 transition">
      C
    </div>

    <div className="rounded-xl bg-slate-800 px-8 py-5 text-xl font-semibold hover:bg-blue-600 transition">
      C++
    </div>

    <div className="rounded-xl bg-slate-800 px-8 py-5 text-xl font-semibold hover:bg-blue-600 transition">
      Java
    </div>

    <div className="rounded-xl bg-slate-800 px-8 py-5 text-xl font-semibold hover:bg-blue-600 transition">
      Python
    </div>

    <div className="rounded-xl bg-slate-800 px-8 py-5 text-xl font-semibold hover:bg-blue-600 transition">
      JavaScript
    </div>

    <div className="rounded-xl bg-slate-800 px-8 py-5 text-xl font-semibold hover:bg-blue-600 transition">
      Go
    </div>

    <div className="rounded-xl bg-slate-800 px-8 py-5 text-xl font-semibold hover:bg-blue-600 transition">
      Rust
    </div>

    <div className="rounded-xl bg-slate-800 px-8 py-5 text-xl font-semibold hover:bg-blue-600 transition">
      PHP
    </div>

  </div>

</section>
</div>  

<section id="about" className="bg-slate-950 py-20 px-8">

  <div className="mx-auto max-w-5xl text-center">

    <h2 className="text-4xl font-bold text-white">
      About CodeCollab
    </h2>

    <p className="mt-8 text-lg leading-8 text-slate-400">
      CodeCollab is a real-time online coding platform designed for students,
      developers, and teams. It allows users to collaborate on projects,
      execute code in multiple programming languages, and improve productivity
      through seamless teamwork.
    </p>

  </div>

</section>

<section id="contact" className="bg-slate-900 py-20 px-8">

  <div className="mx-auto max-w-4xl text-center">

    <h2 className="text-4xl font-bold text-white">
      Contact Us
    </h2>

    <p className="mt-6 text-slate-400">
      Have questions or want to collaborate? We'd love to hear from you.
    </p>

    <div className="mt-10 space-y-3 text-lg text-slate-300">
      <p>📧 Email: support@codecollab.com</p>
      <p>🌐 Website: www.codecollab.com</p>
      <p>📍 Jaipur, Rajasthan, India</p>
    </div>

  </div>

</section>

<footer className="bg-slate-950 border-t border-slate-800 py-12">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 md:flex-row">

    <div>

      <h2 className="text-3xl font-bold text-blue-500">
        CodeCollab
      </h2>

      <p className="mt-3 text-slate-400">
        Build tog<a
  href="https://github.com/r75605997-droid/Online-Code-Collaboration-and-Execution-Platform"
  target="_blank"
  rel="noreferrer"
  className="mt-4 inline-block text-blue-400 hover:text-blue-500"
>
  🔗 View Project on GitHub
</a>ether. Learn together. Grow together.
      </p>



      <a
  href="https://github.com/r75605997-droid/Online-Code-Collaboration-and-Execution-Platform"
  target="_blank"
  rel="noreferrer"
  className="mt-4 inline-block text-blue-400 hover:text-blue-500"
>
  🔗 View Project on GitHub
</a>

    </div>

    <div className="flex gap-8 text-slate-400">

      <a href="#" className="hover:text-blue-500 transition">
        Home
      </a>

      <a href="#" className="hover:text-blue-500 transition">
        Features
      </a>

      <a href="#" className="hover:text-blue-500 transition">
        About
      </a>

      <a href="#" className="hover:text-blue-500 transition">
        Contact
      </a>

    </div>

  </div>

  <div className="mt-10 text-center text-slate-500">

    © 2026 CodeCollab | Developed by Rashi

  </div>

</footer>
    </div>
  );
};

export default Home;