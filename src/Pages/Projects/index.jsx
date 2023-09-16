import React from "react";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import ProjectLibHeader from "./Components/ProjectLibHeader";


const ProjectLibrary = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

	return (
		<section className="relative ">
			<ProjectLibHeader />

			<div className="relative flex flex-col gap-5 px-7 sm:px-10 md:px-14 3xl:px-24">
				<Home />
				<Projects />
			</div>

		</section >
	);
};

export default ProjectLibrary;
