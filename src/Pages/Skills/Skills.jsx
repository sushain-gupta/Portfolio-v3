import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skills";

const Skills = () => {
	return (
		<section className="py-28 flex flex-col justify-center items-center rounded-3xl">
			<div className="mx-auto flex flex-col items-center">
				<h2 className="heading text-4xl font-bold">My Skills</h2>
				<p className="text-lg">
					Tiles in{" "}
					<span className="text-sky-500 bg-sky-100/70 px-1.5 rounded-lg">
						blue
					</span>{" "}
					are some of my major skills.
				</p>
			</div>

			<div className="mx-auto w-max grid grid-cols-6 gap-5 rounded-3xl my-10">
				{skills.map((skill, key) => {
					return (
						<SkillCard
							key={key}
							skillIcon={skill.skillIcon}
							major={skill.major}
							skillName={skill.skillName}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Skills;
