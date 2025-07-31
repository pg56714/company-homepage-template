import { Variants } from "framer-motion";
import { slideUp } from ".";

export const sectionVariants = slideUp({
	delay: 0.5,
	duration: 1.75,
	offset: 50,
});

export const getSectionAnimation = {
	variants: sectionVariants,
	initial: "hidden",
	whileInView: "show",
	viewport: { once: true },
};
