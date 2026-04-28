import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";

function PlaceholderBox({ label, aspectRatio = "aspect-[4/3]" }: { label: string, aspectRatio?: string }) {
  return (
    <div className={`w-full ${aspectRatio} bg-muted/20 border border-dashed border-border/60 flex items-center justify-center p-6 text-center group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors`}>
      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 md:px-8 py-32 md:py-48 flex flex-col items-start max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6" data-testid="text-hero-name">
            Matteo De Leon
          </h1>
          <h2 className="text-xl md:text-2xl text-primary font-medium mb-8 uppercase tracking-wide" data-testid="text-hero-title">
            Social Media & Graphic Design Specialist
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-12" data-testid="text-hero-tagline">
            Social media design, carousel systems, localized campaign assets, and attorney-focused content for high-stakes service brands.
          </p>
          <Button asChild size="lg" className="rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground text-lg px-10 h-14" data-testid="button-view-work">
            <a href="#work">View Work</a>
          </Button>
        </section>

        {/* Work Section */}
        <section id="work" className="container mx-auto px-4 md:px-8 py-24 scroll-mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {projects.map((project, index) => (
              <div key={project.id} className={`group flex flex-col gap-6 ${index === 0 ? 'md:col-span-2' : ''}`} data-testid={`card-project-${project.id}`}>
                <Link href={`/projects/${project.slug}`} className="block overflow-hidden" data-testid={`link-project-image-${project.id}`}>
                  <PlaceholderBox label="Image placeholder" aspectRatio={index === 0 ? "aspect-[16/9]" : "aspect-[4/3]"} />
                </Link>
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.shortDescription}</p>
                  <Button asChild variant="link" className="p-0 h-auto justify-start text-primary hover:text-foreground font-semibold text-lg uppercase tracking-wide mt-2" data-testid={`button-view-project-${project.id}`}>
                    <Link href={`/projects/${project.slug}`}>View Project →</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="container mx-auto px-4 md:px-8 py-32 border-t border-border/50 scroll-mt-20">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-8">About</h2>
            <p className="text-2xl md:text-4xl font-medium leading-relaxed text-foreground" data-testid="text-about-content">
              I create social-first graphics that balance clarity, strategy, and visual consistency. My work focuses on content systems that can scale across campaigns, markets, and platforms while still feeling human and easy to understand.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="container mx-auto px-4 md:px-8 py-32 bg-foreground text-background scroll-mt-20">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-16">Contact</h2>
            <div className="flex flex-col gap-8 text-2xl md:text-4xl font-medium">
              <a href="mailto:your@email.com" className="hover:text-primary transition-colors border-b border-border/20 pb-8" data-testid="link-contact-email">your@email.com</a>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors border-b border-border/20 pb-8" data-testid="link-contact-linkedin">linkedin.com/in/your-profile</a>
              <a href="#" className="text-primary hover:text-white transition-colors pb-8" data-testid="button-download-resume">Download Resume</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
