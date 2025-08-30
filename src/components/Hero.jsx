/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Hero({ children }) {
  return (
    <section className="h-105 md:h-130 flex items-start sm:items-center">
      <div className="w-full mx-auto max-w-5xl text-center pt-16 sm:pt-0">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-semibold tracking-tight"
        >
          What can I help with?
        </motion.h1>

        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}
