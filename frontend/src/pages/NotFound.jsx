import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-slate-100">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-slate-400">Page not found.</p>
      <Link to="/" className="mt-4 text-blue-400 hover:underline">
        Go back home
      </Link>
    </div>
  );
};

export default NotFound;
