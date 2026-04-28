export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12 mt-32">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Matteo De Leon. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="mailto:your@email.com" className="hover:text-primary transition-colors" data-testid="link-footer-email">your@email.com</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors" data-testid="link-footer-linkedin">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
