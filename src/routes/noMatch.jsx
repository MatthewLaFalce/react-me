import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div id="error-page" className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-5xl font-bold">It looks like you're lost...</h2>
          <p className="py-6">
            <Link to="/" className="btn btn-primary">
              Go to the home page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
