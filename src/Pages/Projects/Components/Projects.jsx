import { BiSearch } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import ProjectCard from "../../../Global/ProjectCard";
import { projects as rawProjects } from "../../../data/projects";
import { AnimatePresence, useInView } from "framer-motion";

const Projects = () => {
	const [projects, setProjects] = useState(rawProjects)
	const [keyword, setKeyword] = useState("")

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		const projects = rawProjects.filter((project) => {
			return (
				project.Title.toLowerCase().includes(keyword) ||
				project.Techstack.toLowerCase().includes(keyword) || project.Library.toLowerCase().includes(keyword)
			);
		});

		setTimeout(() => setProjects(projects), 500)

	}, [keyword])

	return (
		<section ref={ref} className="flex flex-col items-center mx-auto gap-5 pt-10 w-full">
			<div className="flex xl:w-96 bg-slate-50 ring-1 ring-gray-300 rounded-full">
				<input
					className="w-full focus:outline-none bg-transparent rounded-full px-5 py-2"
					type="text"
					name="search"
					aria-label="Search"
					placeholder="Search"
					onChange={(e) => setKeyword(e.target.value.toLowerCase())}
				/>

				<button className="text-gray-300 px-5">
					<BiSearch size={25} />
				</button>
			</div>

			<div name="projects" className="min-h-screen pb-14 flex flex-col">
				<div className="grid grid-cols-3 gap-10 m-8">

					<AnimatePresence mode="popLayout">
						{projects.reverse().map((project, key) => {
							return <ProjectCard key={key} project={project} styles={{}} initials={{ translateY: "20%", opacity: 0 }} />;
						})}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Projects;
