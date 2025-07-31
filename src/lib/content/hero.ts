import type { HeroSectionType } from "@/lib/types/sections";

export const heroSection: HeroSectionType = {
  subtitle: "Welcome to",
  title: "Your Company.",
  // tagline: "Your tagline here.",
  tagline: ["Innovation first.", "Quality driven."],
  description:
    "We are a modern company focused on delivering exceptional services and innovative solutions to our clients worldwide.",
  // specialText: "Now open to partnerships",
  cta: {
    title: "connect with us",
    url: "https://www.linkedin.com/company/your-company/",
    hideInDesktop: true,
  },
};
