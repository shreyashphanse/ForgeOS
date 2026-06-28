import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  return (
    <div className="flex h-screen bg-[#0B1120] text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />

        <main className="flex-1 overflow-y-auto bg-[#111827] p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
