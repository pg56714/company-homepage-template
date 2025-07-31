import XIcon from "@/components/ui/Icons";

import type { SVGProps } from "react";

export const iconMap: Record<
	string,
	(props: SVGProps<SVGSVGElement>) => JSX.Element
> = {
	"custom:x": XIcon,
};
