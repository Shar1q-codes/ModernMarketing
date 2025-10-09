import type { Metadata } from "next";
import { DealersShowcase } from "@/components/sections/DealersShowcase";
import { DistributorShowcase } from "@/components/sections/DistributorShowcase";
import { HomeHero } from "@/components/sections/HomeHero";
import { InfoSnapshot } from "@/components/sections/InfoSnapshot";

export const metadata: Metadata = {
  title: "Modern Marketing Associates",
  description:
    "Modern Marketing Associates – Hyderabad based distributor for AAC blocks, cement, tiles, plumbing materials, and construction supplies.",
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <InfoSnapshot />
      <DistributorShowcase />
      <DealersShowcase />
    </main>
  );
}
