import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth.service";
import { clearTokens } from "../utils/tokenStorage";

interface AppNavbarProps {
  onMenuClick: () => void;
}

export default function AppNavbar({ onMenuClick }: AppNavbarProps) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      clearTokens();
      navigate("/login");
    }
  };

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="px-4 py-2 rounded-lg hover:bg-gray-100"
        >
          Account ▾
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border">
            <button
              onClick={() => {
                navigate("/profile");
                setMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
            >
              Profile
            </button>

            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
