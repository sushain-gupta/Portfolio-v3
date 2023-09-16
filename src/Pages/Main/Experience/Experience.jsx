import { useInView } from "framer-motion";
import React, { useRef } from "react";

const Experience = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section
			ref={ref}
			style={{
				transform: isInView ? "none" : "translateY(100px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
			}}
			name="experience"
			className="pb-24 items-center flex flex-col justify-center"
		>
			<div class="sm:bg-gray-100 rounded-3xl">
				<div class="container max-w-5xl sm:px-4 py-12 mx-auto">
					<div class="gap-6 mx-4 flex flex-col lg:flex-row">
						<div class="">
							<div class="sm:text-left mb-5 sm:mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md sm:before:mx-0 before:bg-emerald-400">
								<h3 class="text-3xl font-semibold">
									{" "}
									<h2 className="heading text-3xl xl:text-4xl font-bold">Experience</h2>
								</h3>
								<span class="text-sm font-bold text-gray-400">
									These are the compaines where I have previously worked.
								</span>
							</div>
						</div>
						<div class="relative sm:px-4 space-y-6">
							<div class="space-y-12 relative pl-4 sm:px-4 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gradient-to-b before:from-gray-700 before:to-slate-50 text-sm sm:text-base">
								<div class="flex flex-col relative">
									<div className="absolute -left-10 xl:-left-11 rounded-full w-7 h-7 xl:w-9 xl:h-9 overflow-hidden ring-2">
										<img
											className="w-full h-full object-cover"
											src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1694527181/Portfolio/exp/1686382464747_vc7glk.jpg"
											alt=""
										/>
									</div>

									<h3 class="text-lg xl:text-xl font-bold">
										Codebell Technologies (Intern)
									</h3>

									<time class="text-xs uppercase text-gray-400">
										APR 2023 - MAY 2023
									</time>

									<p class="mt-3">
										<b>Technologies Used:</b> HTML5 · Cascading Style Sheets
										(CSS) · JavaScript
									</p>

									<ul className="list-disc m-4 text-slate-700">
										<li>
											Implemented day to day design changes from Figma to live
											website.
										</li>
										<li>
											Developed high-quality, responsive, and userfriendly
											website.
										</li>
										<li>
											Continuously improved my technical skills and knowledge by
											staying up-to-date with the latest web development trends
											and technologies, and sharing my learnings with the team.
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
