import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => onComplete(), 300); // Small pause at 100%
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col justify-end p-8 bg-background"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="flex items-end justify-between w-full font-display mb-4">
        <span className="text-sm tracking-[0.2em] text-muted-foreground uppercase">Loading</span>
        <span className="text-6xl font-bold text-white leading-none">{progress}%</span>
      </div>
      <div className="h-1 w-full bg-muted/30 overflow-hidden">
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
}
