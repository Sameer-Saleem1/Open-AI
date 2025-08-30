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

export default function Sidebar({ mobile, onClose, sidebarOpen }) {
  return (
    <>
      <aside
        className="hidden lg:block fixed left-0 top-16 bottom-0 w-54 mt-30  
       border-neutral-200 bg-white"
      >
        {sidebarOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: open ? 0 : "-100%" }}
            transition={{
              type: "tween",
              duration: 0.4,
              ease: "easeInOut",
            }}
          >
            <nav className="h-full overflow-y-auto px-6 py-6">
              <ul className="space-y-2 ">
                {LINKS.map((label) => (
                  <li
                    key={label}
                    className="pl-4 py-1 rounded-lg hover:bg-neutral-100"
                  >
                    <a
                      href="#"
                      className=" text-black text-4xl md:max-xl:font-medium text-[15px]"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </aside>

      {mobile && (
        <div className="lg:hidden ">
          <div
            className="absolute hidden bg-black/30"
            onClick={onClose}
            aria-hidden
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: open ? 0 : "-100%" }}
            transition={{
              type: "tween",
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-16 bottom-0 w-full bg-white  border-neutral-200"
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
        </div>
      )}
    </>
  );
}
