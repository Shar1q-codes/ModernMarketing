"use client";

import Image from "next/image";
import { siteContent } from "@/data/siteContent";

const dealers = siteContent.home.dealers;
const marqueeLogos = [...dealers.logos, ...dealers.logos];

export function DealersShowcase() {
  return (
    <section className="bg-zinc-950 py-16 text-zinc-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">
              {dealers.heading}
            </h2>
          </div>
          <p className="max-w-2xl text-sm text-zinc-300">
            {dealers.description}
          </p>
        </div>

        <div className="mt-12">
          <div className="group relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/5 py-6">
            <div className="dealers-track flex items-center gap-10">
              {marqueeLogos.map((logo, index) => (
                <div
                  key={`${logo.src}-${index}`}
                  className="flex min-w-[180px] max-w-[220px] items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-8 py-6 shadow-md transition group-hover:border-teal-400/60 group-hover:bg-teal-400/10"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={220}
                    height={120}
                    className="h-16 w-auto object-contain grayscale transition group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes dealers-scroll {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        .dealers-track {
          animation: dealers-scroll 28s linear infinite;
          width: max-content;
        }

        .group:hover .dealers-track {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
