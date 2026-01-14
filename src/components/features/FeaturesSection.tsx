import { Eye, Target, Wind, MousePointer } from "lucide-react";
import espIcon from "@/assets/esp-icon.jpg";
import aimbotIcon from "@/assets/aimbot-icon.jpg";
import movementIcon from "@/assets/movement-icon.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: Eye,
    title: "ESP & Visuals",
    description: "See through walls with advanced player ESP, item ESP, and customizable visual overlays. Never miss a thing.",
    image: espIcon,
    color: "cyan",
    highlights: ["Player ESP", "Item ESP", "Distance Indicators", "Health Bars"]
  },
  {
    icon: Target,
    title: "Aimbot & Combat",
    description: "Precision targeting with smooth aimbot, auto-lock, and customizable FOV. Dominate every firefight.",
    image: aimbotIcon,
    color: "pink",
    highlights: ["Smooth Aimbot", "FOV Circle", "Target Lock", "Prediction"]
  },
  {
    icon: Wind,
    title: "Movement Mods",
    description: "Enhanced mobility with speed hacks, fly mode, teleportation, and no-clip. Move like never before.",
    image: movementIcon,
    color: "purple",
    highlights: ["Speed Boost", "Fly Mode", "Teleport", "No-Clip"]
  },
  {
    icon: MousePointer,
    title: "Silent Aim",
    description: "Undetectable silent aim that hits targets without moving your crosshair. Stay hidden, stay deadly.",
    image: null,
    color: "cyan",
    highlights: ["Invisible Aiming", "No Recoil", "Rapid Fire", "Auto Shoot"]
  }
];

const colorClasses = {
  cyan: "from-green-500/20 to-green-500/5 border-green-500/30",
  pink: "from-green-400/20 to-green-400/5 border-green-400/30",
  purple: "from-green-600/20 to-green-600/5 border-green-600/30"
};

const iconColorClasses = {
  cyan: "text-neon-green",
  pink: "text-neon-lime",
  purple: "text-neon-darkgreen"
};

export default function FeaturesSection() {
  const headerAnimation = useScrollAnimation();

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to dominate the game. Advanced features designed for serious players.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const animation = useScrollAnimation();
            return (
              <div
                key={index}
                ref={animation.ref}
                className={`group relative bg-gradient-to-br ${colorClasses[feature.color as keyof typeof colorClasses]} border rounded-xl p-8 hover:scale-[1.02] transition-all duration-700 ${animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Background Image */}
                {feature.image && (
                  <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <Icon className={`w-12 h-12 ${iconColorClasses[feature.color as keyof typeof iconColorClasses]}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-2">
                    {feature.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${iconColorClasses[feature.color as keyof typeof iconColorClasses]}`}></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
