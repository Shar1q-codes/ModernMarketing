import type { Metadata } from "next";
import { BrochureSection } from "@/components/sections/BrochureSection";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectConstructionGallery } from "@/components/sections/ProjectConstructionGallery";
import { ProjectMaterials } from "@/components/sections/ProjectMaterials";
import { ProjectsOverview } from "@/components/sections/ProjectsOverview";
import { siteContent } from "@/data/siteContent";

const projects = siteContent.projects;

export const metadata: Metadata = {
  title: "M.M.A - Projects",
  description: "",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageHero
        title={projects.heroTitle}
        breadcrumbs={projects.heroBreadcrumbs}
      />
      <ProjectsOverview />
      <ProjectConstructionGallery />
      <ProjectMaterials />
      <BrochureSection />
    </main>
  );
}
