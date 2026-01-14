import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="https://cdn-ai.onspace.ai/onspace/files/4QAJcdRzSEbPGcvvsTT6ha/ff385523ea0750fc770f0368569ddb41.jpg" alt="nerdyy" className="w-8 h-8" />
            <span className="text-2xl font-bold text-gradient">nerdyy</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("showcase")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Showcase
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Button */}
          <Button
            onClick={() => scrollToSection("download")}
            className="bg-gradient-to-r from-neon-green to-neon-lime hover:opacity-90 transition-opacity text-black font-semibold"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>
    </header>
  );
}
