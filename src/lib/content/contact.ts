import { author } from "@/lib/content/portfolio";
import type { ContactSectionType } from "@/lib/types/sections";

export const contactSection: ContactSectionType = {
  title: "get in touch",
  subtitle: "what's next",
  links: [
    { label: "Email", href: `mailto:${author.email}` },
    { label: "X", href: "https://x.com/yourcompany" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/your-company/",
    },
  ],
};
