import { contactSection } from "@/lib/content/contact";

import { Button, Wrapper } from "@/components";

import { getSectionAnimation } from "@/styles/animations";

const Contact = () => {
	const { subtitle, title, links } = contactSection;

	return (
		<Wrapper
			id="contact"
			className="max-w-xl mx-auto text-center !py-16 md:!py-24 mb-20 md:mb-32"
			{...getSectionAnimation}
		>
			<p className="mb-5 font-mono text-sm capitalize text-accent">
				{subtitle}
			</p>
			<h2 className="heading-secondary !mb-5">{title}</h2>

			<div className="flex flex-col items-center gap-4 mt-12 sm:flex-row sm:justify-center">
				{links.map(({ label, href }, i) => (
					<Button key={i} type="link" size="lg" href={href}>
						{label}
					</Button>
				))}
			</div>
		</Wrapper>
	);
};

export default Contact;
