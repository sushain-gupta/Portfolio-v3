import React from "react";
import { BsQuote } from "react-icons/bs";

const TestimonialCard = ({ testimonial }) => {
	return (
		<div className="p-4 my-2 mx-10 ring-0 ring-gray-200 w-[30dvw] h-[40dvh] flex flex-col text-center items-center rounded-3xl bg-slate-100 bg-gradient-to-br from-gray-50 via-violet-50 to-gray-100 overflow-hidden">
			<div className="relative">
				<div className="w-20 h-20 inline-flex items-center justify-center rounded-full overflow-hidden text-indigo-500 mb-5 flex-shrink-0 bg-indigo-200">
					<img
						className="w-full h-full object-cover"
						src={
							testimonial.profile ?? testimonial.gender.toLowerCase() === "male"
								? "https://res.cloudinary.com/dkezwrb3a/image/upload/v1694538229/Portfolio/testimonials/Number117_vnezod.svg"
								: "https://res.cloudinary.com/dkezwrb3a/image/upload/v1694551283/Portfolio/testimonials/Number117_io2wji.svg"
						}
						alt=""
					/>
				</div>

				<div className="w-5 h-5 right-0 bottom-5 absolute rounded-full overflow-hidden">
					<img
						className="w-full h-full object-cover"
						src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1694541361/Portfolio/flags/india-flag-icon_fpxlva.svg"
						alt="flag"
					/>
				</div>
			</div>

			<div className="mb-3">
				<h2 className="text-gray-900 text-lg font-semibold">
					{testimonial.name}
				</h2>

				<p className="text-gray-400 text-sm">{testimonial.occupation}</p>
			</div>

			<div className="flex leading-relaxed text-base p-2">
				<div>
					<BsQuote />
				</div>

				<p className="px-2 line-clamp-3">{testimonial.feedback}</p>

				<div className="mt-auto">
					<BsQuote className="rotate-180" />
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
