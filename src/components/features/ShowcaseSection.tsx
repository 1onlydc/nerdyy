import { Code2, Gauge, Lock, Palette } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const showcaseItems = [
  {
    icon: Gauge,
    title: "High Performance",
    description: "Optimized code ensures zero FPS drops and smooth gameplay experience"
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Advanced encryption and anti-detection keep you safe from bans"
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Adjust every setting to match your playstyle with our intuitive UI"
  },
  {
    icon: Code2,
    title: "Regular Updates",
    description: "Frequent patches and feature additions to stay ahead of the game"
  }
];

export default function ShowcaseSection() {
  const headerAnimation = useScrollAnimation();

  return (
    <section id="showcase" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-gradient">nerdyy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Built by gamers, for gamers. Experience the difference.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon;
            const animation = useScrollAnimation();
            return (
              <div
                key={index}
                ref={animation.ref}
                className={`bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-700 group ${animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Video Showcase */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative aspect-video bg-gradient-to-br from-green-500/20 to-green-400/20 rounded-xl border border-primary/30 overflow-hidden animate-fade-in-up">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1"></div>
                </div>
                <p className="text-muted-foreground">Demo video coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
