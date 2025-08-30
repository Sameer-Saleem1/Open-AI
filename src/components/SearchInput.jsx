/* eslint-disable no-unused-vars */
import { useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SearchInput({
  value,
  onChange,
  onSubmit,
  placeholder,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`mx-auto max-w-4xl rounded-2xl border bg-white shadow-sm
                  ${focused ? "ring-2 ring-neutral-100" : "border-neutral-200"}
                 `}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.();
        }}
        className="flex items-center gap-3 px-5"
      >
        <input
          className="h-[100px] flex-1 bg-transparent outline-none 
          text-[16px] placeholder:text-neutral-500 pb-10"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        <button
          type="submit"
          className="bg-neutral-100 group my-2 w-10 h-10 rounded-full border border-none flex items-center
           justify-center hover:bg-neutral-300 hover:text-white transition cursor-pointer"
          aria-label="Send"
        >
          <FiArrowUp className="text-[18px] text-neutral-500 " />
        </button>
      </form>
    </motion.div>
  );
}
