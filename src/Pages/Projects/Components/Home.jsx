import React from "react";
import memoji from "../../../data/assets/png/aboutMemoji.png";

const Home = () => {
	return (
		<section
			name="home"
			className="flex items-center min-h-screen gap-20 pt-10 text-lg"
		>
			<div>
				<h1 className="text-5xl font-black text-gray-700 heading">
					Welcome to my{" "}
					<span className="text-transparent from-emerald-400 via-emerald-400 to-sky-500 bg-gradient-to-r bg-clip-text">
						project library
					</span>
				</h1>

				<p className="w-4/5 pt-2">
					This library includes my major as well as minor projects. Making your project{" "}
					<span className="px-1 rounded-lg bg-emerald-100">search</span> easy, based on title, techstack or library used.
				</p>
			</div>

			<div className="w-1/2">
				<img className="object-cover w-full h-full" src={memoji} alt="pfp" />
			</div>
		</section>
	);
};

export default Home;
