import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./Components/TestimonialCard";
import { testimonials } from "../../data/Testimonials";

const Testimonials = () => {
	return (
		<section className="py-28 relative ">
			<div className="absolute w-full h-full top-0 -z-20 bg-homeBg"></div>
			<div className="bg-gradient-to-t from-white via-white/95 to-white absolute w-full h-full top-0 -z-10"></div>

			<div className="mx-auto flex flex-col items-center">
				<h2 className="heading text-4xl font-bold">Testimonial</h2>
				<p className="text-lg flex gap-2">
					Discover Feedback from{" "}
					<span className="bg-green-100 px-1 font-semibold rounded-lg">
						Clients
					</span>{" "}
					and{" "}
					<span className="bg-sky-100 px-1 font-semibold rounded-lg">
						Colleagues
					</span>{" "}
					{/* <b>Colleagues</b> */}
				</p>
			</div>

			<Marquee
				autoFill={true}
				gradient={true}
				pauseOnHover={true}
				className="my-10"
			>
				{testimonials.map((testimonial, key) => {
					return <TestimonialCard key={key} testimonial={testimonial} />;
				})}
			</Marquee>
		</section>
	);
};

export default Testimonials;
