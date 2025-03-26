import React from "react";
import { BsQuote } from "react-icons/bs";

const TestimonialCard = ({ testimonial }) => {
	return (
		<div className="flex flex-col items-center h-full p-4 mx-auto my-auto overflow-hidden text-center ring-0 ring-gray-200 sm:w-96 rounded-3xl bg-slate-100 bg-gradient-to-br from-gray-50 via-violet-50 to-gray-100">
			<div className="relative">
				<div
					className={`${testimonial.type === "client" ? "bg-emerald-200" : testimonial.type === "colleagues" ? "bg-violet-200" : "bg-blue-200"
						} ${testimonial.profile && "overflow-hidden"
						} w-20 h-20 inline-flex items-center justify-center rounded-full  mb-5 flex-shrink-0`}
				>
					<img
						className="object-cover w-full h-full p-1 rounded-full"
						src={
							testimonial.profile
								? testimonial.profile
								: testimonial.gender.toLowerCase() === "male"
									? "https://res.cloudinary.com/dkezwrb3a/image/upload/sushain/Portfolio/testimonials/Number117_vnezod.svg"
									: "https://res.cloudinary.com/sushain/image/upload/v1694551283/Portfolio/testimonials/Number117_io2wji.svg"
						}
						alt="pfp"
					/>
				</div>

				<div className="absolute right-0 w-5 h-5 overflow-hidden bottom-5">
					<img
						className="object-cover w-full h-full"
						src="https://res.cloudinary.com/sushain/image/upload/v1725738488/india_zkbhzr.png"
						alt="flag"
					/>

				</div>
			</div>

			<div className="mb-3">
				<h2 className="font-semibold text-gray-900">
					{testimonial.name}
				</h2>

				<p className="text-sm text-gray-400">{testimonial.occupation}</p>
			</div>

			<div className="flex p-2 leading-relaxed text-center">
				<div>
					<BsQuote />
				</div>

				<p className="px-2 line-clamp-5 text-sm">{testimonial.feedback}</p>

				<div className="mt-auto">
					<BsQuote className="rotate-180" />
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
