"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { Heart, Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0B10]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo with Real Game Studio Assets */}
        <a href="#" className="group flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-lg bg-[#9E0038]/20 border border-[#9E0038]/60 overflow-hidden flex items-center justify-center p-1 group-hover:border-[#9E0038] transition-all shadow-[0_0_15px_rgba(158,0,56,0.3)]">
            <Image
              src="/ui/logo_lukaju.png"
              alt="Lukajú Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serifTitle text-xl font-bold tracking-wide text-white leading-none">
              LUKAJÚ
            </span>
            <span className="font-mono text-[9px] text-[#9E0038] tracking-widest uppercase">
              Indie Studio
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans text-[#9CA3AF]">
          <a
            href="#game"
            className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-y-[-1px] transform"
          >
            <span className="font-mono text-xs text-[#9E0038]">01.</span> The Game
          </a>
          <a
            href="#routes"
            className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-y-[-1px] transform"
          >
            <span className="font-mono text-xs text-[#2563EB]">02.</span> Routes & Mechanics
          </a>
          <a
            href="#patreon"
            className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-y-[-1px] transform"
          >
            <span className="font-mono text-xs text-[#9E0038]">03.</span> Patreon
          </a>
          <a
            href="#about"
            className="hover:text-white transition-colors flex items-center gap-1.5 hover:translate-y-[-1px] transform"
          >
            <span className="font-mono text-xs text-[#9CA3AF]">04.</span> Credits
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Button
            href="#patreon"
            variant="patreon"
            size="sm"
            icon={<Heart className="w-4 h-4 fill-white/30" />}
          >
            Support on Patreon
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#9CA3AF] hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0F17] border-b border-white/10 px-6 py-5 space-y-4 font-sans text-sm animate-fadeIn">
          <a
            href="#game"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#9CA3AF] hover:text-white py-1"
          >
            The Game
          </a>
          <a
            href="#routes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#9CA3AF] hover:text-white py-1"
          >
            Routes & Mechanics
          </a>
          <a
            href="#patreon"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#9CA3AF] hover:text-white py-1"
          >
            Patreon
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-[#9CA3AF] hover:text-white py-1"
          >
            Credits
          </a>
          <div className="pt-2">
            <Button
              href="#patreon"
              variant="patreon"
              size="md"
              className="w-full"
              icon={<Heart className="w-4 h-4" />}
            >
              Support on Patreon
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
