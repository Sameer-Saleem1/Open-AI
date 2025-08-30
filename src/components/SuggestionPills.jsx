/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0 },
};

export default function SuggestionPills({ items = [], onPick }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      transition={{ staggerChildren: 0.06, delayChildren: 0.15 }}
      className=" mt-5 flex flex-wrap items-center justify-center gap-3 "
    >
      {items.map((pillQuery) => (
        <motion.button
          key={pillQuery}
          variants={variants}
          whileHover={{ scale: 1.02 }}
          className="px-4 h-10 rounded-full border border-neutral-200 bg-white shadow-md 
            text-[14px] text-neutral-500 hover:border-neutral-300 cursor-pointer"
          onClick={() => onPick?.(pillQuery)}
        >
          {pillQuery}
        </motion.button>
      ))}
    </motion.div>
  );
}
