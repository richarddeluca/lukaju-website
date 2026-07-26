import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Heart, ExternalLink, Sparkles, Terminal, Smartphone, Flame } from "lucide-react";

export const HeroStudio: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden cyber-grid bg-[#0A0B10]">
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-[#9E0038]/20 via-transparent to-transparent blur-3xl pointer-events-none opacity-70"></div>

      <div className="relative max-w-6xl mx-auto text-center space-y-10 z-10 w-full">
        {/* Studio Status Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#131620]/90 border border-white/10 text-xs font-mono text-[#9CA3AF] shadow-xl backdrop-blur-md">
          <Badge variant="magenta">Sexting Her</Badge>
          <span className="w-2 h-2 rounded-full bg-[#9E0038] animate-ping"></span>
          <span className="text-white">Active Godot Engine Development</span>
        </div>

        {/* Master Heading with Zen Old Mincho Serif Title */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serifTitle font-bold text-white tracking-tight leading-[1.05]">
            Sexting Her
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-[#9CA3AF] font-sans leading-relaxed">
            An entire story told through messages, audios, choices, and branching routes. Deep social simulation created by <span className="text-white font-semibold">Lukajú</span>.
          </p>
        </div>

        {/* Recreation of the Patreon Banner Persona Showcase */}
        <div className="py-4 my-4 max-w-5xl mx-auto relative rounded-2xl bg-[#0D0F17] border border-[#9E0038]/40 p-4 sm:p-6 shadow-[0_0_40px_rgba(158,0,56,0.25)]">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 items-center">
            {/* Persona Card 1 */}
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 bg-[#131620] group hover:border-[#9E0038] transition-all">
              <Image
                src="/game/jessica_0001.webp"
                alt="Persona Jessica"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 text-left">
                <span className="text-[10px] font-mono text-[#9E0038] font-bold block">
                  Jessica
                </span>
                <span className="text-[9px] text-[#9CA3AF]">Secret Route</span>
              </div>
            </div>

            {/* Persona Card 2 */}
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 bg-[#131620] group hover:border-[#2563EB] transition-all">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] to-[#1E293B] flex items-center justify-center p-3">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#2563EB]/20 border border-[#2563EB] flex items-center justify-center mx-auto text-[#38BDF8]">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white block">Chloe & Ashley</span>
                  <span className="text-[10px] font-mono text-[#38BDF8]">Roommates</span>
                </div>
              </div>
            </div>

            {/* Persona Card 3 (Center Highlight) */}
            <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden border-2 border-[#9E0038] bg-[#131620] group shadow-[0_0_20px_rgba(158,0,56,0.4)] col-span-2 sm:col-span-1">
              <Image
                src="/game/bg_yoruichi.webp"
                alt="Main Character Artwork"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <Badge variant="magenta" className="text-[9px]">FLAGSHIP ROUTE</Badge>
                <h4 className="text-sm font-serifTitle font-bold text-white mt-1">
                  Sexting Her
                </h4>
              </div>
            </div>

            {/* Persona Card 4 */}
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 bg-[#131620] group hover:border-[#9E0038] transition-all">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#131620] to-[#1C222E] flex items-center justify-center p-3">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#9E0038]/20 border border-[#9E0038] flex items-center justify-center mx-auto text-[#E11D48]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white block">Isabelle</span>
                  <span className="text-[10px] font-mono text-[#9E0038]">Special Girl</span>
                </div>
              </div>
            </div>

            {/* Persona Card 5 */}
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-white/10 bg-[#131620] group hover:border-white/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F172A] to-[#131620] flex items-center justify-center p-3">
                <div className="text-center space-y-1">
                  <Flame className="w-6 h-6 text-[#9E0038] mx-auto" />
                  <span className="text-xs font-bold text-white block">Megan</span>
                  <span className="text-[10px] font-mono text-[#9CA3AF]">Trophy Docs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Twin Funnel CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            href="#patreon"
            variant="patreon"
            size="lg"
            className="text-lg px-8 py-4"
            icon={<Heart className="w-5 h-5 fill-white" />}
          >
            Support on Patreon
          </Button>

          <Button
            href="https://lukaju.itch.io"
            external
            variant="itch"
            size="lg"
            className="text-lg px-8 py-4"
            icon={<ExternalLink className="w-5 h-5 text-[#2563EB]" />}
          >
            Play on Itch.io
          </Button>
        </div>
      </div>
    </section>
  );
};
