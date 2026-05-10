import { motion } from "framer-motion";

export function Manifesto() {
  const words = ["CLARITY.", "STRATEGY.", "IMPACT."];

  return (
    <section id="manifesto" className="relative py-48 px-8 bg-background flex flex-col items-center justify-center min-h-[80vh] text-center" data-testid="section-manifesto">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />

      <div className="mb-16">
        {words.map((word, i) => (
          <div key={i} className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="font-display font-black text-6xl md:text-8xl lg:text-9xl text-white uppercase tracking-tight leading-[0.9]"
            >
              {word}
            </motion.h2>
          </div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-md mx-auto font-sans text-sm tracking-wide text-muted-foreground leading-relaxed"
      >
        Content systems built for clarity. Campaigns built for impact. Work built to last.
      </motion.p>
    </section>
  );
}
