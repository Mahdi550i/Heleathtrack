import { NavLink } from "react-router-dom";

export default function Navbar() {
  const base =
    "px-3 py-2 rounded-md text-sm font-medium transition hover:bg-slate-200";
  const active = "bg-blue-600 text-white hover:bg-blue-700";

  return (
    <nav className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 h-16 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">HealthTrack</div>

        <div className="space-x-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${base} ${isActive ? active : "text-slate-700"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${base} ${isActive ? active : "text-slate-700"}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/features"
            className={({ isActive }) =>
              `${base} ${isActive ? active : "text-slate-700"}`
            }
          >
            Features
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${base} ${isActive ? active : "text-slate-700"}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${base} ${isActive ? active : "text-slate-700"}`
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
