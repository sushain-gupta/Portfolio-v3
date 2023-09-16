import React from "react";
import memoji from "../../../data/assets/png/aboutMemoji.png";

const Home = () => {
	return (
		<section
			name="home"
			className="min-h-screen pt-10 flex items-center gap-20 text-lg"
		>
			<div>
				<h1 className="heading text-5xl font-black text-gray-700">
					Welcome to my{" "}
					<span className="from-emerald-400 via-emerald-400 to-sky-500 bg-gradient-to-r bg-clip-text text-transparent">
						project library
					</span>
				</h1>

				<p className="pt-2 w-4/5">
					This library includes my major as well as minor projects. Making your project{" "}
					<span className="bg-emerald-100 px-1 rounded-lg">search</span> easy, based on title, techstack or library used.
				</p>
			</div>

			<div className="w-1/2">
				<img className="w-full h-full object-cover" src={memoji} alt="pfp" />
			</div>
		</section>
	);
};

export default Home;
