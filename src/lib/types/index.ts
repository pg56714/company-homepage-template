export type NavLinkType = {
	name: string;
	url: string;
};

export interface SocialLinkType {
	icon: string;
	url: string;
}

export type CTAType = {
	title: string;
	url: string;
	sameTab?: boolean;
};

export type StringKeyValueType = {
	[link: string]: string;
};

export type Direction = "up" | "right" | "down" | "left";

export type SoftwareSkillType = { name: string; icon: string };

export type BreakpointType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
