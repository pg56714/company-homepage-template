"use client";

import { useState } from "react";
import { Link, ListItem } from "@/components";
import useWindowWidth from "@/lib/hooks/use-window-width";
import { getBreakpointsWidth, getId } from "@/lib/utils/helper";

type Props = {
	experiences: {
		role: string;
		company: string;
		companyUrl: string;
		started: string;
		upto: string;
		tasks: string[];
	}[];
};

const TabList = ({ experiences }: Props) => {
	const [activeExperience, setActiveExperience] = useState(0);
	const windowWidth = useWindowWidth();

	const { role, company, companyUrl, started, upto, tasks } =
		experiences[activeExperience];

	const sm = getBreakpointsWidth("sm");

	const sliderStyle =
		windowWidth === 0 || windowWidth <= sm
			? {
					left: `calc(${activeExperience}*120px)`,
				}
			: {
					top: `calc(${activeExperience}*2.5rem)`,
				};

	return (
		<div className="flex flex-col sm:flex-row text-sm md:text-base gap-6 md:gap-10 min-h-[250px]">
			{/* Sidebar */}
			<div className="font-mono text-xs sm:text-sm relative flex justify-start sm:flex-col overflow-scroll sm:overflow-auto sm:min-w-[180px]">
				{experiences.map(({ company }, i) => (
					<button
						type="button"
						key={getId()}
						className={`h-10 min-w-[120px] sm:w-auto sm:px-5 sm:!text-left capitalize hover:bg-accent-light hover:text-accent focus:outline-none focus:bg-accent-light focus:text-accent ${
							i === activeExperience ? "text-accent" : ""
						}`}
						onClick={() => setActiveExperience(i)}
					>
						{company}
					</button>
				))}
				{/* Slider */}
				<div className="absolute h-0.5 w-full sm:w-0.5 sm:h-full rounded-full bottom-0 sm:inset-0 left-0 bg-dark-3" />
				<div
					style={sliderStyle}
					className="absolute h-0.5 w-[120px] sm:w-0.5 sm:h-10 rounded-full bg-accent bottom-0 left-0 sm:inset-0 transition-all duration-250 delay-100 in-scroll"
				/>
			</div>

			<div key={getId()} className="p-1 space-y-5">
				<div className="space-y-1">
					<h3 className="text-lg font-medium capitalize text-dark-2">
						{role}{" "}
						<Link href={companyUrl} target="_blank" className="text-accent">
							@{company}
						</Link>
					</h3>
					<p className="font-mono text-xs capitalize">
						{started} - {upto}
					</p>
				</div>

				<ul className="space-y-2">
					{tasks.map((task) => (
						<ListItem key={getId()}>{task}</ListItem>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TabList;
