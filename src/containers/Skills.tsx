"use client";
import { Wrapper } from "@/components";
import SkillsCard from "@/components/skills/Skill";
import { skillsSection } from "@/lib/content/skills";
import { getSectionAnimation } from "@/styles/animations";

const Skills = () => {
	const { title, services } = skillsSection;

	return (
		<Wrapper id="skills" {...getSectionAnimation}>
			<h2 className="mb-12 text-5xl font-light leading-tight text-center text-slate-900 dark:text-slate-200">
				{title.split(" ")[0]}{" "}
				<span className="text-accent">
					{title.split(" ").slice(1).join(" ")}
				</span>
			</h2>

			{/* <div className="grid max-w-5xl grid-cols-1 gap-12 mx-auto text-left md:grid-cols-2 text-slate-900 dark:text-slate-200">
        {services.map((item, idx) => (
          <SkillsCard key={idx} {...item} />
        ))}
      </div>
    </Wrapper>
  );
}; */}
			<div className="grid max-w-5xl grid-cols-1 gap-12 mx-auto text-left md:grid-cols-2 text-slate-900 dark:text-slate-200">
				{services.map((item, idx) => (
					<SkillsCard key={idx} {...item} idx={idx} />
				))}
			</div>
		</Wrapper>
	);
};

export default Skills;
