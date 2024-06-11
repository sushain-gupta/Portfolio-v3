import React from "react";
import { about } from "../../../data/About";
import memoji from "../../../data/assets/memoji2.png"

const Home = () => {
	return (
		<section
			tabIndex={1}
			name="home"
			className="flex flex-col-reverse items-center justify-center min-h-screen gap-10 pt-10 text-sm lg:flex-row lg:gap-20 sm:text-base md:text-xl lg:text-base xl:text-lg 2xl:text-xl lg:justify-around focus:outline-none lg:text-start"
		>
			<div className="lg:w-1/2">
				<h1 className="text-4xl font-black text-gray-700 heading sm:text-4xl md:text-4xl 2xl:text-4xl md:whitespace-nowrap lg:whitespace-normal">
					Welcome to my{" "}
					<span className="text-transparent from-emerald-400 via-emerald-400 to-sky-500 bg-gradient-to-r bg-clip-text">
						project library
					</span>
				</h1>

				<p className="pt-2 text-justify">
					This library includes my major as well as minor projects. Making your project{" "}
					<span className="px-1 rounded-lg bg-emerald-100">search</span> easy, based on title, techstack or library used.
				</p>
				<span className="sr-only">contact email - sushain.work@gmail.com</span>
			</div>

			<div
				className="w-2/3 overflow-hidden sm:w-1/2 xl:w-1/3" style={{
					borderRadius: "55% 45% 42% 58% / 55% 59% 41% 45%"
				}} >
				<img
					className="object-cover w-full h-full"
					src={about.secondaryProfileImage ?? memoji}
					alt="pfp"
				/>
			</div>
		</section>
	);
};

export default Home;
