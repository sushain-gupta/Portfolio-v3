import { BiSearch } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import ProjectCard from "../../../Global/ProjectCard";
import { projects as rawProjects } from "../../../data/projects";
import { AnimatePresence } from "framer-motion";

const Projects = () => {
	const [projects, setProjects] = useState(rawProjects)
	const [keyword, setKeyword] = useState("")


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
		<section className="flex flex-col items-center w-full gap-5 p-10 py-20 mx-auto">
			<div className="flex rounded-full xl:w-96 bg-slate-50 ring-1 ring-gray-300">
				<input
					className="w-full px-5 py-2 bg-transparent rounded-full focus:outline-none"
					type="text"
					name="search"
					aria-label="Search"
					placeholder="Search"
					onChange={(e) => setKeyword(e.target.value.toLowerCase())}
				/>

				<button className="px-5 text-gray-300">
					<BiSearch size={25} />
				</button>
			</div>

			<div className="grid grid-cols-1 gap-6 my-8 lg:grid-cols-2 xl:grid-cols-3 lg:gap-10 lg:m-8">

				<AnimatePresence mode="popLayout">
					{[...projects].reverse().map((project, key) => {
						return <ProjectCard key={key} project={project} styles={{}} initials={{ translateY: "20%", opacity: 0 }} />;
					})}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default Projects;
