import { IoIosArrowForward } from "react-icons/io";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { projects } from "../../../data/projects";
import ProjectCard from "../../../Global/ProjectCard";
import memoji from "../../../data/assets/png/projMemoji.png";
import { useInView } from "framer-motion";

const RecentProjects = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section ref={ref} name="projects" className="min-h-[50dvh] py-48 flex flex-col justify-center">
			<div className="mx-auto flex items-center relative">
				<div className="flex flex-col items-center">
					<h2 className="heading text-4xl font-bold">My recent work</h2>
					<p className="flex flex-col lg:flex-row gap-2 items-center text-center">
						Here are a few past projects I've worked on. Want to see more?{" "}
						<Link
							to="/projects"
							className="flex group items-center text-sky-500 hover:text-sky-600 hover:underline text-base"
						>
							View More <IoIosArrowForward className="text-sm" />
						</Link>
					</p>
				</div>

				<div className="absolute -right-36 -top-12 rotate-6 hidden xl:block">
					<img className="w-32 h-32" src={memoji} alt="" />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-10 my-8 lg:m-8">
				{[...projects]
					.reverse()
					.slice(0, 3)
					.map((project, key) => {
						return <ProjectCard key={key} project={project}
							styles={{
								transform: isInView ? "none" : "translateY(200px)",
								opacity: isInView ? 1 : 0,
								transition: `all ${key + 0.5}s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`
							}}
						/>;
					})}
			</div>
		</section>

	);
};

export default RecentProjects;
