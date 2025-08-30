import { useState } from "react";
import Topbar from "../components/Topbar";
import Sidebar from "../components/SideBar";

export default function MainLayout({ children }) {
  const [onMobile, setOnMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen">
      <Topbar
        onToggleSidebar={() => setOnMobile((prev) => !prev)}
        setSidebarOpen={() => setSidebarOpen(!sidebarOpen)}
      />
      <Sidebar
        mobile={onMobile}
        onClose={() => setOnMobile(false)}
        sidebarOpen={sidebarOpen}
      />

      <main className="pt-16 lg:pl-64">
        <div className="px-4 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
