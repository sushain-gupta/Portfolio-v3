import React from "react";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";
import RecentProjects from "./Pages/Projects/RecentProjects";
import Experience from "./Pages/Experience/Experience";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Footer from "./Global/Footer";

const App = () => {
	return (
		<div className="text-gray-700 relative">
			<div className="absolute bg-homeBg bg-repeat animate-ltr-linear-infinite h-[120dvh] w-full -z-20"></div>
			<div className="absolute h-[120dvh] w-full -z-10 bg-gradient-to-b from-white/90 to-white"></div>

			<div className="px-24">
				<Home />
				<About />
				<Skills />
				<RecentProjects />
				<Experience />
			</div>
			<Testimonials />

			<Footer />
		</div>
	);
};

export default App;
