import React from "react";

const Experience = () => {
	return (
		<section className="my-24 flex flex-col justify-center">
			<div class="bg-gray-100 rounded-3xl">
				<div class="container max-w-5xl px-4 py-12 mx-auto">
					<div class="grid gap-4 mx-4 sm:grid-cols-12">
						<div class="col-span-12 sm:col-span-3">
							<div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-emerald-400">
								<h3 class="text-3xl font-semibold">
									{" "}
									<h2 className="heading text-4xl font-bold">Experience</h2>
								</h3>
								<span class="text-sm font-bold text-gray-400">
									These are the compaines where I have previously worked.
								</span>
							</div>
						</div>
						<div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
							<div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gradient-to-b before:from-gray-700 before:to-slate-50">
								<div class="flex flex-col relative">
									<div className="absolute -left-11 rounded-full w-9 h-9 overflow-hidden ring-2">
										<img
											className="w-full h-full object-cover"
											src="https://res.cloudinary.com/dkezwrb3a/image/upload/v1694527181/Portfolio/exp/1686382464747_vc7glk.jpg"
											alt=""
										/>
									</div>

									<h3 class="text-xl font-bold">
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
