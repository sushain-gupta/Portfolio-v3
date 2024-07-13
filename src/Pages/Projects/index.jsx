import React from "react";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import ProjectLibHeader from "./Components/ProjectLibHeader";
import { Helmet } from "react-helmet";

const ProjectLibrary = () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

	return (
		<section className="relative ">
			<Helmet>
				<title>Project Library | Sushain Gupta</title>
				<meta name="description" content="Explore the diverse projects of Sushain Gupta, an India-based freelancer and web developer. From frontend to full stack, discover the innovative and modern web development projects I have worked on. Open to new opportunities and collaborations." />

			</Helmet>

			<ProjectLibHeader />

			<div className="relative flex flex-col gap-5 px-7 sm:px-10 md:px-14 3xl:px-24">
				<Home />
				<Projects />
			</div>
		</section >
	);
};

export default ProjectLibrary;
