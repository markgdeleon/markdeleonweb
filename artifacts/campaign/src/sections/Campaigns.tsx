import { motion } from "framer-motion";
import portraitAsset from "@assets/Screenshot_2026-05-10_at_4.30.08_PM_1778456181999.png";

const campaigns = [
  { id: "01", title: "LITIGATION IMPACT", subtitle: "Campaign Direction / Social Systems" },
  { id: "02", title: "MARKET ADAPTATION", subtitle: "Regional Campaign / Localization" },
  { id: "03", title: "AUTHORITY SERIES", subtitle: "Content System / Brand Voice" },
];

export function Campaigns() {
  return (
    <section id="campaigns" className="py-32 px-8 min-h-screen bg-[#080808]" data-testid="section-campaigns">
      <div className="max-w-7xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-16"
        >
          Selected Work — 2024
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign, i) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover="hover"
              className="relative group bg-[#111] p-12 aspect-[4/5] flex flex-col justify-end overflow-hidden border border-white/5"
            >
              {/* Hover Line */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-1 bg-primary origin-bottom"
                variants={{
                  hover: { scaleY: 1, opacity: 1 },
                  initial: { scaleY: 0, opacity: 0 }
                }}
                initial="initial"
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              {/* Background Number */}
              <div className="absolute -top-12 -right-12 font-display text-[12rem] font-bold text-outline opacity-20 transition-transform duration-700 group-hover:scale-110">
                {campaign.id}
              </div>

              {/* Optional image for the second card just to use the asset */}
              {i === 1 && (
                <div className="absolute inset-0 opacity-20 mix-blend-luminosity grayscale group-hover:opacity-40 transition-opacity duration-700">
                  <img src={portraitAsset} alt="" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="relative z-10">
                <h3 className="font-display text-4xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-primary transition-colors duration-500">{campaign.title}</h3>
                <p className="font-sans text-xs tracking-widest text-muted-foreground uppercase">{campaign.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
