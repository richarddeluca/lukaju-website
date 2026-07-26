import React from "react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";
import { Heart, Sparkles, Key, Vote, CheckCircle2, ShieldCheck, Star } from "lucide-react";

export const PatreonSupport: React.FC = () => {
  return (
    <section id="patreon" className="py-24 px-4 sm:px-6 relative overflow-hidden bg-[#0A0B10]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial from-[#9E0038]/30 via-transparent to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main Card replicating the game's wine accents */}
        <div className="rounded-2xl p-8 sm:p-12 bg-gradient-to-b from-[#181D2B] to-[#131620] border-2 border-[#9E0038] shadow-[0_0_50px_rgba(158,0,56,0.3)] space-y-10">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <Badge variant="magenta" className="px-3 py-1">
              PATREON COMMUNITY
            </Badge>

            <h2 className="text-4xl sm:text-6xl font-serifTitle font-bold text-white tracking-tight">
              Make this project <span className="text-[#9E0038]">possible.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              Lukajú's development is 100% independent. Supporters ensure the continuity of <span className="text-white font-semibold">Sexting Her</span> and receive exclusive access to early builds, CG galleries, and voting.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card hoverEffect highlightBorder className="space-y-3 bg-[#0D0F17] border-[#9E0038]/50">
              <div className="w-10 h-10 rounded-lg bg-[#9E0038]/20 border border-[#9E0038] flex items-center justify-center text-[#9E0038]">
                <Key className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                Early Builds Access
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Play new story chapters, features, and Godot builds before public release.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-[#9E0038]">
                <CheckCircle2 className="w-3.5 h-3.5" /> Early Access Unlocked
              </div>
            </Card>

            <Card hoverEffect className="space-y-3 bg-[#0D0F17]">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/20 border border-[#2563EB] flex items-center justify-center text-[#38BDF8]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                Private CG Vault
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Full access to high-resolution CG artwork galleries by Hime, Valneeko, HoYo, and Lua Lunareth.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-[#38BDF8]">
                <CheckCircle2 className="w-3.5 h-3.5" /> Uncensored Art Vault
              </div>
            </Card>

            <Card hoverEffect className="space-y-3 bg-[#0D0F17]">
              <div className="w-10 h-10 rounded-lg bg-[#9E0038]/20 border border-[#9E0038] flex items-center justify-center text-[#9E0038]">
                <Vote className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-bold text-white">
                Route & Character Polls
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Vote directly on upcoming persona routes, dialogue options, and game features.
              </p>
              <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-[#9E0038]">
                <CheckCircle2 className="w-3.5 h-3.5" /> Direct Creator Voting
              </div>
            </Card>
          </div>

          {/* Giant CTA */}
          <div className="pt-4 text-center space-y-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href="https://patreon.com"
                external
                variant="patreon"
                size="lg"
                className="w-full sm:w-auto text-xl px-12 py-4"
                icon={<Heart className="w-6 h-6 fill-white" />}
              >
                View Tiers on Patreon
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#9CA3AF]">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Direct independent game developer support • Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
