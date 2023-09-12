import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import ProjectCard from "./Components/ProjectCard";

const RecentProjects = () => {
	return (
		<section className="py-28 flex flex-col justify-center">
			<div className="mx-auto flex flex-col items-center">
				<h2 className="heading text-4xl font-bold">My recent work</h2>
				<p className="text-lg flex gap-2">
					Here are a few past projects I've worked on. Want to see more?{" "}
					<Link className="flex group items-center text-sky-500 hover:text-sky-600 hover:underline text-base">
						View More <IoIosArrowForward className="text-sm" />
					</Link>
				</p>
			</div>

			<div className="grid grid-cols-3 gap-10 m-8">
				{[...projects]
					.reverse()
					.slice(0, 3)
					.map((project, key) => {
						return <ProjectCard key={key} project={project} />;
					})}
			</div>
		</section>
	);
};

export default RecentProjects;
