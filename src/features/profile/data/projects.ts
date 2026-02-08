import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "alee-live",
    title: "alee.live - Personal Portfolio",
    period: {
      start: "2025",
    },
    link: "https://aleee.tech",
    skills: [
      "Next.js",
      "TypeScript",
      "Performance Optimization",
      "SEO",
      "Accessibility",
      "Vercel",
      "CI/CD",
      "Analytics",
    ],
    description: `Personal portfolio engineered as a production-grade Next.js site focused on performance, discoverability, and clear hiring signals.
- Implemented SSR/ISR, asset optimization, and modern image delivery to maximize load speed and Lighthouse scores.
- Structured metadata and semantic markup to improve organic search visibility and link-rich previews.
- Built CI/CD pipeline with automated builds and previews for safe content updates.
- Prioritized accessibility and responsive UX to ensure consistent experience across devices.
- Integrated analytics and contact flows to convert visitors into leads for consultancy and hiring.`,
    isExpanded: true,
  },
  {
    id: "orbithk",
    title: "OrbitHK - Activity Marketplace",
    period: {
      start: "2025",
    },
    link: "https://orbithk.com/",
    skills: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "WebSockets",
      "AWS S3",
    ],
    description: `Marketplace platform architected for scalability and secure transactions — connecting providers and customers with a focus on conversion and reliability.
- Designed RESTful and realtime APIs (NestJS + WebSockets) to support listings, bookings, and live messaging at scale.
- Implemented secure payment flows with Stripe and escrow mechanics to protect both parties and reduce disputes.
- Built verification, reviews, and moderation systems to improve trust and platform retention.
- Modeled relational data for efficient search and filtering; used Redis for caching high-traffic queries.
- Delivered admin dashboards and operational tooling for analytics, content moderation, and dispute resolution.`,
    isExpanded: true,
  },
  {
    id: "zaid-fashion-studio",
    title: "Zaid Fashion Studio",
    period: {
      start: "2025",
    },
    link: "https://zaidfashionstudio.com/",
    skills: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Stripe",
      "Inventory Systems",
      "SSR/SEO",
      "Tailwind CSS",
      "Vercel",
    ],
    description: `E-commerce build focused on conversion, reliable order processing, and operational efficiency.
- Implemented secure checkout flows and payment reconciliation using Stripe integrated with Supabase for transactional data.
- Built product catalog, variants, and inventory synchronization to prevent oversells and simplify operations.
- Optimized pages for SEO and mobile conversions with SSR and performance tuning.
- Added order management and reporting tools for fulfillment and customer support handoffs.
- Delivered maintainable UI components and developer workflows to accelerate feature delivery.`,
    isExpanded: false,
  },
  {
    id: "super-angels",
    title: "Super Angels - Angel Investors Platform",
    period: {
      start: "2024",
    },
    link: "https://super-angels.eu/",
    skills: [
      "Astro",
      "TypeScript",
      "WebGL",
      "Performance Optimization",
      "Static Generation",
      "UX",
      "Accessibility",
      "Design Systems",
    ],
    description: `Investor platform combining high-performance static delivery with rich, interactive visual storytelling to engage stakeholders.
- Used static generation for fast page loads and SEO while adding progressive WebGL effects for branded engagement.
- Designed data-driven portfolio and discovery pages to surface high-quality startups and investor metrics.
- Prioritized accessibility and performance to support investor workflows and due diligence without friction.
- Implemented analytics and lead-capture to convert interest into introductions and deal flow.`,
    isExpanded: false,
  },
  {
    id: "smomid",
    title: "Smomid - Musician Portfolio & Blog",
    period: {
      start: "2024",
    },
    link: "https://smomid.com/",
    skills: [
      "Next.js",
      "TypeScript",
      "Cloudinary",
      "CMS",
      "DigitalOcean",
      "SEO",
      "Media Optimization",
      "Newsletter",
    ],
    description: `Content-first portfolio and blog optimized for media delivery, discoverability, and audience growth.
- Engineered media pipelines with Cloudinary and CDN delivery to reduce bandwidth and improve playback reliability.
- Built an editor-first CMS and publishing workflow enabling non-technical content owners to publish quickly and safely.
- Implemented SEO and structured data to increase organic reach and newsletter signups.
- Added analytics and engagement hooks to measure content performance and iterate on audience growth strategies.`,
    isExpanded: false,
  },
];
