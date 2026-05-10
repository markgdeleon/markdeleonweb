import { motion } from "framer-motion";

const reels = ["REEL 01", "REEL 02", "REEL 03", "REEL 04"];

export function Gallery() {
  return (
    <section className="py-32 bg-[#050505] overflow-hidden" data-testid="section-gallery">
      <div className="px-8 mb-12 max-w-7xl mx-auto">
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">Motion Gallery</p>
      </div>

      <div className="flex gap-8 px-8 overflow-x-auto snap-x snap-mandatory pb-8 hide-scrollbar">
        {reels.map((reel, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="snap-center shrink-0 w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw] aspect-[9/16] bg-[#111] border border-white/5 flex items-center justify-center relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/5" />
            <div className="absolute inset-0 border border-transparent transition-colors duration-500 group-hover:border-primary" />
            
            <p className="font-sans text-[10px] tracking-[0.3em] text-white/40 group-hover:text-primary transition-colors duration-500 relative z-10">
              {reel}
            </p>
          </motion.div>
        ))}
      </div>
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
