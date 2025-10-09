import type { Metadata } from "next";
import { AboutStory } from "@/components/sections/AboutStory";
import { PageHero } from "@/components/sections/PageHero";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { siteContent } from "@/data/siteContent";

const about = siteContent.about;

export const metadata: Metadata = {
  title: "M.M.A - About",
  description: "",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        title={about.heroTitle}
        breadcrumbs={about.heroBreadcrumbs}
      />
      <AboutStory />
      <TeamSection />
      <TestimonialsSection
        heading={about.testimonials.heading}
        summary={about.testimonials.summary}
        entries={about.testimonials.entries}
      />
    </main>
  );
}
