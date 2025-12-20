import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm"
          : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold">MyLanding</h1>

        <div className="hidden md:flex gap-6">
          <a className="hover:text-blue-600" href="#">Features</a>
          <a className="hover:text-blue-600" href="#">Pricing</a>
          <a className="hover:text-blue-600" href="#">Contact</a>
          <Link
            to="/login"
            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
          >
            Login
          </Link>

        </div>

        <button
          className="md:hidden text-sm font-medium"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-4 items-center">
            <a onClick={() => setIsOpen(false)} href="#">Features</a>
            <a onClick={() => setIsOpen(false)} href="#">Pricing</a>
            <a onClick={() => setIsOpen(false)} href="#">Contact</a>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
