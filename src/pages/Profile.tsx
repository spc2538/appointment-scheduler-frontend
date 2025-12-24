import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth.service";
import { clearTokens } from "../utils/tokenStorage";

function Profile() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } finally {
      clearTokens();
      navigate("/login");
    }
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>

        <p className="text-gray-600 mb-6">
          You are logged in
        </p>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
