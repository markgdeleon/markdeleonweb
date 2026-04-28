import { Link, useLocation } from "wouter";

export function Header() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-sm font-medium tracking-widest uppercase hover:text-primary transition-colors"
          data-testid="link-logo"
        >
          Mark De Leon
        </Link>
        <nav className="flex items-center gap-6">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${location === '/' || location.startsWith('/work') ? 'text-foreground' : 'text-muted-foreground'}`}
            data-testid="link-nav-work"
          >
            Work
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${location === '/about' ? 'text-foreground' : 'text-muted-foreground'}`}
            data-testid="link-nav-about"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${location === '/contact' ? 'text-foreground' : 'text-muted-foreground'}`}
            data-testid="link-nav-contact"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
