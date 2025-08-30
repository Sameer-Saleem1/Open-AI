import { useState } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true); // used for BOTH desktop + mobile

  return (
    <div className="min-h-screen">
      <Topbar onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

      <Sidebar
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <main
        className={`pt-16 transition-all duration-300 ${
          sidebarOpen ? "lg:ml-56" : "lg:ml-0"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
