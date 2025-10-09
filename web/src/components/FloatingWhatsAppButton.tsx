"use client";

import Image from "next/image";

const WHATSAPP_LINK =
  "https://wa.me/9392995580?text=Hi%20Modern%20Marketing%20Associates%2C%20I%27d%20like%20to%20discuss%20material%20requirements.";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Modern Marketing Associates on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_20px_45px_-15px_rgba(37,211,102,0.8)] transition hover:scale-105 hover:shadow-[0_25px_55px_-20px_rgba(37,211,102,0.9)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <Image
        src="/images/whatsapp.png"
        alt="WhatsApp icon"
        width={36}
        height={36}
        className="h-9 w-9"
        priority
      />
      <span className="sr-only">Open WhatsApp chat</span>
    </a>
  );
}

