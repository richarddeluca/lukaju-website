import React from "react";
import Image from "next/image";
import { Heart, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 bg-[#0A0B10] border-t border-white/10 text-xs font-mono text-[#D1D5DB]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <Image
            src="/ui/logo_lukaju.png"
            alt="Lukajú Logo"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="font-serifTitle text-base font-bold text-white tracking-wide">
            LUKAJÚ
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-[#E5E7EB]">
          <a
            href="https://patreon.com/lukaju"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
          >
            <Heart className="w-3.5 h-3.5 text-[#F43F5E]" /> Patreon
          </a>

          <a
            href="https://lukaju.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#D1D5DB]" /> Itch.io
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right text-[#D1D5DB]">
          <span>© 2026 Lukajú. Built with Godot Engine.</span>
        </div>
      </div>
    </footer>
  );
};
