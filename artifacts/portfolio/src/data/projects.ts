export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  context: string;
  objective: string;
  deliverables: string;
  designFocus: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "litigation-awareness-carousel",
    title: "Litigation Awareness Carousel",
    shortDescription: "A high-impact social carousel designed to communicate legal action with authority, urgency, and public awareness.",
    context: "A high-impact social carousel campaign created for a litigation-focused law firm, designed to communicate mass tort awareness with legal authority and emotional resonance.",
    objective: "Create a serious, readable carousel for a law-firm-style litigation campaign.",
    deliverables: "5-slide carousel, cover slide, quote slide, claim summary, accountability CTA.",
    designFocus: "Legal tone, hierarchy, emotional restraint, high contrast."
  },
  {
    id: "2",
    slug: "legal-tips-carousel",
    title: "Legal Tips Carousel",
    shortDescription: "A saveable educational carousel explaining what to do after a car accident.",
    context: "An educational carousel series built for attorney social media accounts, breaking down what clients should do immediately after a car accident.",
    objective: "Turn practical legal guidance into clear, mobile-first content.",
    deliverables: "5-slide carousel, step-by-step guidance, CTA.",
    designFocus: "Clarity, accessibility, readability, public education."
  },
  {
    id: "3",
    slug: "multi-market-localized-campaign",
    title: "Multi-Market Localized Campaign",
    shortDescription: "A regional content system showing how one campaign can be adapted across San Diego, Sacramento, and Denver.",
    context: "A scalable regional campaign system demonstrating how a single brand message can be localized for different markets with relevant visual and copy variations.",
    objective: "Demonstrate consistent branding with localized visual and copy variations.",
    deliverables: "3 regional social posts (San Diego, Sacramento, Denver).",
    designFocus: "Localization, scalable templates, brand consistency."
  },
  {
    id: "4",
    slug: "reel-covers-thumbnail-system",
    title: "Reel Covers & Thumbnail System",
    shortDescription: "A visual system for attorney-led short-form videos and social reels.",
    context: "A repeatable visual system designed for attorney-led short-form video content — cover frames that stop the scroll and communicate topic authority at a glance.",
    objective: "Create scroll-stopping reel covers that support legal education and attorney content.",
    deliverables: "4 reel covers and 1 thumbnail system.",
    designFocus: "Attention, readability, repeatable content structure."
  },
  {
    id: "5",
    slug: "attorney-authority-quote-system",
    title: "Attorney Authority Quote System",
    shortDescription: "A quote and headshot-based content system designed to build trust and credibility.",
    context: "A branded graphic system for turning attorney insights and quotes into polished, shareable social content that builds credibility and professional trust.",
    objective: "Support attorney thought leadership with clean, professional graphics.",
    deliverables: "Quote cards, attorney insight posts, talking-head promo layouts.",
    designFocus: "Trust, authority, simplicity, brand-safe design."
  }
];
