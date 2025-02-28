import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-purple-950 to-purple-800 text-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, y: -100 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col items-center space-y-4"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Animated Loading Spinner */}
        <motion.div
          className="w-16 h-16 border-4 border-t-4 border-white rounded-full animate-spin"
          style={{
            borderTopColor: "#ff63e2", // Customize the spinner color
          }}
        />

        {/* Text with some bounce effect */}
        <motion.div
          className="text-4xl font-extrabold text-center"
          initial={{ y: 10, opacity: 0 }}
          animate={{
            opacity: [0, 1],
            y: [10, 0],
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
