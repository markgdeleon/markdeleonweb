import { Link } from "wouter";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border/50">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold tracking-tight hover:text-primary transition-colors" data-testid="link-home">
          Matteo De Leon
        </Link>
        <nav className="flex items-center gap-8 text-sm font-medium">
          <a href="#work" className="hover:text-primary transition-colors" data-testid="link-nav-work">Work</a>
          <a href="#about" className="hover:text-primary transition-colors" data-testid="link-nav-about">About</a>
          <a href="#contact" className="hover:text-primary transition-colors" data-testid="link-nav-contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
