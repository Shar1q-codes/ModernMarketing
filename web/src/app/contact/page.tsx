import type { Metadata } from "next";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";
import { MapsSection } from "@/components/sections/MapsSection";
import { PageHero } from "@/components/sections/PageHero";
import { siteContent } from "@/data/siteContent";

const contact = siteContent.contact;

export const metadata: Metadata = {
  title: "M.M.A - Contact",
  description: "",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title={contact.heroTitle}
        breadcrumbs={contact.heroBreadcrumbs}
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-teal-900 py-20 text-white">
        <div className="absolute inset-y-0 right-0 w-1/3 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_65%)] blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[minmax(0,0.9fr)_1fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sky-100 shadow-lg backdrop-blur">
              <h2 className="text-2xl font-semibold text-white">
                Visit our depots or request a callback
              </h2>
              <p className="mt-3 text-sm text-sky-100/80">
                Stop by our Hyderabad locations or share project details through the form and we&apos;ll line up the right inventory.
              </p>
            </div>
            <ContactDetails />
          </div>
          <ContactForm />
        </div>
      </section>
      <MapsSection />
    </main>
  );
}
