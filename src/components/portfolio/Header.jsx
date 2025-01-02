import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isMenuOpen]);

  return (
    <header className="lg:h-[25vh] md:h-[18vh] h-[9vh] flex ">
      <div className="flex justify-between md:px-24 px-4 w-full items-center">
        <Link to="/" className="text-xl text-gray-600 ">
          Sahitya Kashyap
        </Link>
        <nav className="hidden md:flex space-x-14">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/sandbox"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            Sandbox
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold"
                : "text-gray-600 hover:text-gray-900"
            }
          >
            About
          </NavLink>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className={`text-gray-600 hover:text-gray-900 z-50 relative transition-transform duration-300 ${
              isMenuOpen ? "-rotate-90" : ""
            }`}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
       className={`fixed inset-0 bg-[#fffffff2] z-40 flex items-center justify-center md:hidden transition-all duration-500 ease-in-out ${
        isMenuOpen
          ? "-translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
      >
        <nav className="text-center ">
          <div className="flex flex-col  space-y-8">
            <Link
              to="/"
              className="text-xl text-gray-800 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Work
            </Link>
            <Link
              to="/sandbox"
              className="text-xl text-gray-800 hover:text-gray-900"
              onClick={toggleMenu}
            >
              Sandbox
            </Link>
            <Link
              to="/about"
              className="text-xl text-gray-800 hover:text-gray-900"
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
