"use client";
import { Wrapper } from "@/components";
import { getSectionAnimation } from "@/styles/animations";

const partnerSvgs = [
	"#FECACA",
	"#BBF7D0",
	"#BFDBFE",
	"#FDE68A",
	"#C7D2FE",
	"#F9A8D4",
];

const Partners = () => {
	return (
		<Wrapper id="partners" {...getSectionAnimation}>
			<h2 className="mb-12 text-5xl font-light leading-tight text-center text-slate-900 dark:text-slate-200">
				Our <span className="text-accent">Partners</span>
			</h2>

			<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-16">
				{partnerSvgs.map((color, idx) => (
					<div key={idx} className="flex items-center justify-center h-20">
						<svg width="120" height="80" viewBox="0 0 120 80" fill="none">
							<rect width="120" height="80" rx="16" fill={color} />
							<text
								x="50%"
								y="50%"
								textAnchor="middle"
								dy=".3em"
								fontSize="22"
								fill="#6B7280"
							>
								PARTNER
							</text>
						</svg>
					</div>
				))}
			</div>
		</Wrapper>
	);
};

export default Partners;
