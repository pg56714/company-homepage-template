import type { SVGProps } from "react";
import XIcon from "@/components/ui/Icons";

export const iconMap: Record<
	string,
	(props: SVGProps<SVGSVGElement>) => JSX.Element
> = {
	"custom:x": XIcon,
};
