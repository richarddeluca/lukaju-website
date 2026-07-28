import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { ExternalLink } from "lucide-react";

export const HeroStudio: React.FC = () => {
  return (
    <section className="pt-28 pb-16 px-4 sm:px-6 bg-[#0A0B10]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Rating Notice Badge */}
        <div>
          <span className="inline-block px-3 py-1 text-xs font-mono text-[#F43F5E] bg-[#131620] border border-[#F43F5E]/40 rounded-full font-semibold">
            Adults Only (18+)
          </span>
        </div>

        {/* Official Game Banner */}
        <div className="relative w-full aspect-[4/1] max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/15 shadow-md">
          <Image
            src="/game/banner_sexting_her.png"
            alt="Sexting Her Official Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Title & Description */}
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl font-serifTitle font-bold text-white tracking-tight">
            Sexting Her
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#E5E7EB] font-sans leading-relaxed">
            An erotic visual novel told through steamy phone messages, developed in Godot Engine by <strong className="text-white font-semibold">Lukajú</strong>.
          </p>
        </div>

        {/* Action Button */}
        <div className="flex justify-center pt-2">
          <Button
            href="https://lukaju.itch.io/sexting-her"
            external
            variant="itch"
            size="lg"
            icon={<ExternalLink className="w-4 h-4 text-[#D1D5DB]" />}
          >
            Play on Itch.io
          </Button>
        </div>
      </div>
    </section>
  );
};
