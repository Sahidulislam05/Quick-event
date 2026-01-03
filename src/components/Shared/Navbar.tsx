import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import ThemeToggle from "./ThemeToggle";
import Logo from "./logo";

const Navbar = () => {
  const { user, signout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHomePage && !isScrolled;

  const handleSignOut = () => {
    signout()
      .then(() => {
        navigate("login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-5 py-2.5 rounded-full transition-all duration-300 text-[15px] font-medium ${
              isActive
                ? "bg-primary/10 text-primary font-bold shadow-sm"
                : isTransparent
                ? "text-white hover:bg-white/10"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            `px-5 py-2.5 rounded-full transition-all duration-300 text-[15px] font-medium ${
              isActive
                ? "bg-primary/10 text-primary font-bold shadow-sm"
                : isTransparent
                ? "text-white hover:bg-white/10"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`
          }
        >
          All Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-5 py-2.5 rounded-full transition-all duration-300 text-[15px] font-medium ${
              isActive
                ? "bg-primary/10 text-primary font-bold shadow-sm"
                : isTransparent
                ? "text-white hover:bg-white/10"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-5 py-2.5 rounded-full transition-all duration-300 text-[15px] font-medium ${
              isActive
                ? "bg-primary/10 text-primary font-bold shadow-sm"
                : isTransparent
                ? "text-white hover:bg-white/10"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      } px-4`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between gap-4 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border border-gray-100/50 rounded-full px-6 py-2"
            : ""
        }`}
      >
        <Link to="/">
          {/* Logo handles its own styling, but we might need to adjust for transparency */}
          <Logo />
        </Link>
        <div
          className={`hidden lg:flex rounded-full px-2 py-0 transition-all duration-500`}
        >
          <ul className="menu menu-horizontal px-1 gap-1">{navOptions}</ul>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className={`btn btn-ghost btn-circle avatar border border-gray-100`}
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-1 p-2 shadow-xl menu menu-sm dropdown-content bg-base-100 rounded-2xl w-52 border border-base-200"
              >
                <li>
                  <Link to="/dashboard" className="justify-between group">
                    Dashboard
                    <span className="badge bg-primary text-white border-none badge-sm font-medium">
                      New
                    </span>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-red-500 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                end
                className={({ isActive }) =>
                  `px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : isTransparent
                      ? "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent"
                  }`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                end
                className={({ isActive }) =>
                  `px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : isTransparent
                      ? "bg-white text-black hover:bg-gray-100"
                      : "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20"
                  }`
                }
              >
                Register
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-ghost btn-circle ${
              isTransparent ? "text-white" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-xl bg-base-100 rounded-box w-52 gap-2"
          >
            {navOptions}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
