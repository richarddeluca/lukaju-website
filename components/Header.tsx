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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#0A0B10]/95 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded bg-[#9E0038]/30 border border-[#9E0038]/60 flex items-center justify-center p-1">
            <Image
              src="/ui/logo_lukaju.png"
              alt="Lukajú Logo"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <span className="font-serifTitle text-xl font-bold tracking-wide text-white">
            LUKAJÚ
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-sans text-[#E5E7EB]">
          <a href="#game" className="hover:text-white transition-colors">
            The Game
          </a>
          <a href="#patreon" className="hover:text-white transition-colors">
            Patreon
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            Credits
          </a>
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Button
            href="https://patreon.com/lukaju"
            external
            variant="patreon"
            size="sm"
            icon={<Heart className="w-4 h-4 fill-white/40" />}
          >
            Support on Patreon
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#E5E7EB] hover:text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D0F17] border-b border-white/10 px-6 py-4 space-y-3 font-sans text-sm text-[#E5E7EB]">
          <a
            href="#game"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-white py-1"
          >
            The Game
          </a>
          <a
            href="#patreon"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-white py-1"
          >
            Patreon
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-white py-1"
          >
            Credits
          </a>
          <div className="pt-2">
            <Button
              href="https://patreon.com/lukaju"
              external
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
