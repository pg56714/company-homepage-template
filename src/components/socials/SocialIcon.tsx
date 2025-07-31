import { iconMap } from "@/lib/content/icons";
import type { SocialLinkType } from "@/lib/types";
import { Icon } from "@iconify/react";
import SocialLink from "./SocialLink";

const SocialIcon = ({ icon, url }: SocialLinkType) => {
	const CustomIcon = iconMap[icon];

	return (
		<li>
			<SocialLink href={url}>
				{CustomIcon ? (
					<CustomIcon className="w-6 h-6 text-current" />
				) : (
					<Icon icon={icon} width={24} height={24} className="text-current" />
				)}
			</SocialLink>
		</li>
	);
};

export default SocialIcon;
