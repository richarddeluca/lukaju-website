import React from "react";
import Image from "next/image";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Palette, Heart, Sparkles, ExternalLink } from "lucide-react";

export const AboutDev: React.FC = () => {
  const artists = [
    {
      name: "Hime",
      role: "Character Illustrator",
      img: "/artists/hime.webp",
    },
    {
      name: "Valneeko",
      role: "Character Illustrator",
      img: "/artists/valneeko.jpg",
    },
    {
      name: "HoYo",
      role: "Key Visuals & Art Assets",
      img: "/artists/hoyo.jpg",
    },
    {
      name: "Lua Lunareth",
      role: "Color & Environmental Mood",
      img: "/artists/lua_lunareth.jpg",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative bg-[#0A0B10] border-t border-white/5">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2">
          <Badge variant="blue">BEHIND THE GAME</Badge>
          <h2 className="text-4xl sm:text-5xl font-serifTitle font-bold text-white tracking-tight">
            Creator & Collaborators
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Lukajú Solo Dev Profile */}
          <div className="lg:col-span-6 space-y-6">
            <Card hoverEffect={false} className="h-full space-y-6 bg-[#131620] border-white/10">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-2xl bg-[#9E0038]/20 border-2 border-[#9E0038] overflow-hidden flex items-center justify-center p-1 shadow-lg">
                  <Image
                    src="/ui/logo_lukaju.png"
                    alt="Lukajú Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-serifTitle font-bold text-white">
                    Lukajú
                  </h3>
                  <p className="text-xs font-mono text-[#9E0038]">
                    Solo Writer, Programmer & Game Designer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-[#9CA3AF] leading-relaxed font-sans">
                <p>
                  I build independent diegetic visual novels and immersive social simulations in <strong className="text-white">Godot Engine 4</strong>. My focus is creating narrative mechanics that subvert expectations, using phone chat interfaces as storytelling devices.
                </p>
                <p>
                  <strong className="text-white">Sexting Her</strong> is developed completely solo in code and writing, working alongside talented illustrators to bring each persona and route to life.
                </p>
              </div>

              {/* Badges */}
              <div className="pt-2 flex flex-wrap gap-2">
                <Badge variant="engine">Godot 4.3 Engine</Badge>
                <Badge variant="outline">GDScript</Badge>
                <Badge variant="outline">Diegetic UI</Badge>
                <Badge variant="magenta">GraphNode Routes</Badge>
              </div>
            </Card>
          </div>

          {/* Right Column: Illustrators & Artists Section (Replicated from Print 4) */}
          <div className="lg:col-span-6 space-y-6">
            <Card hoverEffect={false} className="h-full space-y-6 bg-[#131620] border-white/10">
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-[#9E0038]" />
                <h3 className="text-2xl font-serifTitle font-bold text-white">
                  Illustrators & Artists
                </h3>
              </div>

              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Special gratitude to the incredible artists whose artwork, character designs, and CGs give soul to <span className="text-white font-semibold">Sexting Her</span>:
              </p>

              {/* Artist Grid with Real Game Pictures */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {artists.map((artist, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#0D0F17] border border-white/10 flex items-center gap-3 hover:border-[#9E0038]/50 transition-all"
                  >
                    <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/20 shrink-0">
                      <Image
                        src={artist.img}
                        alt={artist.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-white truncate">
                        {artist.name}
                      </h4>
                      <p className="text-[10px] text-[#9CA3AF] font-mono truncate">
                        {artist.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-[#9CA3AF]">
                <span>Support art creation on Patreon</span>
                <Heart className="w-4 h-4 text-[#9E0038] fill-[#9E0038]" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
