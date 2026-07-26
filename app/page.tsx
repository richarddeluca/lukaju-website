import { Header } from "@/components/Header";
import { HeroStudio } from "@/components/sections/HeroStudio";
import { GameShowcase } from "@/components/sections/GameShowcase";
import { PatreonSupport } from "@/components/sections/PatreonSupport";
import { AboutDev } from "@/components/sections/AboutDev";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090B0E] text-[#F3F4F6] selection:bg-[#C1006D] selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <HeroStudio />

        {/* Flagship Game Showcase: texting-her */}
        <GameShowcase />

        {/* Studio Sustainability & Patreon Support */}
        <PatreonSupport />

        {/* Solo Dev & Artist Credits */}
        <AboutDev />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
