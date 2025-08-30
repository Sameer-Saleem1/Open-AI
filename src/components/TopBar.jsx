import { FiSearch, FiSidebar } from "react-icons/fi";

export default function Topbar({ onToggleSidebar }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50  border-neutral-200 bg-white backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="text-[30px] font-semibold tracking-tight">OpenAI</div>

          <div
            className="sm-hidden text-xl ml-8 text-neutral-900 opacity-50 transition-opacity
           duration-300 ease-in-out hover:opacity-100 cursor-pointer"
          >
            <FiSidebar onClick={onToggleSidebar} />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-full hover:bg-neutral-100 hover:cursor-pointer"
            aria-label="Search"
          >
            <FiSearch className="text-[20px]" />
          </button>
          <button className=" h-9 rounded-full px-4 border border-neutral-300 hover:bg-neutral-100 text-[14px]">
            Log in
          </button>
        </div>
      </div>
    </header>
  );
}
