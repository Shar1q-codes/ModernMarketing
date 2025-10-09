"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

const footer = siteContent.footer;

export function SiteFooter() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const renderSocialIcon = (label: string) => {
    switch (label) {
      case "WhatsApp":
        return (
          <path d="M20.52 3.48A10.5 10.5 0 0 0 3.48 20.52L2 22l1.7-.45a10.5 10.5 0 0 0 16.82-9.2 10.48 10.48 0 0 0-3.99-8.87Zm-3.54 13.79c-.26.73-1.21 1.38-1.92 1.52-.51.1-1.17.18-3.82-.86-3.24-1.32-5.3-4.63-5.45-4.85-.16-.22-1.3-1.73-1.3-3.3 0-1.57.8-2.34 1.09-2.66.29-.32.64-.4.85-.4.21 0 .43.01.62.01.2 0 .48-.08.75.55.28.66.95 2.3 1.03 2.46.08.16.13.35.02.57-.11.22-.17.36-.34.56-.17.2-.36.42-.51.55-.16.13-.32.29-.14.58.18.29.82 1.36 1.76 2.2 1.22 1.11 2.24 1.45 2.57 1.61.34.16.53.14.72-.09.19-.23.86-1 .1-1.33.21-.33.42-.28.72-.17.3.1 1.84.86 2.16 1.02.32.16.52.24.59.37.07.13.07.76-.19 1.49Z" />
        );
      case "Instagram":
      default:
        return (
          <>
            <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 16.5 5h-9Z" />
            <path d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
            <circle cx="17.5" cy="6.5" r="1.25" />
          </>
        );
    }
  };

  return (
    <>
      <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-100">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">{footer.heading}</h2>
            <div className="space-y-3 text-sm leading-relaxed text-zinc-300">
              {footer.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>
                <span className="font-semibold text-teal-300">
                  {footer.phoneLabel}
                </span>{" "}
                {footer.phoneValue}
              </p>
              <p>
                <span className="font-semibold text-teal-300">
                  {footer.emailLabel}
                </span>{" "}
                <a href={`mailto:${footer.emailValue}`} className="underline">
                  {footer.emailValue}
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4">
              {footer.socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-teal-400/60 text-sky-300 transition hover:bg-teal-400 hover:text-zinc-950"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">{link.label}</span>
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {renderSocialIcon(link.label)}
                  </svg>
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {footer.galleryImages.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group overflow-hidden rounded-2xl border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={260}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded view of ${selectedImage.alt}`}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full overflow-hidden rounded-3xl bg-zinc-900 shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-black"
              aria-label="Close image preview"
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
              width={1200}
              height={800}
              className="h-full w-full object-cover"
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
