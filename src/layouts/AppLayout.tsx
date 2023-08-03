import { NavLink, Outlet } from "react-router-dom";

export const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 bg-zinc-200 min-h-screen">
      <header className="w-full bg-black bg-opacity-95 pt-8 pb-2">
        <div className="w-full flex justify-between items-end px-12">
          <p className="text-white text-3xl">Contact Manager</p>
          <nav className="flex gap-8 text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add">Add Contact</NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
};
