import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 text-white">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.4, ease: 'linear' }}
        className="h-16 w-16 rounded-full border-4 border-slate-700 border-t-sky-400"
      />
    </div>
  );
}
