import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Track your wellness with{" "}
          <span className="text-blue-600">HealthTrack</span>
        </h1>

        <p className="text-slate-600 mb-6">
          Log your daily meals, activities, and workouts — all in one place.
        </p>

        <div className="flex gap-3">
          <Link
            to="/dashboard"
            className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700"
          >
            Go to Dashboard
          </Link>

          <Link
            to="/features"
            className="border border-slate-300 px-5 py-3 rounded text-slate-700 hover:bg-slate-100"
          >
            Features
          </Link>
        </div>
      </div>
    </section>
  );
}
