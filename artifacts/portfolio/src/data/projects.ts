export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  slideCount: number;
}

export const projects: Project[] = [
  {
    slug: "litigation-awareness-carousel",
    title: "Litigation Awareness Carousel",
    subtitle: "A legal awareness carousel designed for clarity, urgency, and authority.",
    slideCount: 5,
  },
  {
    slug: "legal-tips-carousel",
    title: "Legal Tips Carousel",
    subtitle: "A saveable educational carousel for post-accident guidance.",
    slideCount: 5,
  },
  {
    slug: "multi-market-localized-campaign",
    title: "Multi-Market Localized Campaign",
    subtitle: "One campaign system adapted across multiple regional markets.",
    slideCount: 5,
  },
  {
    slug: "reel-covers-thumbnail-system",
    title: "Reel Covers & Thumbnail System",
    subtitle: "Short-form legal content covers built for fast readability.",
    slideCount: 5,
  },
  {
    slug: "attorney-authority-quote-system",
    title: "Attorney Authority Quote System",
    subtitle: "Attorney-focused graphics designed to build trust and credibility.",
    slideCount: 5,
  },
];
