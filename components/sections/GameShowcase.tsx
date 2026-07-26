import React from "react";
import { PhoneMockup } from "../ui/PhoneMockup";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import {
  Smartphone,
  RotateCcw,
  GitBranch,
  Monitor,
  Download,
  Flame,
  MessageSquare,
} from "lucide-react";

export const GameShowcase: React.FC = () => {
  return (
    <section id="game" className="py-24 px-4 sm:px-6 relative bg-[#0A0B10] border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="flex flex-col items-start gap-2">
          <Badge variant="magenta">THE GAME</Badge>
          <h2 className="text-4xl sm:text-5xl font-serifTitle font-bold text-white tracking-tight">
            Sexting Her
          </h2>
          <p className="text-sm font-mono text-[#9CA3AF]">
            Listed as <span className="text-white font-semibold">texting-her</span> in project files • Powered by Godot Engine
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Game Concept & Features */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#131620] border border-white/10 text-xs font-mono text-[#9E0038]">
                <Flame className="w-3.5 h-3.5" /> Social Simulation & Diegetic Interface
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white leading-snug">
                "An entire story told through messages, audios, and choices."
              </h3>

              <p className="text-base text-[#9CA3AF] leading-relaxed">
                Step inside the smartphone interface. Exchange encrypted text messages, voice notes, and photos with intriguing personas like Chloe, Ashley, Isabelle, Megan, and Jessica. Every choice shapes the narrative tree.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#131620] border border-white/10 hover:border-[#9E0038]/50 transition-all space-y-1">
                <div className="flex items-center gap-2 font-heading font-semibold text-white">
                  <MessageSquare className="w-4 h-4 text-[#9E0038]" />
                  <span>Diegetic Chat OS</span>
                </div>
                <p className="text-sm text-[#9CA3AF]">
                  Authentic smartphone UI with voice note playback, custom app icons (Messages, Notes, Gallery, Routes), and realistic response bubbles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#131620] border border-white/10 hover:border-[#2563EB]/50 transition-all space-y-1">
                <div className="flex items-center gap-2 font-heading font-semibold text-white">
                  <GitBranch className="w-4 h-4 text-[#2563EB]" />
                  <span>GraphNode Narrative Tree</span>
                </div>
                <p className="text-sm text-[#9CA3AF]">
                  Visualize every unlocked route node in real-time. Trace decision branches and unlock 100% completion across all personas.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#131620] border border-white/10 hover:border-[#9E0038]/50 transition-all space-y-1">
                <div className="flex items-center gap-2 font-heading font-semibold text-white">
                  <RotateCcw className="w-4 h-4 text-[#9E0038]" />
                  <span>Rewind & Time Branching</span>
                </div>
                <p className="text-sm text-[#9CA3AF]">
                  Go back to key dialogue nodes to explore alternate responses and discover secret CG artworks and storyline endings.
                </p>
              </div>
            </div>

            {/* Platform Links */}
            <div className="pt-4 space-y-3">
              <p className="text-xs font-mono text-[#9CA3AF] uppercase tracking-wider">
                Play & Download (Itch.io)
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  href="https://lukaju.itch.io"
                  external
                  variant="itch"
                  size="md"
                  icon={<Monitor className="w-4 h-4 text-[#2563EB]" />}
                >
                  Play in Browser
                </Button>

                <Button
                  href="https://lukaju.itch.io"
                  external
                  variant="secondary"
                  size="md"
                  icon={<Download className="w-4 h-4 text-white" />}
                >
                  Download Windows Build
                </Button>

                <Button
                  href="https://lukaju.itch.io"
                  external
                  variant="secondary"
                  size="md"
                  icon={<Smartphone className="w-4 h-4 text-[#9E0038]" />}
                >
                  Download Android APK
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Phone Mockup with Game UI Screens */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full">
              <div className="absolute -inset-4 rounded-[50px] bg-gradient-to-b from-[#9E0038]/25 via-[#2563EB]/15 to-transparent blur-2xl pointer-events-none"></div>
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
