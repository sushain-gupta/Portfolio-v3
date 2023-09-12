import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";

const Home = () => {
	return (
		<section className="min-h-screen flex items-center gap-20 text-xl">
			<div>
				<h1 className="heading text-7xl font-black text-gray-700">
					Hey, I'm{" "}
					<span className="from-emerald-400 via-emerald-400 to-sky-500 bg-gradient-to-r bg-clip-text text-transparent">
						Sushain
					</span>
				</h1>

				<p className="pt-2">
					An India-based freelancer who's into web development and open to work
					as a <span className="italic font-bold">front-end developer</span>.
				</p>

				<button className="flex items-center hover:text-sky-500 my-5 duration-300">
					About me <MdKeyboardArrowRight />
				</button>
			</div>

			<div className="w-1/2">
				<img
					className="w-full h-full object-cover"
					src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1678132189/Portfolio/profImg-min_he433k.png"
					alt=""
				/>
			</div>
		</section>
	);
};

export default Home;
