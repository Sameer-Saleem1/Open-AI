import { useState, useEffect } from "react";
import Topbar from "../components/TopBar";
import Sidebar from "../components/SideBar";

export default function MainLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  }, []);

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
