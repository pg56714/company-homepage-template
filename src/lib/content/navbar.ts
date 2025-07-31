import type { NavbarSectionType } from "@/lib/types/sections";

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: "home", url: "/#hero" },
    { name: "contact", url: "/#contact" },
  ],
  cta: {
    title: "career",
    url: "https://www.linkedin.com/company/your-company/jobs/",
  },
};
