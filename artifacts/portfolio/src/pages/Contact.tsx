import { Header } from "@/components/Header";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 md:px-8 py-24 md:py-48">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-16">
            Contact
          </h1>
          
          <div className="flex flex-col gap-8 text-lg md:text-xl">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-b border-border pb-6">
              <span className="text-muted-foreground font-medium w-24">Email</span>
              <a href="mailto:your@email.com" className="text-foreground hover:text-primary transition-colors" data-testid="link-email">
                your@email.com
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-b border-border pb-6">
              <span className="text-muted-foreground font-medium w-24">LinkedIn</span>
              <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="text-foreground hover:text-primary transition-colors" data-testid="link-linkedin">
                linkedin.com/in/your-profile
              </a>
            </div>
            
            <div className="pt-8">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase"
                data-testid="btn-resume"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
