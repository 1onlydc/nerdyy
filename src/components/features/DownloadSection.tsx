import { Download, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function DownloadSection() {
  const { toast } = useToast();
  const [isDownloading, setIsDownloading] = useState(false);
  const cardAnimation = useScrollAnimation();

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      toast({
        title: "Download Started",
        description: "nerdyy.exe is downloading. Check your downloads folder.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section id="download" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Download Card */}
          <div 
            ref={cardAnimation.ref}
            className={`relative bg-gradient-to-br from-green-500/10 via-card to-green-400/10 border border-primary/30 rounded-2xl p-8 md:p-12 overflow-hidden glow-border transition-all duration-1000 ${cardAnimation.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle, rgba(0, 255, 0, 0.3) 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>

            <div className="relative z-10 text-center space-y-8">
              {/* Header */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  Ready to <span className="text-gradient">Dominate</span>?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Download nerdyy now and experience the most advanced Roblox external available.
                </p>
              </div>

              {/* Version Info */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 border border-border">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm">Version 2.1.0 - Updated Jan 14, 2026</span>
              </div>

              {/* Download Button */}
              <div>
                <Button
                  size="lg"
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="bg-gradient-to-r from-neon-green to-neon-lime hover:opacity-90 transition-opacity text-lg px-12 py-6 animate-glow text-black font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  {isDownloading ? "Preparing Download..." : "Download nerdyy.exe"}
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Windows 10/11 • 64-bit • 15.2 MB
                </p>
              </div>

              {/* Installation Steps */}
              <div className="grid md:grid-cols-3 gap-6 pt-8">
                <div className="text-left space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold mb-3">
                    1
                  </div>
                  <h3 className="font-semibold">Download</h3>
                  <p className="text-sm text-muted-foreground">
                    Click the button above to download nerdyy.exe
                  </p>
                </div>
                <div className="text-left space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold mb-3">
                    2
                  </div>
                  <h3 className="font-semibold">Extract & Run</h3>
                  <p className="text-sm text-muted-foreground">
                    Extract files and run as administrator
                  </p>
                </div>
                <div className="text-left space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold mb-3">
                    3
                  </div>
                  <h3 className="font-semibold">Inject & Play</h3>
                  <p className="text-sm text-muted-foreground">
                    Launch Roblox, inject, and dominate
                  </p>
                </div>
              </div>

              {/* Warning */}
              <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30 text-left">
                <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-yellow-500 mb-1">Important Notice</p>
                  <p className="text-muted-foreground">
                    Disable Windows Defender before running. Add nerdyy to exclusions to prevent deletion. Use at your own risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
