import { socialLinks } from "@/lib/content/portfolio";
import type { SocialSectionType } from "@/lib/types/sections";

export const socialSection: SocialSectionType = {
	socialLinks: [
		{
			icon: "custom:x",
			url: socialLinks.twitter,
		},
		{
			icon: "lucide:linkedin",
			url: socialLinks.linkedin,
		},
		// {
		//   icon: "lucide:facebook",
		//   url: socialLinks.facebook,
		// },
		// {
		//   icon: "mdi:instagram",
		//   url: socialLinks.instagram,
		// },
		// {
		//   icon: "tabler:brand-github",
		//   url: socialLinks.github,
		// },
	],
};
