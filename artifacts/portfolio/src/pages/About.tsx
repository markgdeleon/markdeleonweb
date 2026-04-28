import { Header } from "@/components/Header";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 md:px-8 py-24 md:py-48 flex justify-start">
        <div className="max-w-[65ch]">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-12">
            About
          </h1>
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Hi, I'm Mark. I design social-first graphics, content systems, and campaign assets that help brands communicate clearly and consistently.
          </p>
        </div>
      </main>
    </div>
  );
}
