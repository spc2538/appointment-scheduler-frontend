import { Link } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:static z-30
          w-64 h-screen bg-white shadow-lg
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 font-bold text-xl">
            Scheduler
          </div>

          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            <Link
              to="/profile"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Profile
            </Link>

            <Link
              to="/dashboard"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/"
              className="block px-4 py-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              Landing page
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
}
