import { motion } from "framer-motion";
import { DistortionCanvas } from "@/components/DistortionCanvas";
import nikeAthlete from "@assets/Nike_template_1778456338289.png";

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden" data-testid="section-hero">
      <DistortionCanvas imageSrc={nikeAthlete} />
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_100%)]" />

      {/* Top Left */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute top-8 left-8"
      >
        <p className="text-[10px] tracking-[0.25em] text-white/70 uppercase">Human Performance</p>
      </motion.div>

      {/* Top Right Nav */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.8 }}
        className="absolute top-8 right-8 flex gap-6"
      >
        <a href="#campaigns" className="text-[10px] tracking-[0.2em] text-white hover:text-primary transition-colors uppercase">Campaigns</a>
        <a href="#athletes" className="text-[10px] tracking-[0.2em] text-white hover:text-primary transition-colors uppercase">Athletes</a>
        <a href="#manifesto" className="text-[10px] tracking-[0.2em] text-white hover:text-primary transition-colors uppercase">Manifesto</a>
      </motion.div>

      {/* Main Typography */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 1.2, ease: "easeOut" }}
        className="absolute bottom-24 left-8 pointer-events-none mix-blend-overlay"
      >
        <h1 className="font-display font-black text-[clamp(6rem,18vw,24rem)] leading-[0.8] text-white m-0 tracking-tight">
          BECOME
        </h1>
      </motion.div>

      {/* Bottom Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.7, duration: 0.8 }}
        className="absolute bottom-12 left-10 pointer-events-none"
      >
        <p className="font-display text-4xl tracking-widest text-primary font-bold">MOTION</p>
      </motion.div>

      {/* Bottom Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute bottom-12 right-8 text-right pointer-events-none flex flex-col gap-1"
      >
        <p className="text-[10px] tracking-[0.3em] text-white/50">NOISE /</p>
        <p className="text-[10px] tracking-[0.3em] text-white/50">HUMAN</p>
      </motion.div>

      {/* Accent Line */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "40vh" }}
        transition={{ delay: 3, duration: 1.5, ease: "circOut" }}
        className="absolute right-[20%] top-[30%] w-[1px] bg-primary/80 z-10"
      />
    </section>
  );
}
