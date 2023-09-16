import { HiOutlineExternalLink } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProjectCard = ({ project, styles, initials }) => {
	const [open, setOpen] = useState(false);

	console.log(open);

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
						className="flex flex-col justify-center rounded-2xl overflow-hidden relative group bg-gray-100 w-full"
					>
						<div className="flex items-center w-86 px-6 py-4 z-10">
							<img
								className="min-w-full min-h-full object-cover"
								src={project.ImageUrl}
								alt="portfolio illustration"
							/>
						</div>

						<div className="flex flex-col justify-between px-6 pb-4 text-sm">
							<p className="text-lg font-bold mb-2">{project.Title}</p>

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
								} absolute flex top-0 h-full w-full my-auto bottom-0 z-30 right-0 bg-sky-900/70 duration-700 rounded-2xl`}
						>
							<div className="m-auto w-max h-max justify-between flex gap-6 text-2xl">
								<Link
									target="_blank"
									to={project.Github}
									className=" bg-slate-50 p-2 hover:rotate-6 rounded-full duration-500"
								>
									<AiFillGithub />
								</Link>

								<Link
									target="_blank"
									to={project.ProjectLink}
									className="bg-slate-50 p-2 rounded-full hover:rotate-6 duration-500"
								>
									<HiOutlineExternalLink />
								</Link>

								<button
									onClick={() => setOpen(false)}
									className="bg-slate-50 p-2 rounded-full hover:rotate-90 duration-500"
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
					(<div
						style={styles}
						onMouseEnter={() => setOpen(true)}
						onMouseLeave={() => setOpen(false)}
						className="flex flex-col justify-center rounded-2xl overflow-hidden relative group bg-gray-100"
					>
						<div className="flex items-center w-86 h-full px-6 py-4 z-10">
							<img
								className="min-w-full min-h-full object-contain"
								src={project.ImageUrl}
								alt="portfolio illustration"
							/>
						</div>

						<div className="flex flex-col justify-between px-6 pb-4 text-sm">
							<p className="text-lg font-bold mb-2">{project.Title}</p>

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
							<div className="m-auto w-max h-max justify-between flex gap-6 text-2xl">
								<Link
									to={project.Github}
									className=" bg-slate-50 p-2 hover:rotate-6 rounded-full duration-500"
								>
									<AiFillGithub />
								</Link>

								<Link
									to={project.ProjectLink}
									className="bg-slate-50 p-2 rounded-full hover:rotate-6 duration-500"
								>
									<HiOutlineExternalLink />
								</Link>

								<button
									onClick={() => setOpen(false)}
									className="bg-slate-50 p-2 rounded-full hover:rotate-90 duration-500"
								>
									<IoIosClose />
								</button>
							</div>
						</div>

						<div
							className={`top-0 absolute w-full h-1/2 bg-gradient-to-br from-gray-700 via-gray-900 to-black`}
						></div>
					</div>)
			}
		</>

	);
};

export default ProjectCard;
