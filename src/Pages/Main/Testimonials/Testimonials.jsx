import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./Components/TestimonialCard";
import { testimonials } from "../../../data/Testimonials";
import arrow from "../../../data/assets/png/arrow.png";

const Testimonials = () => {
	return (
		<section name="testimonials" className="relative py-28">
			<div className="absolute top-0 w-full h-full -z-20 bg-homeBg"></div>
			<div className="absolute top-0 w-full h-full bg-gradient-to-t from-white via-white/95 to-white -z-10"></div>

			<div className="flex flex-col items-center mx-auto">
				<h2 className="text-4xl font-bold heading">Testimonial</h2>
				<p className="flex gap-2">
					Discover Feedback from{" "}
					<span className="px-1 font-semibold bg-green-100 rounded-lg">
						Clients
					</span>{" "}
					and{" "}
					<span className="px-1 font-semibold rounded-lg bg-sky-100">
						Colleagues
					</span>{" "}
				</p>
			</div>

			<Marquee
				autoFill={true}
				gradient={true}
				pauseOnClick={true}
				className="my-10"
			>
				{testimonials.map((testimonial, key) => {
					return <TestimonialCard key={key} testimonial={testimonial} />;
				})}
			</Marquee>

			<div className="absolute flex-col items-center hidden xl:flex left-20 top-24 -rotate-12 text-slate-400">
				<p>
					{"<"}Hold to read {"/>"}
				</p>

				<img
					className="w-20 ml-10 opacity-20 rotate-[46deg] my-5"
					src={arrow}
					alt="arrow vector"
				/>
			</div>
		</section>
	);
};

export default Testimonials;
