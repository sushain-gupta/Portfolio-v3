import React from "react";
import { Link } from "react-scroll";
import { about } from "../../../data/About";
import { motion } from "framer-motion";

const Home = () => {
	const animationPlayed = sessionStorage.getItem('animationPlayed') || false;

	return (
		<section
			tabIndex={1}
			name="home"
			className="flex items-center justify-center h-screen pt-10 text-base lg:flex-row sm:text-lg md:text-xl lg:justify-around text-gray-500"
		>
			{/* <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 0.05 }}
				transition={animationPlayed ? {} : { duration: 2, delay: 4 }}
				className="bg-homeBg w-screen h-screen absolute -z-10 top-0 bg-cover bg-no-repeat" /> */}

			<div className="text-center">
				<motion.h1
					className="text-5xl font-black text-slate-950 heading sm:text-7xl lg:text-8xl xl:text-9xl"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={animationPlayed ? {} : { duration: 7 }}
				>
					Hey, I'm{" "}
					<motion.span
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={animationPlayed ? {} : { duration: 2, delay: 0.5 }}
					>
						<span className="bg-clip-text text-transparent bg-gradient-to-br from-emerald-500 to-emerald-950">
							{about.firstName}
						</span>
					</motion.span>
				</motion.h1>

				<motion.div
					className="h-1 bg-gray-500/25 my-5 mx-auto rounded-full"
					initial={{ width: "0px" }}
					animate={{ width: "6rem" }}
					transition={animationPlayed ? {} : { duration: 1.5, delay: 3 }}
				/>

				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={animationPlayed ? {} : { duration: 2, delay: 4 }}
				>
					<p className="w-full lg:w-2/3 mx-auto font-light">
						An India-based{" "}
						<span className="text-emerald-700">web developer</span> known for
						crafting compelling digital experiences with responsive designs and
						immersive UI/UX.
					</p>

					<div className="mt-2">
						Wait, but{" "}
						<Link
							tabIndex={2}
							to="about"
							spy={true}
							smooth={true}
							className="cursor-pointer w-max focus:text-sky-600 text-sky-500 rounded-lg outline-none text-base group"
						>
							<span className="bg-left-bottom bg-gradient-to-r from-emerald-100 to-sky-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out pb-1">
								who am I{" "}
							</span>
						</Link>
						exactly?
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Home;
