import { HiOutlineExternalLink } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project, styles, initials }) => {
	const [open, setOpen] = useState(false);
	const screenTouch = window.matchMedia("(pointer: coarse)").matches

	return (
		<>
			{
				initials ?
					<motion.div
						layout
						initial={initials}
						animate={{ translateY: 0, opacity: 1 }
						}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{
							type: "spring",
						}}
						onMouseEnter={() => setOpen(true)}
						onMouseLeave={() => setOpen(false)}
						onMouseOver={() => screenTouch && setOpen(true)}
						className="relative flex flex-col justify-center mx-auto overflow-hidden bg-gray-100 rounded-2xl group sm:w-2/3 lg:w-full"
					>

						<div className="z-10 flex items-center h-full px-6 py-2 w-86">
							<div>
								<img
									className="object-contain w-full h-full m-auto rounded-xl drop-shadow-md"
									src={project.ImageUrl}
									alt={project.Title + " image"}
								/>
							</div>
						</div>

						<div className="flex flex-col justify-between px-6 pb-4">
							<p className="mb-2 text-xl font-bold">{project.Title}</p>

							<div>
								<p>
									<span className="font-bold">Techstack</span> - {project.Techstack}
								</p>
								<p>
									<span className="font-bold">Libraries</span> - {project.Library}
								</p>
							</div>
						</div>

						<div
							className={`${open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
								} absolute flex top-0 h-full w-full my-auto bottom-0  group-hover: z-20 right-0 bg-sky-900/70 duration-700 rounded-2xl`}
						>
							<div
								className="flex justify-between gap-6 m-auto text-3xl w-max h-max">
								<Link
									to={project.Github}
									className="p-2 duration-500 rounded-full bg-slate-50 hover:rotate-6"
								>
									<AiFillGithub />
								</Link>

								<Link
									to={project.ProjectLink}
									className="p-2 duration-500 rounded-full bg-slate-50 hover:rotate-6"
								>
									<HiOutlineExternalLink />
								</Link>

								<button
									onClick={() => setOpen(false)}
									className="p-2 duration-500 rounded-full bg-slate-50 hover:rotate-90"
								>
									<IoIosClose />
								</button>
							</div>
						</div>

						<div
							className={`top-0 absolute w-full h-1/2 bg-gradient-to-br from-gray-700 via-gray-900 to-black`}
						></div>
					</motion.div >
					:
					(
						<div
							style={styles}
							onMouseEnter={() => setOpen(true)}
							onMouseLeave={() => setOpen(false)}
							onMouseOver={() => screenTouch && setOpen(true)}
							className="relative flex flex-col justify-center mx-auto overflow-hidden bg-gray-100 rounded-2xl group sm:w-2/3 lg:w-full"
						>
							<div className="z-10 flex items-center h-full px-6 py-2 w-86">
								<div>
									<img
										className="object-contain w-full h-full m-auto rounded-xl drop-shadow-md"
										src={project.ImageUrl}
										alt={project.Title + " image"}
									/>
								</div>
							</div>

							<div className="flex flex-col justify-between px-6 pb-4">
								<p className="mb-2 text-xl font-bold">{project.Title}</p>

								<div>
									<p>
										<span className="font-bold">Techstack</span> - {project.Techstack}
									</p>
									<p>
										<span className="font-bold">Libraries</span> - {project.Library}
									</p>
								</div>
							</div>

							<div
								className={`${open ? "translate-y-0 opacity-100 z-20" : "translate-y-full opacity-0 -z-10"
									} absolute flex top-0 h-full w-full my-auto bottom-0 right-0 bg-sky-900/70 duration-700 rounded-2xl`}
							>
								<div
									className="flex justify-between gap-6 m-auto text-3xl w-max h-max">
									<Link
										to={project.Github}
										className="p-2 duration-500 rounded-full bg-slate-50 hover:rotate-6"
									>
										<AiFillGithub />
									</Link>

									<Link
										to={project.ProjectLink}
										className="p-2 duration-500 rounded-full bg-slate-50 hover:rotate-6"
									>
										<HiOutlineExternalLink />
									</Link>

									<button
										onClick={() => setOpen(false)}
										className="p-2 duration-500 rounded-full bg-slate-50 hover:rotate-90"
									>
										<IoIosClose />
									</button>
								</div>
							</div>

							<div className={`top-0 absolute w-full h-1/2 bg-gradient-to-br from-gray-700 via-gray-900 to-black`} />
						</div>
					)
			}
		</>

	);
};

export default ProjectCard;
