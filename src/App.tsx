import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/features/HeroSection";
import FeaturesSection from "@/components/features/FeaturesSection";
import ShowcaseSection from "@/components/features/ShowcaseSection";
import DownloadSection from "@/components/features/DownloadSection";
import FAQSection from "@/components/features/FAQSection";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <DownloadSection />
        <FAQSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
