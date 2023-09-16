import React, { useRef } from "react";
import SkillCard from "./SkillCard";
import { skills } from "../../../data/skills";
import { useInView } from "framer-motion";

const Skills = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section ref={ref} name="skills" className="py-28 flex flex-col justify-center items-center rounded-3xl text-center sm:text-start">
			<div className="mx-auto flex flex-col items-center">
				<h2 className="heading text-4xl font-bold my-2">My Skills</h2>
				<p>
					Tiles in{" "}
					<span className="text-sky-500 bg-sky-100/70 px-1.5 rounded-lg">
						blue
					</span>{" "}
					are some of my major skills.
				</p>
			</div>

			<div className="mx-auto w-max grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-5 rounded-3xl my-10">
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
