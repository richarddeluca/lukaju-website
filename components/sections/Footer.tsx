import React from "react";
import Image from "next/image";
import { Heart, ExternalLink, Mail, Twitter } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 bg-[#0A0B10] border-t border-white/10 text-xs font-mono text-[#9CA3AF]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2.5">
            <Image
              src="/ui/logo_lukaju.png"
              alt="Lukajú Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <span className="font-serifTitle text-lg font-bold text-white tracking-wide">
              LUKAJÚ
            </span>
          </div>
          <p className="text-[#9CA3AF]">
            Independent diegetic social simulation games developed in Godot Engine.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-[#9CA3AF]">
          <a
            href="https://patreon.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#9E0038] transition-colors flex items-center gap-1.5"
          >
            <Heart className="w-3.5 h-3.5 text-[#9E0038]" /> Patreon
          </a>

          <a
            href="https://lukaju.itch.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2563EB] transition-colors flex items-center gap-1.5"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" /> Itch.io
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Twitter className="w-3.5 h-3.5" /> Twitter / X
          </a>

          <a
            href="mailto:contact@lukaju.studio"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-[#F3F4F6]">© 2026 Lukajú. All rights reserved.</p>
          <p className="text-[10px] text-[#9CA3AF]">
            Sexting Her • Built with <span className="text-[#2563EB]">Godot Engine</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};
