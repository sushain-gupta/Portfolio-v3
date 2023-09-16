import React, { useRef } from "react";
import SkillCard from "./SkillCard";
import { skills } from "../../../data/skills";
import { useInView } from "framer-motion";

const Skills = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section ref={ref} name="skills" className="flex flex-col items-center justify-center text-center py-28 rounded-3xl sm:text-start">
			<div className="flex flex-col items-center mx-auto">
				<h2 className="my-2 text-4xl font-bold heading">My Skills</h2>
				<p>
					Tiles in{" "}
					<span className="text-sky-500 bg-sky-100/70 px-1.5 rounded-lg">
						blue
					</span>{" "}
					are some of my major skills.
				</p>
			</div>

			<div className="grid grid-cols-3 gap-4 mx-auto my-10 w-max sm:grid-cols-3 md:grid-flow-col-4 lg:grid-cols-5 2xl:grid-cols-6 sm:gap-5 rounded-3xl">
				{skills.map((skill, key) => {
					return (
						<SkillCard
							key={key}
							num={key}
							isInView={isInView}
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
