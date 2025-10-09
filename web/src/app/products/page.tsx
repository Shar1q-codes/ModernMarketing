import type { Metadata } from "next";
import { ProductBrandGrid } from "@/components/sections/ProductBrandGrid";
import { PageHero } from "@/components/sections/PageHero";
import { ProductCollections } from "@/components/sections/ProductCollections";
import { ProductTiles } from "@/components/sections/ProductTiles";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { siteContent } from "@/data/siteContent";

const products = siteContent.services;
const testimonials = siteContent.about.testimonials;

export const metadata: Metadata = {
  title: "M.M.A - Products",
  description: "",
};

export default function ProductsPage() {
  return (
    <main>
      <PageHero
        title={products.heroTitle}
        breadcrumbs={products.heroBreadcrumbs}
      />
      <ProductTiles />
      <ProductCollections />
      <ProductBrandGrid />
      <TestimonialsSection
        heading={testimonials.heading}
        summary={testimonials.summary}
        entries={testimonials.entries}
      />
    </main>
  );
}







