import React from "react";
import Image from "next/image";
import { Card } from "../ui/Card";
import { ARTISTS_DATA } from "@/config/artists";
import { Palette, ExternalLink } from "lucide-react";

export const AboutDev: React.FC = () => {
  const artistList = Object.values(ARTISTS_DATA);

  return (
    <section id="about" className="py-20 px-4 sm:px-6 bg-[#0A0B10] border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-serifTitle font-bold text-white tracking-tight">
            Credits & Collaborators
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Creator Profile */}
          <div className="lg:col-span-6 space-y-4">
            <Card className="h-full space-y-4 bg-[#131620] border-white/15">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded bg-[#9E0038]/30 border border-[#9E0038]/60 overflow-hidden flex items-center justify-center p-1">
                  <Image
                    src="/ui/logo_lukaju.png"
                    alt="Lukajú Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-serifTitle font-bold text-white">
                    Lukajú
                  </h3>
                  <p className="text-xs font-mono text-[#D1D5DB]">
                    Dev, Writer & Designer
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-[#E5E7EB] leading-relaxed font-sans">
                <p className="text-white font-medium">
                  Making the leap into professional visual novel creation. Supporting artists.
                </p>
                <p>
                  <strong className="text-white">Sexting Her</strong> is developed in Godot Engine 4, working alongside talented illustrators for character artwork and backgrounds.
                </p>
              </div>
            </Card>
          </div>

          {/* Illustrators & Artists Section */}
          <div className="lg:col-span-6 space-y-4">
            <Card className="h-full space-y-4 bg-[#131620] border-white/15">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-[#F43F5E]" />
                <h3 className="text-xl font-serifTitle font-bold text-white">
                  Illustrators & Artists
                </h3>
              </div>

              <p className="text-sm text-[#D1D5DB]">
                Supporting artists:
              </p>

              {/* Artist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {artistList.map((artist) => (
                  <a
                    key={artist.slug}
                    href={`/artists/${artist.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-[#0D0F17] border border-white/15 flex items-center justify-between gap-3 hover:border-white/30 transition-all group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 shrink-0">
                        <Image
                          src={artist.img}
                          alt={artist.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-bold text-white truncate">
                          {artist.name}
                        </h4>
                        <p className="text-[10px] text-[#D1D5DB] font-mono truncate">
                          {artist.role}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#D1D5DB] group-hover:text-white shrink-0" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
