import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import App from "../App";

export default function LoadingPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const loadingBarVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
          <h1 className="text-2xl text-gray-800 dark:text-white mb-5">
            Hi, Welcome to my page
          </h1>
          <div className="w-full max-w-lg h-2 bg-gray-300 rounded-md overflow-hidden">
            <motion.div
              className="h-full bg-black"
              variants={loadingBarVariants}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      ) : (
        <App />
      )}
    </>
  );
}
