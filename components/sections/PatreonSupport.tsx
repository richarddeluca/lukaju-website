import React from "react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { Heart, Vote, ShieldCheck } from "lucide-react";

export const PatreonSupport: React.FC = () => {
  return (
    <section id="patreon" className="py-24 sm:py-28 px-4 sm:px-6 bg-[#0A0B10] border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-serifTitle font-bold text-white tracking-tight">
            Support on Patreon
          </h2>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-[#E5E7EB] font-sans leading-relaxed">
            Want to help shape the future of <strong className="font-serifTitle text-white">Sexting Her</strong>? Your support on Patreon can make a huge difference!
          </p>

          <p className="max-w-2xl mx-auto text-sm sm:text-base font-mono text-[#D1D5DB] font-medium">
            The game is in its early stages. It's almost linear for now.
          </p>
        </div>

        {/* What pledges help achieve */}
        <div className="space-y-4 max-w-4xl mx-auto text-left">
          <span className="text-sm sm:text-base font-mono text-[#E5E7EB] uppercase tracking-wider block text-center font-semibold">
            Your pledges will help me:
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="space-y-3 p-6 sm:p-8">
              <ShieldCheck className="w-6 h-6 text-[#F43F5E]" />
              <h3 className="text-lg sm:text-xl font-bold text-white">More Content</h3>
              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                Create more chapters, characters, and storylines.
              </p>
            </Card>

            <Card className="space-y-3 p-6 sm:p-8">
              <Vote className="w-6 h-6 text-white" />
              <h3 className="text-lg sm:text-xl font-bold text-white">Art Commissions</h3>
              <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
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
            icon={<Heart className="w-5 h-5 fill-white" />}
          >
            Support on Patreon
          </Button>
        </div>
      </div>
    </section>
  );
};
