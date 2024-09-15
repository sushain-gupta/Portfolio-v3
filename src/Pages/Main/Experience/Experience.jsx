import { BsDot } from "react-icons/bs";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { experience } from "../../../data/experience";

const Experience = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section
			name="experience"
			className="flex flex-col items-center justify-center min-h-screen mb-24 sm:mb-12"
		>
			<div
				ref={ref}
				style={{
					transform: isInView ? "none" : "translateY(100px)",
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
				}}
				className="sm:bg-gray-100 rounded-3xl">
				<div className="container max-w-5xl mx-auto sm:px-4 sm:py-12">
					<div className="flex flex-col gap-6 mx-4 lg:flex-row">
						<div className="">
							<div className="mb-5 sm:text-left sm:mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md sm:before:mx-0 before:bg-emerald-400">
								<h3 className="text-3xl font-bold heading xl:text-4xl">
									Experience
								</h3>
								<span className="text-sm font-bold text-gray-400">
									These are the companies where I have previously worked.
								</span>
							</div>
						</div>
						<div className="relative space-y-6 sm:px-4">
							<div className="space-y-12 relative pl-4 sm:px-4 sm:space-y-8 before:absolute before:top-2 before:bottom-0 before:w-0.5 before:-left-3 before:bg-gradient-to-b before:from-gray-700 before:to-slate-50 text-sm sm:text-base">
								{
									experience.map((exp, key) => {
										return (
											<div key={key} className="relative flex flex-col">
												<div className="absolute overflow-hidden rounded-full -left-10 xl:-left-11 w-7 h-7 xl:w-9 xl:h-9 ring-2">
													<img
														className="object-cover w-full h-full"
														src={exp.companyLogo}
														alt={exp.companyName}
													/>
												</div>

												<h3 className="text-lg font-bold xl:text-xl">
													{exp.companyName} ({exp.jobRole})
												</h3>

												<time className="text-xs text-gray-400 uppercase">
													{exp.duration}
												</time>

												{
													exp.techstack &&
													<p className="mt-3">
														<b>Technologies Used:</b>{" "}
														{
															exp.techstack.map((tech, key) => {
																return (
																	<span key={key} className="inline-flex items-center">
																		{
																			key > 0 &&
																			<span className="text-sm text-slate-400"><BsDot /></span>
																		}
																		<span>{tech} </span>
																	</span>
																)
															})
														}
													</p>
												}

												<ul className="m-4 list-disc text-slate-700">
													{
														exp.description.map((desc, key) => {
															return (
																<li key={key}>
																	{desc}
																</li>
															)

														})
													}
												</ul>
											</div>
										)
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section >
	);
};

export default Experience;
