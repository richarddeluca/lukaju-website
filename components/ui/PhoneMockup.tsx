"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Wifi,
  Battery,
  ArrowLeft,
  Phone,
  MoreVertical,
  Sliders,
  CheckCheck,
  RotateCcw,
  Sparkles,
  GitCommit,
  User,
  Heart,
  Volume2,
  Lock,
  Globe,
  Settings,
  MessageSquare,
  Users,
  Compass,
} from "lucide-react";

export const PhoneMockup: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<"home" | "chat" | "routes" | "credits">("chat");
  const [chatPersona, setChatPersona] = useState<"chloe" | "isabelle">("chloe");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] rounded-[42px] border-[10px] border-[#1C222E] bg-[#0A0B10] shadow-[0_0_50px_rgba(158,0,56,0.35)] overflow-hidden font-sans select-none">
      {/* Phone Camera Notch */}
      <div className="absolute top-0 inset-x-0 h-6 bg-[#1C222E] z-30 flex items-center justify-center rounded-b-xl">
        <div className="w-20 h-3.5 bg-[#0A0B10] rounded-full flex items-center justify-end px-2 gap-1.5">
          <div className="w-2 h-2 rounded-full bg-blue-900/80"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-red-900/80"></div>
        </div>
      </div>

      {/* Top Status Bar */}
      <div className="pt-7 px-5 pb-2 bg-[#0D0F17] text-[#9CA3AF] text-xs flex justify-between items-center z-20 border-b border-white/5">
        <span className="font-mono text-white text-[11px]">23:42</span>
        <div className="flex items-center gap-1.5 text-[10px]">
          <Wifi className="w-3 h-3 text-[#9E0038]" />
          <span className="font-mono text-[10px] text-white">Godot OS</span>
          <Battery className="w-3.5 h-3.5 text-[#9CA3AF]" />
        </div>
      </div>

      {/* Phone Screen Switcher Tabs (Diegetic Interface Navigation) */}
      <div className="px-2 py-1.5 bg-[#131620] border-b border-white/10 flex justify-around text-[10px] font-mono text-[#9CA3AF]">
        <button
          onClick={() => setActiveScreen("home")}
          className={`px-2 py-1 rounded transition-all ${
            activeScreen === "home" ? "bg-[#9E0038] text-white font-bold" : "hover:text-white"
          }`}
        >
          OS Home
        </button>
        <button
          onClick={() => setActiveScreen("chat")}
          className={`px-2 py-1 rounded transition-all ${
            activeScreen === "chat" ? "bg-[#9E0038] text-white font-bold" : "hover:text-white"
          }`}
        >
          Chat UI
        </button>
        <button
          onClick={() => setActiveScreen("routes")}
          className={`px-2 py-1 rounded transition-all ${
            activeScreen === "routes" ? "bg-[#9E0038] text-white font-bold" : "hover:text-white"
          }`}
        >
          Routes Graph
        </button>
        <button
          onClick={() => setActiveScreen("credits")}
          className={`px-2 py-1 rounded transition-all ${
            activeScreen === "credits" ? "bg-[#9E0038] text-white font-bold" : "hover:text-white"
          }`}
        >
          Credits
        </button>
      </div>

      {/* SCREEN 1: SMARTPHONE HOME SCREEN */}
      {activeScreen === "home" && (
        <div className="relative h-[420px] bg-[#0A0B10] flex flex-col justify-between p-4 overflow-hidden">
          {/* Character Background Wallpaper */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/game/jessica_0001.webp"
              alt="Smartphone Wallpaper"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B10] via-transparent to-[#0A0B10]/70"></div>
          </div>

          {/* App Icons Grid */}
          <div className="relative z-10 pt-4 grid grid-cols-3 gap-5 text-center">
            <button
              onClick={() => setActiveScreen("chat")}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#9E0038]/80 border border-[#E11D48] flex items-center justify-center p-3 shadow-lg group-hover:scale-105 transition-transform">
                <Image src="/icons/app_mensagem.svg" alt="Chat App" width={28} height={28} />
              </div>
              <span className="text-[10px] font-mono text-white tracking-wide">Messages</span>
            </button>

            <button
              onClick={() => setActiveScreen("routes")}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#131620]/90 border border-white/20 flex items-center justify-center p-3 shadow-lg group-hover:scale-105 transition-transform">
                <Image src="/icons/app_rotas.svg" alt="Routes App" width={28} height={28} />
              </div>
              <span className="text-[10px] font-mono text-white tracking-wide">Routes</span>
            </button>

            <button
              onClick={() => setActiveScreen("credits")}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#131620]/90 border border-white/20 flex items-center justify-center p-3 shadow-lg group-hover:scale-105 transition-transform">
                <Image src="/icons/app_persona.svg" alt="Persona App" width={28} height={28} />
              </div>
              <span className="text-[10px] font-mono text-white tracking-wide">Personas</span>
            </button>

            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-2xl bg-[#131620]/90 border border-white/20 flex items-center justify-center p-3 shadow-lg">
                <Image src="/icons/app_galeria.png" alt="Gallery" width={28} height={28} />
              </div>
              <span className="text-[10px] font-mono text-[#9CA3AF]">Gallery</span>
            </div>

            <div className="flex flex-col items-center gap-1">
              <div className="w-14 h-14 rounded-2xl bg-[#131620]/90 border border-white/20 flex items-center justify-center p-3 shadow-lg">
                <Image src="/icons/app_notas.png" alt="Notes" width={28} height={28} />
              </div>
              <span className="text-[10px] font-mono text-[#9CA3AF]">Notes</span>
            </div>

            <button
              onClick={() => setActiveScreen("credits")}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#131620]/90 border border-white/20 flex items-center justify-center p-3 shadow-lg group-hover:scale-105 transition-transform">
                <Image src="/icons/app_config.svg" alt="Settings" width={28} height={28} />
              </div>
              <span className="text-[10px] font-mono text-white tracking-wide">Settings</span>
            </button>
          </div>

          {/* Smartphone Bottom Dock Icons */}
          <div className="relative z-10 p-3 rounded-3xl bg-[#131620]/80 border border-white/10 backdrop-blur-md flex justify-around">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#9CA3AF]">
              <Settings className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-[#9E0038] flex items-center justify-center text-white shadow-lg">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#9CA3AF]">
              <Users className="w-5 h-5" />
            </div>
          </div>
        </div>
      )}

      {/* SCREEN 2: CHAT APP SCREEN (EXACT REPLICA OF GAME CHAT SCRIPTS) */}
      {activeScreen === "chat" && (
        <div className="h-[420px] bg-[#0A0B10] flex flex-col justify-between">
          {/* Chat Header */}
          <div className="px-4 py-2.5 bg-[#131620] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ArrowLeft className="w-4 h-4 text-[#9CA3AF]" />
              <div>
                <h4 className="text-xs font-bold text-white tracking-wide">
                  {chatPersona === "chloe" ? "Chloe & Ashley" : "Isabelle"}
                </h4>
                <p className="text-[9px] font-mono text-[#9E0038]">
                  {chatPersona === "chloe" ? "Encrypted Channel" : "Online"}
                </p>
              </div>
            </div>
            {/* Persona Switcher Toggle inside phone */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setChatPersona(chatPersona === "chloe" ? "isabelle" : "chloe")}
                className="px-2 py-0.5 rounded bg-[#9E0038]/30 border border-[#9E0038] text-[9px] font-mono text-white"
              >
                Switch Route
              </button>
            </div>
          </div>

          {/* Chat Content Body */}
          <div className="p-3.5 space-y-3 overflow-y-auto text-xs bg-[#090C12] cyber-grid flex-1">
            {chatPersona === "chloe" ? (
              <>
                {/* Chloe & Ashley Chat Thread (Replicated from Print 5) */}
                <div className="flex flex-col items-start max-w-[85%] space-y-1">
                  <span className="text-[9px] font-mono text-[#9E0038]">Ashley</span>
                  <div className="bg-[#181D2B] text-white p-2.5 rounded-2xl rounded-tl-xs border border-white/10 text-[11px]">
                    Who?
                  </div>
                </div>

                <div className="flex flex-col items-start max-w-[85%] space-y-1">
                  <span className="text-[9px] font-mono text-[#9CA3AF]">Ashley</span>
                  <div className="bg-[#181D2B] text-white p-2.5 rounded-2xl border border-white/10 text-[11px]">
                    We agreed we didn't need to bring anyone else in.
                  </div>
                </div>

                <div className="flex flex-col items-start max-w-[85%] space-y-1">
                  <span className="text-[9px] font-mono text-[#9CA3AF]">Ashley</span>
                  <div className="bg-[#181D2B] text-white p-2.5 rounded-2xl border border-white/10 text-[11px]">
                    We can cover your rent.
                  </div>
                </div>

                <div className="flex flex-col items-start max-w-[85%] space-y-1">
                  <span className="text-[9px] font-mono text-[#9E0038]">Chloe</span>
                  <div className="bg-[#181D2B] text-white p-2.5 rounded-2xl border border-white/10 text-[11px]">
                    Is it a guy?
                  </div>
                </div>

                <div className="flex flex-col items-start max-w-[85%] space-y-1">
                  <span className="text-[9px] font-mono text-[#9CA3AF]">Ashley</span>
                  <div className="bg-[#181D2B] text-white p-2.5 rounded-2xl border border-white/10 text-[11px]">
                    I'll behave this time, I promise.
                  </div>
                </div>

                {/* Player Selected Response Bubble (Wine Color #9E0038) */}
                <div className="flex flex-col items-end ml-auto max-w-[90%] pt-1">
                  <div className="bg-[#9E0038] text-white font-medium p-2.5 rounded-2xl rounded-tr-xs border border-[#E11D48]/50 shadow-[0_0_15px_rgba(158,0,56,0.3)] text-[11px]">
                    It's a childhood friend of mine
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-[9px] font-mono text-[#9CA3AF]">23:42</span>
                    <CheckCheck className="w-3 h-3 text-[#9E0038]" />
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Isabelle Chat Thread (Navy & Blue Replicated from Print 7) */}
                <div className="flex flex-col items-start max-w-[85%] space-y-1">
                  <span className="text-[9px] font-mono text-[#38BDF8]">Isabelle</span>
                  <div className="bg-[#0F172A] text-white p-2.5 rounded-2xl rounded-tl-xs border border-white/10 text-[11px]">
                    Babe
                  </div>
                </div>

                <div className="flex flex-col items-start max-w-[85%] space-y-1">
                  <div className="bg-[#0F172A] text-white p-2.5 rounded-2xl border border-white/10 text-[11px]">
                    we're still going today right? to studio inolvidable
                  </div>
                </div>

                <div className="flex flex-col items-end ml-auto max-w-[85%]">
                  <div className="bg-[#2563EB] text-white p-2.5 rounded-2xl rounded-tr-xs text-[11px]">
                    sure
                  </div>
                </div>

                <div className="flex flex-col items-start max-w-[85%] space-y-1">
                  <div className="bg-[#0F172A] text-white p-2.5 rounded-2xl border border-white/10 text-[11px]">
                    It'll be our first time dancing together
                  </div>
                </div>

                <div className="flex flex-col items-start max-w-[85%] space-y-1">
                  <div className="bg-[#0F172A] text-white p-2.5 rounded-2xl border border-white/10 text-[11px]">
                    Took us long enough. I'm getting butterflies
                  </div>
                </div>

                {/* Game Time Divider */}
                <div className="flex justify-center my-2">
                  <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono text-[#9CA3AF] border border-white/10">
                    1 year together • With this special girl
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Bottom Chat Bar with Game Wine Primary Response Pill */}
          <div className="p-2.5 bg-[#131620] border-t border-white/10 space-y-2">
            <button
              onClick={() => setSelectedOption("Childhood Friend")}
              className="w-full py-2 px-3 bg-[#9E0038] hover:bg-[#B80043] text-white font-medium text-[11px] rounded-xl border border-[#E11D48]/40 shadow-md transition-all text-center"
            >
              It's a childhood friend of mine
            </button>
          </div>
        </div>
      )}

      {/* SCREEN 3: INTERACTIVE ROUTES GRAPH (REPLICATED FROM PRINT 8) */}
      {activeScreen === "routes" && (
        <div className="h-[420px] bg-[#0A0B10] flex flex-col justify-between p-4 relative cyber-grid overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 z-10">
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 text-[#9CA3AF]" />
              <h4 className="text-xs font-bold text-white">Routes Node Graph</h4>
            </div>
            <span className="text-[10px] font-mono text-[#9E0038] bg-[#9E0038]/20 px-2 py-0.5 rounded border border-[#9E0038]/50">
              100% Completion
            </span>
          </div>

          {/* Interactive Node Graph Visualization */}
          <div className="relative flex-1 flex flex-col items-center justify-center my-2">
            {/* SVG Connecting Paths */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 280">
              <path
                d="M 150 20 L 150 70 M 150 70 L 90 130 M 150 70 L 210 130 M 90 130 L 150 200 M 210 130 L 150 200 M 150 200 L 150 250"
                stroke="#9E0038"
                strokeWidth="4"
                fill="none"
                strokeDasharray="6 2"
              />
            </svg>

            {/* Nodes */}
            <div className="relative z-10 flex flex-col items-center gap-10">
              {/* Start Root Node */}
              <div className="w-10 h-10 rounded-full bg-[#9E0038] border-2 border-white flex items-center justify-center text-white shadow-[0_0_20px_rgba(158,0,56,0.8)] cursor-pointer hover:scale-110 transition-transform">
                <GitCommit className="w-5 h-5" />
              </div>

              {/* Branch Decision Nodes */}
              <div className="flex justify-between w-52">
                <div className="w-8 h-8 rounded-full bg-[#131620] border-2 border-[#9E0038] flex items-center justify-center text-[#9E0038] shadow-md hover:scale-110 transition-transform">
                  <span className="text-[9px] font-mono font-bold">A</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#9E0038] border-2 border-white flex items-center justify-center text-white shadow-[0_0_15px_rgba(158,0,56,0.6)] hover:scale-110 transition-transform">
                  <span className="text-[9px] font-mono font-bold">B</span>
                </div>
              </div>

              {/* Persona Route Endpoints */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#9E0038] to-[#2563EB] border-2 border-white flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>
          </div>

          <p className="text-[9px] font-mono text-[#9CA3AF] text-center z-10">
            Godot GraphNode Engine • Interactive Choice Trees
          </p>
        </div>
      )}

      {/* SCREEN 4: CREDITS & SETTINGS SCREEN (REPLICATED FROM PRINT 4 & 2) */}
      {activeScreen === "credits" && (
        <div className="h-[420px] bg-[#0A0B10] p-4 space-y-4 overflow-y-auto">
          <div className="flex items-center gap-2 pb-2 border-b border-white/10">
            <ArrowLeft className="w-4 h-4 text-[#9CA3AF]" />
            <h4 className="text-xs font-bold text-white">Credits & Artists</h4>
          </div>

          {/* Illustrators & Artists Section */}
          <div className="space-y-3">
            <p className="text-[10px] font-mono text-[#9E0038] uppercase">
              Illustrators & Artists
            </p>

            <div className="p-2.5 rounded-xl bg-[#131620] border border-white/10 flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#9E0038]">
                <Image src="/artists/hime.webp" alt="Hime" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h5 className="text-xs font-bold text-white">Hime</h5>
                <p className="text-[9px] text-[#9CA3AF]">Character Illustrator</p>
              </div>
              <span className="px-2 py-1 rounded bg-[#9E0038]/20 border border-[#9E0038] text-[9px] font-mono text-white">
                Visit
              </span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#131620] border border-white/10 flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#2563EB]">
                <Image src="/artists/valneeko.jpg" alt="Valneeko" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h5 className="text-xs font-bold text-white">Valneeko</h5>
                <p className="text-[9px] text-[#9CA3AF]">Character Illustrator</p>
              </div>
              <span className="px-2 py-1 rounded bg-[#2563EB]/20 border border-[#2563EB] text-[9px] font-mono text-white">
                Visit
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Phone Home Bar */}
      <div className="py-2 bg-[#0D0F17] flex justify-center items-center border-t border-white/5">
        <div className="w-28 h-1 bg-white/30 rounded-full"></div>
      </div>
    </div>
  );
};
