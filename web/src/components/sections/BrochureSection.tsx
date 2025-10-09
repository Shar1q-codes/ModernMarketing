"use client";

import { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

const brochure = siteContent.projects.brochure;

export function BrochureSection() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <section className="bg-zinc-950 py-16 text-zinc-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold text-white">{brochure.heading}</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {brochure.images.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Brochure preview: ${selectedImage.alt}`}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-black"
              aria-label="Close brochure preview"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1400}
              height={2000}
              className="h-full w-full object-contain bg-zinc-950"
              priority
            />
            <div className="bg-black/60 px-6 py-4 text-sm text-zinc-100">
              {selectedImage.alt}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
