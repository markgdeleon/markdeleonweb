import { useRoute, Link } from "wouter";
import { Header } from "@/components/Header";
import { MediaPlaceholder } from "@/components/MediaPlaceholder";
import { projects } from "@/data/projects";
import NotFound from "@/pages/not-found";

export default function ProjectDetail() {
  const [match, params] = useRoute("/work/:slug");

  if (!match || !params?.slug) {
    return <NotFound />;
  }

  const project = projects.find(p => p.slug === params.slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 md:px-8 py-16 md:py-24 max-w-5xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-16"
          data-testid="link-back-home"
        >
          &larr; Work
        </Link>

        <header className="mb-16">
          <h1 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight tracking-tight mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            {project.subtitle}
          </p>
        </header>

        <div className="mb-24">
          <MediaPlaceholder label="[ Cover Board ]" aspectRatio="aspect-[16/9]" />
        </div>

        <section className="mb-24">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
            Carousel Preview
          </h2>
          <MediaPlaceholder label="[ Upload MP4 ]" aspectRatio="aspect-[16/9]" dark />
        </section>

        <section>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground mb-8">
            Assets
          </h2>
          <div className="flex flex-col gap-12">
            {Array.from({ length: project.slideCount }).map((_, index) => (
              <MediaPlaceholder 
                key={index} 
                label={`[ Slide ${index + 1} ]`} 
                aspectRatio="aspect-[4/3]" 
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
