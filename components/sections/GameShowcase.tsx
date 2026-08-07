import React from "react";
import { Button } from "../ui/Button";
import { Monitor, Download, Smartphone } from "lucide-react";

export const GameShowcase: React.FC = () => {
    return (
        <section id="game" className="py-24 sm:py-28 px-4 sm:px-6 bg-[#0A0B10] border-t border-white/10">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="space-y-3">
                    <h2 className="text-4xl sm:text-5xl font-serifTitle font-bold text-white tracking-tight">
                        About the Game
                    </h2>
                    <p className="text-base sm:text-lg text-[#D1D5DB]">
                        Adults only • Play for free at{" "}
                        <a
                            href="https://lukaju.itch.io/sexting-her"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white underline hover:text-[#F43F5E]"
                        >
                            lukaju.itch.io/sexting-her
                        </a>
                    </p>
                </div>

                <p className="text-lg sm:text-xl text-[#E5E7EB] leading-relaxed">
                    <strong className="text-white font-serifTitle text-xl sm:text-2xl">Sexting Her</strong> is an erotic visual novel told through steamy phone messages. The game simulates a mobile operating system where you interact with different characters.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="p-6 rounded-xl bg-[#131620] border border-white/15 space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-white">Phone OS Interface</h3>
                        <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                            Navigation through simulated apps including Messages, Notes, and Gallery.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-[#131620] border border-white/15 space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-white">GraphNode Routes</h3>
                        <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                            Visual route map tracking story decisions and completion paths.
                        </p>
                    </div>

                    <div className="p-6 rounded-xl bg-[#131620] border border-white/15 space-y-2">
                        <h3 className="text-base sm:text-lg font-bold text-white">Time Rewind</h3>
                        <p className="text-sm sm:text-base text-[#D1D5DB] leading-relaxed">
                            Return to key decision points to explore alternate dialogue branches.
                        </p>
                    </div>
                </div>

                {/* Play & Download Links */}
                <div className="pt-4 space-y-4">
                    <span className="text-sm font-mono text-[#E5E7EB] uppercase tracking-wider block font-semibold">
                        Platforms (Itch.io)
                    </span>

                    <div className="flex flex-wrap gap-4">
                        <Button
                            href="https://lukaju.itch.io/sexting-her"
                            external
                            variant="itch"
                            size="lg"
                            icon={<Monitor className="w-5 h-5" />}
                        >
                            Play in Browser
                        </Button>

                        <Button
                            href="https://lukaju.itch.io/sexting-her"
                            external
                            variant="secondary"
                            size="lg"
                            icon={<Download className="w-5 h-5" />}
                        >
                            Download Windows
                        </Button>

                        <Button
                            href="https://lukaju.itch.io/sexting-her"
                            external
                            variant="secondary"
                            size="lg"
                            icon={<Smartphone className="w-5 h-5" />}
                        >
                            Download Android APK
                        </Button>
                        <Button
                            href="https://lukaju.itch.io/sexting-her"
                            external
                            variant="secondary"
                            size="lg"
                            icon={<Download className="w-5 h-5" />}
                        >
                            Download Linux
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};
