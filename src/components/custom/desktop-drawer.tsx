"use client";

import { FC, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface DesktopDrawerProps {
  isOpen: boolean;
  children: ReactNode;
  className?: string;
}

const DesktopDrawer: FC<DesktopDrawerProps> = ({
  isOpen,
  children,
  className,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: "30%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "30%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "absolute bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#313131] shadow-lg h-full rounded-t-lg border-gray-300",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DesktopDrawer;
