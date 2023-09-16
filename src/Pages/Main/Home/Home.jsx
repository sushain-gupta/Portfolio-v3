import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import { Link } from "react-scroll";
import memoji from "../../../data/assets/svg/homeMemoji.svg"

const Home = () => {
	return (
		<section
			tabIndex={1}
			name="home"
			className="min-h-screen pt-10 flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-20 text-sm sm:text-base md:text-xl lg:text-base xl:text-lg 2xl:text-xl justify-center lg:justify-around focus:outline-none text-center lg:text-start"
		>
			<div className="lg:w-1/2">
				<h1 className="heading text-4xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-black text-gray-700">
					Hey, I'm{" "}
					<span className="from-emerald-400 via-emerald-400 to-sky-500 bg-gradient-to-r bg-clip-text text-transparent">
						Sushain
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
					className="mx-auto lg:mx-0 flex items-center my-5 cursor-pointer group w-max bg-gradient-to-br from-emerald-400 to-sky-500 hover:bg-gradient-to-bl focus:bg-gradient-to-bl px-4 py-1.5 xl:py-2 rounded-lg text-slate-50 focus:outline-none focus:outline-slate-500"
				>
					About me{" "}
					<MdKeyboardArrowRight className="group-hover:translate-x-1 group-focus:translate-x-1 duration-300 mt-1" />
				</Link>
			</div>

			<div
				className="w-2/3 sm:w-1/2 xl:w-1/3 overflow-hidden" style={{
					borderRadius: "55% 45% 42% 58% / 55% 59% 41% 45%"
				}} >
				<img
					className="w-full h-full object-cover"
					src={memoji}
					alt="pfp"
				/>
				{/* <img
					className="w-full h-full object-cover"
					src={"https://res.cloudinary.com/dkezwrb3a/image/upload/v1674477439/Portfolio/profile-Image.jpg"}
					alt="pfp"
				/> */}
			</div>
		</section>
	);
};

export default Home;
