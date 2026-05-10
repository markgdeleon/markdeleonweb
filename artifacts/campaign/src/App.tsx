import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Cursor } from "@/components/Cursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Hero } from "@/sections/Hero";
import { Campaigns } from "@/sections/Campaigns";
import { Athletes } from "@/sections/Athletes";
import { Gallery } from "@/sections/Gallery";
import { Manifesto } from "@/sections/Manifesto";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 px-8 py-6 flex justify-between items-center transition-colors duration-500 ${scrolled ? "bg-background/90 backdrop-blur-sm border-b border-white/5" : "bg-transparent"}`}>
      <span className="font-display text-xs tracking-[0.2em] font-bold text-white">MARK DE LEON</span>
      <div className="flex gap-6">
        <a href="#campaigns" className="font-sans text-[10px] tracking-[0.2em] text-white/70 hover:text-white uppercase">Work</a>
        <a href="#contact" className="font-sans text-[10px] tracking-[0.2em] text-white/70 hover:text-white uppercase">Contact</a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer id="contact" className="py-12 bg-background border-t border-white/5 text-center">
      <p className="font-sans text-[10px] tracking-[0.2em] text-white/30 uppercase">© 2024 MARK DE LEON</p>
    </footer>
  );
}

function LandingPage() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="w-full bg-background min-h-screen">
      <div className="noise-overlay" />
      <Cursor />
      
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navigation />
          <Hero />
          <Campaigns />
          <Athletes />
          <Gallery />
          <Manifesto />
          <Footer />
        </>
      )}
    </main>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Switch>
          <Route path="/" component={LandingPage} />
          {/* Catch all fallback */}
          <Route component={LandingPage} />
        </Switch>
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
