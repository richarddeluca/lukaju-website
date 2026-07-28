import React from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Heart, Vote, ShieldCheck } from "lucide-react";

export const PatreonSupport: React.FC = () => {
  return (
    <section id="patreon" className="py-20 px-4 sm:px-6 bg-[#0A0B10] border-t border-white/10">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-serifTitle font-bold text-white tracking-tight">
            Support on Patreon
          </h2>

          <p className="max-w-2xl mx-auto text-base text-[#E5E7EB] font-sans leading-relaxed">
            Want to help shape the future of <strong className="font-serifTitle text-white">Sexting Her</strong>? Your support on Patreon can make a huge difference!
          </p>

          <p className="max-w-xl mx-auto text-xs font-mono text-[#D1D5DB] font-medium">
            The game is in its early stages. It's almost linear for now.
          </p>
        </div>

        {/* What pledges help achieve */}
        <div className="space-y-3 max-w-2xl mx-auto text-left">
          <span className="text-xs font-mono text-[#E5E7EB] uppercase tracking-wider block text-center font-semibold">
            Your pledges will help me:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="space-y-2">
              <ShieldCheck className="w-5 h-5 text-[#F43F5E]" />
              <h3 className="text-sm font-bold text-white">More Content</h3>
              <p className="text-xs text-[#D1D5DB] leading-relaxed">
                Create more chapters, characters, and storylines.
              </p>
            </Card>

            <Card className="space-y-2">
              <Vote className="w-5 h-5 text-white" />
              <h3 className="text-sm font-bold text-white">Art Commissions</h3>
              <p className="text-xs text-[#D1D5DB] leading-relaxed">
                Commission professional artists for more illustrations.
              </p>
            </Card>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button
            href="https://patreon.com/lukaju"
            external
            variant="patreon"
            size="lg"
            icon={<Heart className="w-4 h-4 fill-white" />}
          >
            Support on Patreon
          </Button>
        </div>
      </div>
    </section>
  );
};
