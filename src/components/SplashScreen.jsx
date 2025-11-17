import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SplashScreen = ({ visible }) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900"
        >
          <motion.img
            src="/images/mm-logo.png"
            alt="MM"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="h-28 w-auto"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};