import { motion } from "framer-motion";

const roles = [
  { id: "01", name: "CAMPAIGN DIRECTOR" },
  { id: "02", name: "CONTENT SYSTEMS" },
  { id: "03", name: "BRAND VOICE" },
];

export function Athletes() {
  return (
    <section id="athletes" className="py-32 px-8 bg-background overflow-hidden" data-testid="section-athletes">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display font-black text-[clamp(4rem,10vw,8rem)] text-white mb-24 uppercase leading-none tracking-tight"
        >
          THE WORK
        </motion.h2>

        <div className="flex flex-col border-t border-white/10">
          {roles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              className="group relative flex items-center justify-between py-12 border-b border-white/10 cursor-pointer"
            >
              {/* Hover Line */}
              <div className="absolute bottom-[-1px] left-0 h-[2px] bg-primary w-0 transition-all duration-500 group-hover:w-full z-10" />

              <div className="font-display text-5xl font-bold text-outline opacity-30 transition-opacity duration-300 group-hover:opacity-100">
                {role.id}
              </div>

              <motion.div 
                className="font-display text-4xl md:text-6xl font-bold text-white uppercase tracking-wide absolute left-[20%] md:left-[30%]"
                whileHover={{ x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {role.name}
              </motion.div>

              <div className="w-12 h-[2px] bg-primary/40 transition-all duration-500 group-hover:w-24 group-hover:bg-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
