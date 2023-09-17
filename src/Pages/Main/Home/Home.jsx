import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { Link } from "react-scroll";
import { about } from "../../../data/About";

const Home = () => {
	return (
		<section
			tabIndex={1}
			name="home"
			className="flex flex-col-reverse items-center justify-center min-h-screen gap-10 pt-10 text-sm text-justify lg:flex-row lg:gap-20 sm:text-base md:text-xl lg:text-base xl:text-lg 2xl:text-xl lg:justify-around focus:outline-none lg:text-start"
		>
			<div className="lg:w-1/2">
				<h1 className="text-4xl font-black text-gray-700 heading sm:text-5xl md:text-6xl lg:text-4xl xl:text-6xl 2xl:text-7xl text-start">
					Hey, I'm{" "}
					<span className="text-transparent from-emerald-400 via-emerald-400 to-sky-500 bg-gradient-to-r bg-clip-text">
						{about.firstName}
					</span>
				</h1>

				<p className="pt-2">
					An India-based freelancer who's into web development and open to work
					as a <span className="font-bold">front-end developer</span>.
				</p>

				<Link
					tabIndex={2}
					to="about"
					spy={true}
					smooth={true}
					className="lg:mx-0 flex items-center my-5 cursor-pointer group w-max bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl focus:bg-gradient-to-bl px-4 py-1.5 xl:py-2 rounded-lg text-slate-50 focus:outline-none focus:outline-slate-500 text-base"
				>
					About me{" "}
					<MdKeyboardArrowRight className="mt-1 duration-300 group-hover:translate-x-1 group-focus:translate-x-1" />
				</Link>
			</div>

			<div
				className="w-2/3 overflow-hidden sm:w-1/2 xl:w-1/3" style={{
					borderRadius: "55% 45% 42% 58% / 55% 59% 41% 45%"
				}} >
				<img
					className="object-cover w-full h-full"
					src={about.primaryProfileImage}
					alt="pfp"
				/>
			</div>
		</section>
	);
};

export default Home;
