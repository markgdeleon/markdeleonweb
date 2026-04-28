import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 md:px-8 py-24 md:py-32">
        <section className="mb-24 md:mb-32 max-w-4xl">
          <h1 className="font-display text-[clamp(2rem,5vw,4.5rem)] font-bold leading-tight tracking-tight mb-6">
            Social Media & Graphic Design
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            Content systems, social campaigns, and visual assets for clear, high-impact communication.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24">
          {projects.map((project) => (
            <ProjectCard key={project.slug} slug={project.slug} title={project.title} />
          ))}
        </section>
      </main>
    </div>
  );
}
