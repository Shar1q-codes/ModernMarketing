# Codex Agent Upgrade Guidelines

## Mission
- Modernize the Modern Marketing Associates website while retaining all existing copy contained in `reference/modernmarketing_site_content.html`.
- Ensure every textual element from the original site is preserved verbatim unless the client supplies new wording.

## Execution Protocol
- Before starting any task or subtask, review this file and confirm the upcoming work aligns with the documented workflow.
- After completing each step, revisit these instructions to plan the next action and validate continued compliance.

## Workflow
1. Parse and catalog the content from the archive file, grouping sections by page (`index`, `about`, `services`, `projects`, `contact`).
2. Map each content block to the Next.js route or component that should render it. Prefer modular, reusable components (e.g., hero, testimonials, contact form).
3. Rebuild layouts using responsive, accessible markup. Adopt Tailwind CSS or the project’s existing design system for styling consistency.
4. Replace static HTML assets (images, icons) with locally hosted equivalents or optimized next/image imports.
5. Validate that navigation covers all archived pages and that page metadata (title, meta description, OG tags) mirrors the original.
6. Maintain the contact form component so it is ready for EmailJS integration: ensure inputs keep stable `name` attributes, prevent destructive changes to the submission handler scaffold, and capture any new environment variables required for the service.
7. Prior to running dev or build scripts, clear stale Next.js artifacts. The npm scripts already invoke `rimraf .next`—do not remove this safeguard, as it prevents Windows/OneDrive sync conflicts from leaving orphaned bundles.

## Component Assembly
- Treat every page as a composition of section-level React components rather than a monolithic file.
- Keep hero, services, testimonials, project highlights, and contact sections as discrete components that can be reused or reordered across routes.
- Pass page-specific props or metadata from the page file, leaving components focused on presentation and content rendering.

## Quality Checks
- Run linting, type-checking, and integration tests relevant to UI routes.
- Compare rendered pages against the original archive to confirm no content is missing or duplicated.
- Confirm forms (especially contact forms) submit to the same endpoints or updated services approved by the client.

## Handoff
- Document any new environment variables, API keys, or CMS dependencies.
- Provide a change log summarizing functional improvements and visual updates while noting that original copy remains untouched.
