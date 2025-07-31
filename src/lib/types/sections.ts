import type { CTAType, NavLinkType, SocialLinkType } from ".";

export interface Section {
	title: string;
}

export interface NavbarSectionType {
	navLinks: NavLinkType[];
	cta: CTAType;
}

export interface HeroSectionType extends Section {
	subtitle?: string;
	tagline: string[];
	description?: string;
	specialText?: string;
	cta?: CTAType & {
		hideInDesktop?: boolean;
	};
}

export interface AboutSectionType extends Section {
	list: {
		title: string;
		items: string[];
	};
	img: string;
}

export interface SkillType {
	icon: string;
	title: string;
	desc: string;
}

export interface SkillsSectionType extends Section {
	services: SkillType[];
}

export interface ContactSectionType extends Section {
	subtitle?: string;
	links: { label: string; href: string }[];
}

export interface SocialSectionType {
	socialLinks: SocialLinkType[];
}

export interface FooterSectionType extends Section {
	link?: string;
}
