import { useRoute, Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { projects } from "@/data/projects";
import NotFound from "@/pages/not-found";

function ContentBox({ label, aspectRatio = "aspect-[16/9]" }: { label: string, aspectRatio?: string }) {
  return (
    <div className={`w-full ${aspectRatio} bg-muted/10 border border-dashed border-border flex items-center justify-center p-8 text-center`}>
      <span className="text-sm font-medium text-muted-foreground/70 uppercase tracking-widest">{label}</span>
    </div>
  );
}

export default function ProjectDetail() {
  const [match, params] = useRoute("/projects/:slug");

  if (!match || !params?.slug) {
    return <NotFound />;
  }

  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <article className="container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-5xl">
          <Link href="/" className="inline-flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors mb-16 uppercase tracking-widest" data-testid="link-back">
            ← Back to Work
          </Link>

          <header className="mb-20">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8" data-testid="text-project-title">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl" data-testid="text-project-context">
              {project.context}
            </p>
          </header>

          <div className="mb-24" data-testid="container-hero-image">
            <ContentBox label="Presentation board — upload image here" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-32">
            <div className="md:col-span-2 flex flex-col gap-12">
              <section data-testid="section-carousel-preview">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Carousel / Social Preview</h3>
                <ContentBox label="Upload video here (Canva MP4 export)" aspectRatio="aspect-square md:aspect-[4/3]" />
              </section>

              <section data-testid="section-individual-assets">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">Individual Assets</h3>
                <div className="flex flex-col gap-8">
                  {[1, 2, 3, 4, 5].map(num => (
                    <ContentBox key={num} label={`Upload image here — Slide ${num}`} aspectRatio="aspect-[4/5]" />
                  ))}
                </div>
              </section>
            </div>

            <aside className="md:col-span-1">
              <div className="sticky top-32 flex flex-col gap-10 bg-card p-8 border border-border">
                <div data-testid="project-meta-objective">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Objective</h4>
                  <p className="text-foreground leading-relaxed">{project.objective}</p>
                </div>
                <div data-testid="project-meta-deliverables">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Deliverables</h4>
                  <p className="text-foreground leading-relaxed">{project.deliverables}</p>
                </div>
                <div data-testid="project-meta-design-focus">
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-3">Design Focus</h4>
                  <p className="text-foreground leading-relaxed">{project.designFocus}</p>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
