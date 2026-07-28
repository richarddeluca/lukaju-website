"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, CheckCheck, GitCommit, Sparkles } from "lucide-react";

export const PhoneMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"chat" | "routes" | "credits">("chat");

  return (
    <div className="w-full bg-[#131620] border border-white/10 rounded-xl overflow-hidden font-sans">
      {/* Interface Navigation Header */}
      <div className="px-4 py-3 bg-[#0D0F17] border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#9E0038]"></span>
          <span className="text-xs font-mono text-white">Sexting Her • Game Interface</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#9CA3AF]">
          <button
            onClick={() => setActiveTab("chat")}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === "chat" ? "bg-[#9E0038] text-white" : "hover:text-white"
            }`}
          >
            Chat
          </button>
          <button
            onClick={() => setActiveTab("routes")}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === "routes" ? "bg-[#9E0038] text-white" : "hover:text-white"
            }`}
          >
            Routes
          </button>
          <button
            onClick={() => setActiveTab("credits")}
            className={`px-2.5 py-1 rounded transition-colors ${
              activeTab === "credits" ? "bg-[#9E0038] text-white" : "hover:text-white"
            }`}
          >
            Credits
          </button>
        </div>
      </div>

      {/* TAB 1: CHAT INTERFACE */}
      {activeTab === "chat" && (
        <div className="p-4 space-y-3 bg-[#0A0B10] min-h-[340px] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-2 border-b border-white/5 text-xs">
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4 text-[#9CA3AF]" />
              <span className="font-semibold text-white">Chloe & Ashley</span>
            </div>
            <span className="font-mono text-[10px] text-[#9CA3AF]">Encrypted Channel</span>
          </div>

          <div className="space-y-2.5 text-xs py-2">
            <div className="max-w-[85%] space-y-0.5">
              <span className="text-[10px] font-mono text-[#9E0038]">Ashley</span>
              <div className="bg-[#181D2B] text-white p-2.5 rounded-lg border border-white/5">
                We agreed we didn't need to bring anyone else in.
              </div>
            </div>

            <div className="max-w-[85%] space-y-0.5">
              <span className="text-[10px] font-mono text-[#9E0038]">Chloe</span>
              <div className="bg-[#181D2B] text-white p-2.5 rounded-lg border border-white/5">
                Is it a guy?
              </div>
            </div>

            <div className="max-w-[85%] ml-auto space-y-0.5 text-right">
              <div className="bg-[#9E0038] text-white p-2.5 rounded-lg inline-block text-left">
                It's a childhood friend of mine
              </div>
              <div className="flex items-center justify-end gap-1 text-[10px] text-[#9CA3AF]">
                <span>23:42</span>
                <CheckCheck className="w-3 h-3 text-[#9E0038]" />
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/5 text-center">
            <span className="text-[11px] font-mono text-[#9CA3AF]">
              Diegetic dialogue selection system
            </span>
          </div>
        </div>
      )}

      {/* TAB 2: ROUTES NODE GRAPH */}
      {activeTab === "routes" && (
        <div className="p-4 bg-[#0A0B10] min-h-[340px] flex flex-col justify-between relative">
          <div className="flex items-center justify-between pb-2 border-b border-white/5 text-xs z-10">
            <span className="font-semibold text-white">Routes Graph</span>
            <span className="font-mono text-[10px] text-[#9E0038]">100% Completion</span>
          </div>

          <div className="relative my-4 flex flex-col items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 180">
              <path
                d="M 150 20 L 150 60 M 150 60 L 100 110 M 150 60 L 200 110 M 100 110 L 150 160 M 200 110 L 150 160"
                stroke="#9E0038"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            <div className="relative z-10 flex flex-col items-center gap-8 py-2">
              <div className="w-8 h-8 rounded-full bg-[#9E0038] border border-white flex items-center justify-center text-white">
                <GitCommit className="w-4 h-4" />
              </div>

              <div className="flex justify-between w-44">
                <div className="w-7 h-7 rounded-full bg-[#131620] border border-[#9E0038] flex items-center justify-center text-[#9E0038] text-[10px] font-mono font-bold">
                  A
                </div>
                <div className="w-7 h-7 rounded-full bg-[#9E0038] border border-white flex items-center justify-center text-white text-[10px] font-mono font-bold">
                  B
                </div>
              </div>

              <div className="w-9 h-9 rounded-full bg-[#9E0038] border border-white flex items-center justify-center text-white">
                <Sparkles className="w-4 h-4" />
              </div>
            </div>
          </div>

          <p className="text-[10px] font-mono text-[#9CA3AF] text-center z-10">
            Interactive choice trees and story branches
          </p>
        </div>
      )}

      {/* TAB 3: CREDITS */}
      {activeTab === "credits" && (
        <div className="p-4 space-y-3 bg-[#0A0B10] min-h-[340px]">
          <div className="pb-2 border-b border-white/5 text-xs">
            <span className="font-semibold text-white">Artists & Illustrators</span>
          </div>

          <div className="space-y-2">
            <div className="p-2.5 rounded bg-[#131620] border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/artists/hime.webp" alt="Hime" fill className="object-cover" />
                </div>
                <div>
                  <span className="font-bold text-white block">Hime</span>
                  <span className="text-[10px] text-[#9CA3AF]">Character Illustrator</span>
                </div>
              </div>
              <a
                href="/artists/hime"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono text-white bg-[#9E0038] px-2 py-1 rounded"
              >
                Visit
              </a>
            </div>

            <div className="p-2.5 rounded bg-[#131620] border border-white/5 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src="/artists/valneeko.jpg" alt="Valneeko" fill className="object-cover" />
                </div>
                <div>
                  <span className="font-bold text-white block">Valneeko</span>
                  <span className="text-[10px] text-[#9CA3AF]">Character Illustrator</span>
                </div>
              </div>
              <a
                href="/artists/valneeko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-mono text-white bg-[#9E0038] px-2 py-1 rounded"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
