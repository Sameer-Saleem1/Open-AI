/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const LINKS = [
  "Research",
  "Safety",
  "For Business",
  "For Developers",
  "ChatGPT",
  "Sora",
  "Stories",
  "Company",
  "News",
];

export default function Sidebar({ sidebarOpen, onClose }) {
  return (
    <>
      <aside
        className={`hidden lg:flex flex-col fixed left-0 top-16 bottom-0  border-neutral-200
           bg-white transition-all duration-300 ${
             sidebarOpen ? "w-56" : "w-0 overflow-hidden"
           }`}
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: sidebarOpen ? 0 : -200, opacity: sidebarOpen ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="flex-1 overflow-y-auto px-6 py-6"
        >
          <ul className="space-y-1 pt-20">
            {LINKS.map((label) => (
              <li
                key={label}
                className="pl-2 py-2 text-sm rounded-lg text-gray-800  hover:bg-neutral-100"
              >
                <a href="#" className="text-[15px]  hover:text-black">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </aside>

      <div className="lg:hidden">
        {sidebarOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/30 z-40"
              onClick={onClose}
              aria-hidden
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 top-16 bottom-0 w-3/4 bg-white border-r border-neutral-200 z-50"
            >
              <nav className="h-full overflow-y-auto px-6 py-6">
                <ul className="space-y-4">
                  {LINKS.map((label) => (
                    <li key={label}>
                      <a
                        onClick={onClose}
                        href="#"
                        className="block text-[15px] text-neutral-700 hover:text-black"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}
